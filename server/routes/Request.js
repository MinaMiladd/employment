const router = require("express").Router();
const conn = require("../db/dbConnection");
const authorized = require("../middleware/authorize");
const admin = require("../middleware/admin");
const { body, validationResult } = require('express-validator');
const util = require("util"); // helper



// Select All Requests
router.get("/get-requests", admin, (req, res) => {
    const sqlGet = "SELECT * FROM user_request WHERE status='Pending'";
    conn.query(sqlGet, (error, result) => {
        res.send(result);
    });
});

// Select History Requests
router.get("/get-history-requests", admin, (req, res) => {
    const sqlGet = "SELECT * FROM user_request WHERE status='Accepted' or status = 'Rejected'";
    conn.query(sqlGet, (error, result) => {
        res.send(result);
    });
});


// Accept a Request
router.put("/accept-request/:id", admin, (req, res) => {
    const { id } = req.params;
    const sqlUpdata = "UPDATE `user_request` SET `status`='Accepted' WHERE id=?";
    conn.query(sqlUpdata, [id], (error, result) => {
        res.send(result);
    });
});


// Reject a Request
router.put("/reject-request/:id", admin, (req, res) => {
    const { id } = req.params;
    const sqlUpdata = "UPDATE `user_request` SET `status`='Rejected' WHERE id=?";
    conn.query(sqlUpdata, [id], (error, result) => {
        res.send(result);
    });
});


// delete Request
router.delete("/remove-request/:id", admin, (req, res) => {
    const { id } = req.params;
    const sqlRemove = "DELETE FROM `user_request` WHERE id=? ";
    conn.query(sqlRemove, [id], (error, result) => {
        if (error) {
            console.log(error);
        }
        res.status(500).json(error);
    });
});


module.exports = router;
