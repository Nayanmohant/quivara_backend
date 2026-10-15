const express = require("express");
const router = express.Router();

const Customer = require("../models/customer");

router.post("/Save_Customer", function (req, res) {

     console.log("Content-Type:", req.headers["content-type"]);
    console.log("Request Body:", req.body); // Log the request body for debugging

    Customer.Save_Customer(req.body, function (error, result) {

        if (error) {

            console.log(error);

            return res.status(500).json({
                success: false,
                message: "Error while saving customer"
            });
        }

        res.json({
            success: true,
            message: "Customer saved successfully",
            Customer_Id: result.insertId
        });

    });

});

router.get("/Get_Customers", function(req, res) {

    Customer.Get_Customers(function(error, result) {

        if (error) {

            console.log(error);

            return res.status(500).json({
                success: false,
                message: "Error while getting customers"
            });

        }

        res.json({
            success: true,
            data: result[0]
        });

    });

});
router.post('/Delete_Customer_Entry', function (req, res) {

    Customer.Delete_Customer_Entry(req.body, function (error, result) {

        if (error) {
            console.log(error);

            return res.status(500).json({
                success: false,
                message: error.sqlMessage || "Failed to delete entry"
            });
        }

        return res.status(200).json({
            success: true,
            message: result[0][0].message
        });

    });

});
router.get("/Get_Customer_Details/:Customer_Id", function(req, res) {

    Customer.Get_Customer_Details(req.params.Customer_Id, function(error, result) {

        if (error) {

            console.log(error);

            return res.status(500).json({
                success: false,
                message: "Error while getting customer"
            });
        }

        res.json({
            success: true,
            data: result[0]
        });
    });
});

router.post("/Save_Dried", function(req, res) {

    console.log("Request Body:", req.body);

    Customer.Save_Dried(req.body, function(error, result) {

        if (error) {
            console.log(error);

            return res.status(500).json({
                success: false,
                message: "Error while saving dried KG"
            });
        }

        res.json({
            success: true,
            message: "Dried KG saved successfully",
            Entry_Id: req.body.entry_id
        });
    });
});
router.post("/Start_Drying", function(req, res) {

    console.log("Request Body:", req.body);

    Customer.Start_Drying(req.body.entry_id, function(error, result) {

        if (error) {
            console.log(error);

            return res.status(500).json({
                success: false,
                message: "Error while starting drying process"
            });
        }

        res.json({
            success: true,
            message: result[0][0].Message,
            data: result[0][0]
        });
    });
});
router.post("/Start_Delivery", function(req, res) {

    console.log("Request Body:", req.body);

    Customer.Start_Delivery(req.body, function(error, result) {

        if (error) {
            console.log(error);

            return res.status(500).json({
                success: false,
                message: "Error while starting delivery"
            });
        }

        res.json({
            success: true,
            message: result[0][0].Message,
            data: result[0][0]
        });
    });
});
router.get("/Get_Dried", function(req, res) {

    Customer.Get_Dried(function(error, result) {

        if (error) {
            console.log(error);

            return res.status(500).json({
                success: false,
                message: "Error while getting dried entries"
            });
        }

        res.json({
            success: true,
            data: result[0]
        });
    });
});
router.get("/Get_Delivered", function(req, res) {

    Customer.Get_Delivered(function(error, result) {

        if (error) {
            console.log(error);

            return res.status(500).json({
                success: false,
                message: "Error while getting delivered entries"
            });
        }

        res.json({
            success: true,
            data: result[0]
        });
    });
});
router.post("/Save_Customer_Payment", function(req, res) {

    console.log("Request Body:", req.body);

    Customer.Save_Customer_Payment(req.body, function(error, result) {

        if (error) {
            console.log(error);

            return res.status(500).json({
                success: false,
                message: "Error while saving payment"
            });
        }

        res.json({
            success: true,
            message: result[0][0].Message,
            Payment_Id: result[0][0].Payment_Id
        });
    });
});
router.get("/Get_All_Customers", function(req, res) {

    Customer.Get_All_Customers(function(error, result) {

        if (error) {
            console.log(error);

            return res.status(500).json({
                success: false,
                message: "Error while getting customers"
            });
        }

        res.json({
            success: true,
            data: result[0]
        });
    });
});
router.post("/Transfer_Customer", function(req, res) {

    console.log("Transfer Request:", req.body);

    Customer.Transfer_Customer(req.body, function(error, result) {

        if (error) {
            console.log(error);

            return res.status(500).json({
                success: false,
                message: "Error while transferring customer"
            });
        }

        var response = result[0][0];

        if (response.Success === 0) {
            return res.status(404).json({
                success: false,
                message: response.Message
            });
        }

        res.json({
            success: true,
            message: response.Message,
            transfer_id: response.Transfer_Id
        });

    });

});

router.post("/Save_Transfer_To", function(req, res) {

    console.log("Transfer To Request:", req.body);

    Customer.Save_Transfer_To(req.body, function(error, result) {

        if (error) {
            console.log(error);

            return res.status(500).json({
                success: false,
                message: "Error while saving transfer recipient"
            });
        }

        res.json({
            success: true,
            message: result[0][0].Message,
            transfer_to_id: result[0][0].Transfer_To_Id
        });

    });

});
router.get("/Get_Transfer_To", function(req, res) {

    Customer.Get_Transfer_To(function(error, result) {

        if (error) {
            console.log(error);

            return res.status(500).json({
                success: false,
                message: "Error while getting transfer recipients"
            });
        }

        res.json({
            success: true,
            data: result[0]
        });

    });

});
router.get("/Get_Transferred_Customers", function(req, res) {

    Customer.Get_Transferred_Customers(function(error, result) {

        if (error) {
            console.log(error);

            return res.status(500).json({
                success: false,
                message: "Error while getting transferred customers"
            });
        }

        res.json({
            success: true,
            data: result[0]
        });

    });

});
router.post("/Save_Drying_Rate", function(req, res) {

    const data = req.body;

    Customer.Save_Drying_Rate(data, function(error, result) {

        if (error) {
            console.log(error);

            return res.status(500).json({
                success: false,
                message: "Error while saving drying rate"
            });
        }

        const response = result[0][0];

        return res.json({
            success: response.Success === 1,
            message: response.Message,
            rate_id: response.Rate_Id || data.rate_id || null
        });
    });
});
router.get("/Get_Drying_Rates", function(req, res) {

    Customer.Get_Drying_Rates(function(error, result) {

        if (error) {
            console.log(error);

            return res.status(500).json({
                success: false,
                message: "Error while getting drying rates"
            });
        }

        return res.json({
            success: true,
            data: result[0]
        });
    });
});

router.get('/Customer_Payment_Details', function (req, res) {
    Customer.Customer_Payment_Details(
        req.query.Customer_Id,
        function (err, result) {
            if (err) {
                return res.status(500).json({
                    success: false,
                    message: err.message
                });
            }

            res.json({
                success: true,
               Total_Remaining_Amount:
                    result[1][0].Total_Remaining_Amount,
                data: result[0]
            });
        }
    );
});

module.exports = router;