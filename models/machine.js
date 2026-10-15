const db = require("../dbconnection");

const machine = {
Save_Machine: function (data, callback) {

    return db.query(
        "CALL Save_Machine(" +
        "@Machine_Id_ :=?," +
        "@Machine_Name_ :=?," +
        "@Capacity_ :=?" +
        ")",
        [
            data.machine_id,
            data.machine_name,
            data.capacity
        ],
        callback
    );
},
    Get_Machines: function (data, callback) {

        return db.query(
            "SELECT * FROM machines ORDER BY Machine_Id DESC",
            callback
        );
    },

    Delete_Machine: function (data, callback) {

        return db.query(
            "DELETE FROM machines WHERE Machine_Id = ?",
            [
                data.machine_id
            ],
            callback
        );
    },
    Get_Machine_Allocation: function (data, callback) {

    return db.query(
        "CALL Get_Machine_Allocation()",
        callback
    );

},
Save_Machine_Allocation: function (data, callback) {

    return db.query(
        "CALL Save_Machine_Allocation(?)",
        [
            JSON.stringify(data.allocations)
        ],
        callback
    );

},


    };

module.exports = machine;