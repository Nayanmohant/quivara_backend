const db = require("../dbconnection");

const settings  = {


    Get_Foundation_Details: function (callback) {
    db.query(
        "CALL Get_Foundation_Details()",
        callback
    );
},

Save_Foundation_Details: function (data, callback) {
    db.query(
        "CALL Save_Foundation_Details(?,?,?,?)",
        [
            data.foundation_name,
            data.primary_phone,
            data.secondary_phone,
            data.address
        ],
        callback
    );
},
Get_Customer_Payments: function (callback) {
    db.query(
        "CALL Get_Customer_Payments()",
        callback
    );
},

 };

module.exports = settings;