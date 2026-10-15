const express = require("express");
const router = express.Router();

const machine = require("../models/machine");

router.post("/Save_Machine", (req, res) => {

    const data = req.body;

    console.log("Machine Data:", data);

    machine.Save_Machine(data, (err, result) => {

        if (err) {

            console.error("Error saving machine:", err);

            return res.status(500).json({
                success: false,
                message: "Error saving machine",
                error: err
            });
        }

        return res.status(200).json({
            success: true,
            message: data.machine_id > 0
                ? "Machine updated successfully"
                : "Machine saved successfully",
            data: result[0]
        });

    });

});
router.get("/Get_Machines", (req, res) => {

    try {

        machine.Get_Machines(req.query, (err, result) => {

            if (err) {

                console.error("Error fetching machines:", err);

                return res.status(500).json({
                    success: false,
                    message: "Error fetching machines",
                    error: err
                });

            }

            return res.status(200).json({
                success: true,
                data: result
            });

        });

    } catch (error) {

        console.error("Error:", error);

        return res.status(500).json({
            success: false,
            message: "Internal server error"
        });

    }

});

router.delete("/Delete_Machine", (req, res) => {

    try {

        const data = req.body;

        machine.Delete_Machine(data, (err, result) => {

            if (err) {

                console.error("Error deleting machine:", err);

                return res.status(500).json({
                    success: false,
                    message: "Error deleting machine",
                    error: err
                });

            }

            return res.status(200).json({
                success: true,
                message: "Machine deleted successfully"
            });

        });

    } catch (error) {

        console.error("Error:", error);

        return res.status(500).json({
            success: false,
            message: "Internal server error"
        });

    }

});

router.get('/Get_Machine_Allocation', function (req, res) {
    machine.Get_Machine_Allocation({}, function (error, result) {

        if (error) {

            console.log(error);

            return res.status(500).json({
                success: false,
                message: "Failed to get machine allocation",
                error: error
            });

        }

        return res.status(200).json({
            success: true,
            data: result[0]
        });

    });

});
router.post('/Save_Machine_Allocation', function (req, res) {

    console.log("Request Body:", req.body);

    machine.Save_Machine_Allocation(req.body, function (error, result) {

        if (error) {

            console.log(error);

            return res.status(500).json({
                success: false,
                message: error.sqlMessage || "Failed to save machine allocation"
            });

        }

        return res.status(200).json({
            success: true,
            message: result[0][0].message
        });

    });

});
module.exports = router;