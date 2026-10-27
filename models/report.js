const db = require("../dbconnection");


const reports = {

    Payment_Report: function (callback) {
    db.query(
        "CALL Payment_Report()",
        callback
    );
},
Financial_Report: function (data, callback) {
    db.query(
        "CALL Financial_Report(?, ?)",
        [
            data.From_Date,
            data.To_Date
        ],
        callback
    );
},


};

module.exports = reports;