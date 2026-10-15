const express = require("express");
const router = express.Router();

const expense = require("../models/expense");


router.post('/Save_Expense', function (req, res) {
    expense.Save_Expense(req.body, function (err, result) {
        if (err) {
            return res.status(500).json({
                success: false,
                message: err.message
            });
        }

        res.json({
            success: true,
            message: 'Expense saved successfully'
        });
    });
});

// Get Expenses
router.get('/Get_Expenses', function (req, res) {
    expense.Get_Expenses(function (err, result) {
        if (err) {
            console.error(err);
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

// Delete Expense
router.post('/Delete_Expense', function (req, res) {
    expense.Delete_Expense(req.body.Expense_Id, function (err, result) {
        if (err) {
            return res.status(500).json({
                success: false,
                message: err.message
            });
        }

        res.json({
            success: true,
            message: 'Expense deleted successfully'
        });
    });
});

// Save / Update Expense Type
router.post('/Save_Expense_Type', function (req, res) {
    expense.Save_Expense_Type(req.body, function (err, result) {
        if (err) {
            return res.status(500).json({
                success: false,
                message: err.message
            });
        }

        res.json({
            success: true,
            message: 'Expense type saved successfully'
        });
    });
});

// Get Expense Types
router.get('/Get_Expense_Types', function (req, res) {
    expense.Get_Expense_Types(function (err, result) {
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

// Delete Expense Type
router.post('/Delete_Expense_Type', function (req, res) {
    expense.Delete_Expense_Type(
        req.body.Expense_Type_Id,
        function (err, result) {
            if (err) {
                return res.status(500).json({
                    success: false,
                    message: err.message
                });
            }

            res.json({
                success: true,
                message: 'Expense type deleted successfully'
            });
        }
    );
});

module.exports = router;