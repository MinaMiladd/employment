const router = require("express").Router();
const conn = require("../db/dbConnection");
const util = require("util"); // helper
const authorized = require("../middleware/authorize");
const admin = require("../middleware/admin");
const { body, validationResult } = require('express-validator');
const { userInfo } = require("os");
const bcrypt = require("bcrypt");
const crypto = require("crypto");


// CREATE Applicant  --> [ADMIN]
router.post("", admin,
    body("email").isEmail().withMessage("Please Enter A Valid Email"),
    body("password").isLength({ min: 8, max: 12 })
        .withMessage("Password Should Be Between (8 : 12) Character"),
    body("phone").isInt().withMessage("Please Enter A Valid Phone").isLength({ min: 11, max: 11 }),

    async (req, res) => {
        try {
            //1- VALIDATION REQUEST [MANUAL, EXPRESS VALIDATION]
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }


            //2- CHECK IF EMAIL EXISTS
            // await / async
            const query = util.promisify(conn.query).bind(conn); // TRANSFORM QUERY MYSQL ----> PROMISE TO USE (AWAIT/ASYNC)
            const checkEmailExists = await query("select * from user where email = ?",
                [req.body.email]
            );
            if (checkEmailExists.length > 0) {
                res.status(400).json({
                    errors: [
                        {
                            "msg": "Email Already Exists"
                        },
                    ],
                });
            }


            //3- PREPARE Applicant OBJECT
            const applicant = {
                email: req.body.email,
                password: await bcrypt.hash(req.body.password, 10),
                phone: req.body.phone,
                token: crypto.randomBytes(16).toString("hex"),
            };

            //4- INSERT JOb INTO DB

            await query("insert into user set ?", applicant);
            res.status(200).json({
                msg: "Applicant Created Successfully",
            });
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    }
);


// UPDATE APPLICANTS  --> [ADMIN]
router.put(
    "/:id",  //PARAMS
    admin,
    body("email").isEmail().withMessage("Please Enter A Valid Email"),
    // body("password").isLength({ min: 8, max: 12 })
    //  .withMessage("Password Should Be Between (8 : 12) Character"),
    body("phone").isInt().withMessage("Please Enter A Valid Phone").isLength({ min: 11, max: 11 }),

    async (req, res) => {
        try {
            //1- VALIDATION REQUEST [MANUAL, EXPRESS VALIDATION]
            const query = util.promisify(conn.query).bind(conn);
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }


            //2- CHECK IF APPLICANT EXISTS OR NOT
            const applic = await query("select * from user where id = ?", [
                req.params.id,
            ]);

            if (!applic[0]) {
                res.status(404).json({
                    msg: "Applicant Not Found",
                });
            }
            //3- PREPARE applic OBJECT
            const applicObj = {
                email: req.body.email,
                //password: await bcrypt.hash(req.body.password, 10),
                phone: req.body.phone,
                // token: crypto.randomBytes(16).toString("hex"), //JSON WEB TOKEN , CRYPTO --> RANDOM ENCRYPTION STANDARD


            };

            // 4- UPDATE applicant
            await query("update user set ? where id = ?", [applicObj, applic[0].id]);


            res.status(200).json({
                msg: "Applicant Updated Successfully",
            });


        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    }
);

// DELETE APPLICANT  --> [ADMIN]
router.delete("/:id",//PARAMS
    admin,
    async (req, res) => {
        try {

            //1- CHECK IF APPLICANT EXISTS OR NOT
            const query = util.promisify(conn.query).bind(conn);
            const applic = await query("select * from user where id = ?", [
                req.params.id,
            ]);

            if (!applic[0]) {
                res.status(404).json({
                    msg: "Applicant Not Found",
                });
            }
            //2- REMOVE APPLICANT

            await query("delete from user where id = ? ", applic[0].id);
            res.status(200).json({
                msg: "Applicant Deleted Successfully",
            });


        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    }
);

// SHOW APPLICANT  --> [ADMIN, USER]
router.get("/:id", async (req, res) => {

    const query = util.promisify(conn.query).bind(conn);
    const applic = await query("select * from user where id = ?", [
        req.params.id,
    ]);

    if (!applic[0]) {
        res.status(404).json({
            msg: "applicant Not Found",
        });
    }

    res.status(200).json(applic[0]);
});

// LIST, SEARCH --> [ADMIN, USER]
router.get("", async (req, res) => {

    const query = util.promisify(conn.query).bind(conn);
    let search = ""
    if (req.query.search) {
        search = `where email LIKE '%${req.query.search}%' 
        or phone LIKE '%${req.query.search}%'`;
    }

    /*if (!search) {
        res.status(404).json({
            msg: "applicant Not Found",
        });
    }
*/
    const applic = await query(`select * from user ${search}`)
    res.status(200).json(applic);
});



module.exports = router;