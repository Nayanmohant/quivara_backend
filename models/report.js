const db = require("../dbconnection");


const reports = {

    Payment_Report: function (callback) {
    db.query(
        "CALL Payment_Report()",
        callback
    );
},


};

module.exports = reports;