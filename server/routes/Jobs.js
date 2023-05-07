const router = require("express").Router();
const conn = require("../db/dbConnection");
const authorized = require("../middleware/authorize");
const admin = require("../middleware/admin");
const { body, validationResult } = require('express-validator');
const util = require("util"); // helper



// CREATE JOB  --> [ADMIN]
router.post("", admin,
    body("position").isString().withMessage("Please Enter A Valid Job Name"),
    body("description").isString().withMessage("Please Enter A Valid Job Description")
        .isLength({ min: 10 }).withMessage("Job Description Should Be At Least 10 Characters"),
    body("offer").isString().withMessage("Please Enter A Valid Job Offer"),
    body("max_candidate_number").isNumeric().withMessage("Please Enter A Valid Job Max Candidate Number"),
    body("qualifications").isString().withMessage("Please Enter A Valid Job Qualifications"),
    async (req, res) => {
        try {
            //1- VALIDATION REQUEST [MANUAL, EXPRESS VALIDATION]
            // const errors = validationResult(req);
            // if (!errors.isEmpty()) {
            //     return res.status(400).json({ errors: errors.array() });
            // }

            //2- PREPARE JOB OBJECT
            const job = {
                position: req.body.position,
                description: req.body.description,
                offer: req.body.offer,
                max_candidate_number: req.body.max_candidate_number,
                qualifications: req.body.qualifications,
            };

            //3- INSERT JOb INTO DB
            const query = util.promisify(conn.query).bind(conn);
            await query("insert into jobs set ?", job);
            res.status(200).json({
                msg: "Job Created Successfully",
            });
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    }
);

// UPDATE JOB  --> [ADMIN]
router.put(
    "/:id",  //PARAMS
    admin,
    body("position").isString().withMessage("Please Enter A Valid Job Name"),
    body("description").isString().withMessage("Please Enter A Valid Job Description")
        .isLength({ min: 10 }).withMessage("Job Description Should Be At Least 10 Characters"),
    body("offer").isString().withMessage("Please Enter A Valid Job Offer"),
    body("max_candidate_number").isNumeric().withMessage("Please Enter A Valid Job Max Candidate Number"),
    body("qualifications").isString().withMessage("Please Enter A Valid Job Qualifications"),
    async (req, res) => {
        try {
            //1- VALIDATION REQUEST [MANUAL, EXPRESS VALIDATION]
            const query = util.promisify(conn.query).bind(conn);
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }


            //2- CHECK IF JOB EXISTS OR NOT
            const job = await query("select * from jobs where id = ?", [
                req.params.id,
            ]);

            if (!job[0]) {
                res.status(404).json({
                    msg: "Job Not Found",
                });
            }

            //3- PREPARE JOB OBJECT
            const jobObj = {
                position: req.body.position,
                description: req.body.description,
                offer: req.body.offer,
                max_candidate_number: req.body.max_candidate_number,
                qualifications: req.body.qualifications,
            };

            // 4- UPDATE JOB
            await query("update jobs set ? where id = ?", [jobObj, job[0].id]);


            res.status(200).json({
                msg: "Job Updated Successfully",
            });


        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    }
);

// DELETE JOB  --> [ADMIN]
router.delete("/:id",//PARAMS
    admin,
    async (req, res) => {
        try {

            //1- CHECK IF JOB EXISTS OR NOT
            const query = util.promisify(conn.query).bind(conn);
            const job = await query("select * from jobs where id = ?", [
                req.params.id,
            ]);

            if (!job[0]) {
                res.status(404).json({
                    msg: "Job Not Found",
                });
            }

            //2- REMOVE JOB

            await query("delete from jobs where id = ? ", job[0].id);
            res.status(200).json({
                msg: "Job Deleted Successfully",
            });


        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    }
);


// LIST, SEARCH --> [ADMIN, USER]
router.get("", async (req, res) => {

    const query = util.promisify(conn.query).bind(conn);
    var search = ""
    if (req.query.search) {
        search = `where position LIKE '%${req.query.search}%' 
        or description LIKE '%${req.query.search}%' 
        or qualifications LIKE '%${req.query.search}%'`;
    }
    const jobs = await query(`select * from jobs ${search}`)

    res.status(200).json(jobs);
});

// SHOW JOB --> [ADMIN, USER]
router.get("/:id", async (req, res) => {

    const query = util.promisify(conn.query).bind(conn);
    const job = await query("select * from jobs where id = ?", [
        req.params.id,
    ]);

    if (!job[0]) {
        res.status(404).json({
            msg: "Job Not Found",
        });
    }

    job[0].requests = await query("select * from user_request where job_id = ?", job[0].id);
    res.status(200).json(job[0]);
});

// REQUEST --> [USER]
router.post("/request",
    authorized,
    body("job_id").isNumeric().withMessage("Please Enter A Valid Job ID"),

    async (req, res) => {
        try {
            const query = util.promisify(conn.query).bind(conn);
            //1- VALIDATION REQUEST [MANUAL, EXPRESS VALIDATION]
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }

            //2- CHECK IF JOB EXISTS OR NOT
            const job = await query("select * from jobs where id = ?", [
                req.body.job_id,
            ]);

            if (!job[0]) {
                res.status(404).json({
                    msg: "Job Not Found",
                });
            }

            // 3- PREPARE JOB REQUEST OBJECT
            const requestObj = {
                user_id: res.locals.user.id,
                job_id: job[0].id,

            };
            // 4- INSERT JOB OBJECT INTO DB
            await query("insert into user_request set ?", requestObj);

            res.status(200).json({
                msg: "Request Added Successfully",
            });
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    });

    // search function
    router.post("/search", (req, resp) => {
        console.log(req.body);
        
        const sql = "INSERT INTO history_research( key_word, user_id) VALUES (?)";
        const values = [[
          req.body.key_word,
          req.body.user_id ,

           ]];
           connection.query(sql,values);
        });


module.exports = router;