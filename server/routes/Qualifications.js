const router = require("express").Router();
const conn = require("../db/dbConnection");
const authorized = require("../middleware/authorize");
const admin = require("../middleware/admin");
const { body, validationResult } = require('express-validator');
const util = require("util"); // helper


// CREATE QALIFICATION  --> [ADMIN]
router.post("", admin,
    body("description").isString().withMessage("Please Enter A Valid Description")
        .isLength({ min: 10 }).withMessage(" Description Should Be At Least 10 Characters"),

    async (req, res) => {
        try {
            //1- VALIDATION REQUEST [MANUAL, EXPRESS VALIDATION]
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }

            //2- PREPARE QUALIFICATION OBJECT
            const qual = {
                description: req.body.description,
            };

            //3- INSERT QUALIFICATION INTO DB
            const query = util.promisify(conn.query).bind(conn);
            await query("insert into qualifications set ?", qual);
            res.status(200).json({
                msg: "qualification Created Successfully",
            });
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    }
);

// UPDATE QALIFICATION  --> [ADMIN]
router.put(
    "/:id",  //PARAMS
    admin,
    body("description").isString().withMessage("Please Enter A Valid Description")
        .isLength({ min: 10 }).withMessage("Description Should Be At Least 10 Characters"),

    async (req, res) => {
        try {
            //1- VALIDATION REQUEST [MANUAL, EXPRESS VALIDATION]
            const query = util.promisify(conn.query).bind(conn);
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }


            //2- CHECK IF QALIFICATION EXISTS OR NOT
            const qual = await query("select * from qualifications where id = ?", [
                req.params.id,
            ]);

            if (!qual[0]) {
                res.status(404).json({ ms: "qualificattion not found !" });
            };

            //3- PREPARE QUALIFICATION OBJECT
            const qualObj = {
                description: req.body.description,
            };

            // 4- UPDATE QUALIFICATION
            await query("update qualifications set ? where id = ?", [qualObj, qual[0].id]);


            res.status(200).json({
                msg: "qualification Updated Successfully",
            });


        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    }
);

// DELETE QALIFICATION  --> [ADMIN]
router.delete("/:id",//PARAMS
    admin,
    async (req, res) => {
        try {

            //1- CHECK IF QALIFICATION EXISTS OR NOT
            const query = util.promisify(conn.query).bind(conn);
            const qual = await query("select * from qualifications where id = ?", [
                req.params.id,
            ]);

            if (!qual[0]) {
                res.status(404).json({
                    msg: "qualification Not Found",
                });
            }

            //2- REMOVE QALIFICATION

            await query("delete from qualifications where id = ? ", qual[0].id);
            res.status(200).json({
                msg: "qualification Deleted Successfully",
            });


        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    }
);


module.exports = router;