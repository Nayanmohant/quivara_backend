const db = require("../dbconnection");

const expense = {

      Save_Expense: function (data, callback) {
        db.query(
            "CALL Save_Expense(?, ?, ?, ?, ?, ?)",
            [
                data.Expense_Id || 0,
                data.Expense_Date,
                data.Expense_Type_Id,
                data.Amount,
                data.Description || "",
                data.Payment_Method || ""
            ],
            callback
        );
    },

    // Get Expenses
    Get_Expenses: function (callback) {
        db.query(
            "CALL Get_Expenses()",
            callback
        );
    },

    // Delete Expense
    Delete_Expense: function (Expense_Id, callback) {
        db.query(
            "CALL Delete_Expense(?)",
            [Expense_Id],
            callback
        );
    },

    // Save / Update Expense Type
    Save_Expense_Type: function (data, callback) {
        db.query(
            "CALL Save_Expense_Type(?, ?)",
            [
                data.Expense_Type_Id || 0,
                data.Expense_Type_Name
            ],
            callback
        );
    },

    // Get Expense Types
    Get_Expense_Types: function (callback) {
        db.query(
            "CALL Get_Expense_Types()",
            callback
        );
    },

    // Delete Expense Type
    Delete_Expense_Type: function (Expense_Type_Id, callback) {
        db.query(
            "CALL Delete_Expense_Type(?)",
            [Expense_Type_Id],
            callback
        );
    }

};
module.exports = expense;