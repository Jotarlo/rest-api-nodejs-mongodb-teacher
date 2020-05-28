/** packages */
const config = require("config");
const chalk = require("chalk");
const mongoose = require("mongoose");

/** connection string data */
const databaseInfo = config.get("db-connection");
const host = databaseInfo.host;
const port = databaseInfo.port;
const databaseName = databaseInfo.database;
const connString = `mongodb://${host}:${port}/${databaseName}`;

/** Message's color */
let connectedMessage = chalk.bold.green;
let disconnectedMessage = chalk.bold.cyan;
let errorMessage = chalk.bold.red;
let finishedMessage = chalk.bold.magenta;

/** DB connection */

module.exports = () => {
    mongoose.connect(connString);

    mongoose.connection.on("connected", () => {
        console.log(connectedMessage("Connected succsessfully"));
    });

    mongoose.connection.on("disconnected", () => {
        console.log(disconnectedMessage("Disconnected.."));
    });

    mongoose.connection.on("error", () => {
        console.log(errorMessage("Error connecting"));
    });

    mongoose.connection.on("SIGINT", () => {
        mongoose.connection.close(() => {
            console.log(finishedMessage("Server is down."));
        });
    });
}