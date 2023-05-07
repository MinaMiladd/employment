const router = require("express").Router();
const conn = require("../db/dbConnection");
const { body, validationResult } = require('express-validator');
const util = require("util"); // helper
const bcrypt = require("bcrypt");
const crypto = require("crypto");
// LOGIN

router.post("/login",
    body("email").isEmail().withMessage("Please Enter A Valid Email"),
    body("password").isLength({ min: 8, max: 12 })
        .withMessage("Password Should Be Between (8 : 12) Character"),


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
            const user = await query("select * from user where email = ?",
                [req.body.email]
            );
            if (user.length == 0) {
                res.status(404).json({
                    errors: [
                        {
                            "msg": "Email Or Password Not Found.",
                        },
                    ],
                });
            }

            //3- COMPARE HASHED PASSWORD
            const ckeckPassword = await bcrypt.compare(req.body.password, user[0].password)
            if (ckeckPassword) {
                delete user[0].password;
                res.status(200).json(user[0])
            } else {
                res.status(404).json({
                    errors: [
                        {
                            "msg": "Email Or Password Not Found.",
                        },
                    ],
                });
            }
            res.json("Hii");
        } catch (err) {
            res.status(500).json({ err: err });
        }
    })
 

//REGISTRATION

router.post("/register",
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

            //3-PREPARE OBJECT USER TO SAVE
            const userData = {
                email: req.body.email,
                password: await bcrypt.hash(req.body.password, 10),
                phone: req.body.phone,
                token: crypto.randomBytes(16).toString("hex"), //JSON WEB TOKEN , CRYPTO --> RANDOM ENCRYPTION STANDARD
            };


            //4-INSERT USER OBJECT INTO DB
            await query("insert into user set ?", userData);
            delete userData.password;
            res.status(200).json(userData);
        } catch (err) {
            res.status(500).json({ err: err });
        }
    })
module.exports = router;