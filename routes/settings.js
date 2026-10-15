const express = require("express");
const router = express.Router();

const settings = require("../models/settings");




router.get('/Get_Foundation_Details', function (req, res) {
    settings.Get_Foundation_Details(function (err, result) {
        if (err) {
            return res.status(500).json({
                success: false,
                message: err.message
            });
        }

        res.json({
            success: true,
            data: result[0][0] || {}
        });
    });
});


router.post('/Save_Foundation_Details', function (req, res) {
    console.log("Request Body:", req.body); // Log the request body for debugging
    settings.Save_Foundation_Details(req.body, function (err, result) {
        if (err) {
            return res.status(500).json({
                success: false,
                message: err.message
            });
        }

        res.json({
            success: true,
            message: "Foundation details saved successfully"
        });
    });
});


module.exports = router;