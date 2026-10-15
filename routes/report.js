const express = require("express");
const router = express.Router();

const reports = require("../models/report");



router.get('/Payment_Report', function (req, res) {
    reports.Payment_Report(function (err, result) {
        if (err) {
            return res.status(500).json({
                success: false,
                message: err.message
            });
        }

        res.json({
            success: true,
            data: result[0]
        });
    });
});

module.exports = router;