const mongoose = require("mongoose");

const dbConnection = () => {
    // connect DB
    mongoose
        .connect(process.env.DB_URI)
        .then((conn) => {
            console.log(`DataBase Connected: ${conn.connection.host}`);
        })
        .catch((err) => {
            console.log("Error DB Connenction: ${err}");
            process.exit(1);
        });
};

module.exports = dbConnection;