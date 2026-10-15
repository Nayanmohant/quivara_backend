const db = require("../dbconnection");

const Customer = {

    Save_Customer: function (data, callback) {

        var sql = "CALL Save_Customer(?, ?, ?, ?, ?,?,?)";

        db.query(
            sql,
            [
                data.Entry_Id,
                data.customer_id,
                data.customer_name,
                data.phone_number,
                data.date,
                data.green_cardamom_kg,
                data.number_of_bags
            ],
            callback
        );
    },

      Get_Customers: function(callback) {

        var sql = "CALL Get_Customers()";

        db.query(sql, callback);

    },
    Delete_Customer_Entry: function (data, callback) {
    return db.query(
        "CALL Delete_Customer_Entry(?)",
        [
            data.Entry_Id
        ],
        callback
    );
},
    Get_Customer_Details: function(Customer_Id, callback) {

    var sql = "CALL Get_Customer_Details(?)";

    db.query(sql, [Customer_Id], callback);
},
Save_Dried: function(data, callback) {

    var sql = "CALL Save_Dried(?, ?)";

    db.query(sql, [
        data.entry_id,
        data.dried_kg
    ], callback);
},
Start_Drying: function(Entry_Id, callback) {

    var sql = "CALL Start_Drying(?)";

    db.query(sql, [Entry_Id], callback);
},
Start_Delivery: function(data, callback) {

    var sql = "CALL Start_Delivery(?)";

    db.query(sql, [
        data.entry_id
    ], callback);
},
Get_Dried: function(callback) {

    var sql = "CALL Get_Dried()";

    db.query(sql, callback);
},
Get_Delivered: function(callback) {

    var sql = "CALL Get_Delivered()";

    db.query(sql, callback);
},
Save_Customer_Payment: function(data, callback) {

    var sql = "CALL Save_Customer_Payment(?, ?, ?, ?, ?,?)";

    db.query(sql, [
        data.customer_id,
        data.entry_id,
        data.actual_amount,
        data.payment_method,
        data.amount_paid,
        data.Is_pending
    ], callback);
},
Get_All_Customers: function(callback) {
    var sql = "CALL Get_All_Customers()";
    db.query(sql, callback);
},
Transfer_Customer: function(data, callback) {

    var sql = "CALL Transfer_Customer(?, ?, ?,?)";

    db.query(sql, [
        data.entry_id,
        data.transfer_to,
        data.transfer_phone_number,
        data.Transfer_To_Id
    ], callback);

},
Save_Transfer_To: function(data, callback) {

    var sql = "CALL Save_Transfer_To(?, ?, ?)";

    db.query(sql, [
        data.transfer_to_id,
        data.transfer_to_username,
        data.transfer_phone_number
    ], callback);

},
Get_Transfer_To: function(callback) {

    var sql = "CALL Get_Transfer_To()";

    db.query(sql, callback);

},
Get_Transferred_Customers: function(callback) {

    var sql = "CALL Get_Transferred_Customers()";

    db.query(sql, callback);

},
Save_Drying_Rate: function(data, callback) {
    var sql = "CALL Save_Drying_Rate(?, ?)";

    db.query(sql, [
        data.rate_id || 0,
        data.rate_per_kg
    ], callback);
},
Get_Drying_Rates: function(callback) {

    var sql = "CALL Get_Drying_Rates()";

    db.query(sql, callback);
},
Customer_Payment_Details: function (Customer_Id, callback) {
    db.query(
        "CALL Customer_Payment_Details(?)",
        [Customer_Id],
        callback
    );
},


};

module.exports = Customer;