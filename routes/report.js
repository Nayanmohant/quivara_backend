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

router.get("/Financial_Report", function (req, res) {
    const data = {
        From_Date: req.query.From_Date,
        To_Date: req.query.To_Date
    };

    if (!data.From_Date || !data.To_Date) {
        return res.status(400).json({
            success: false,
            message: "From_Date and To_Date are required"
        });
    }

    reports.Financial_Report(data, function (error, result) {
        if (error) {
            console.log(error);

            return res.status(500).json({
                success: false,
                message: "Failed to get financial report",
                error: error
            });
        }

        return res.status(200).json({
            success: true,
            data: result[0][0]
        });
    });
});

module.exports = router;