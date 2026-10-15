require("dotenv").config();

const express = require("express");
const db = require("./dbconnection");
const cors = require("cors");

const customerRoutes = require("./routes/customer");
const machineRoutes = require("./routes/machine");
const settingsRoutes = require("./routes/settings");
const expenseRoutes = require("./routes/expense");
const reportRoutes = require("./routes/report");

const morgan = require("morgan");


const app = express();

app.use(cors());


app.use(express.json());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use("/customer", customerRoutes);
app.use("/machine", machineRoutes);
app.use("/settings", settingsRoutes);
app.use("/Expense", expenseRoutes);
app.use("/Report", reportRoutes);

app.get("/", function (req, res) {
    res.json({
        success: true,
        message: "API is running"
    }); 
});

app.get("/test-db", function (req, res) {

    db.query("SELECT 1 AS Test", function (error, result) {

        if (error) {
            console.log(error);

            return res.status(500).json({
                success: false,
                message: "Database connection failed"
            });
        }

        res.json({
            success: true,
            message: "Database connected",
            data: result
        });
    });

});

const PORT = process.env.PORT || 5000;

app.listen(PORT, function () {
    console.log(`Server running on port ${PORT}`);
});