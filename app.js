/** Importing packages */
const express = require("express");
const config = require("config");
const bodyParser = require("body-parser");

/** App configuration */
let port = config.get("server-port");
let bodyParserJSON = bodyParser.json();
let bodyParserURLEncoded = bodyParser.urlencoded({extended: true});
const app = express();
app.use(bodyParserJSON);
app.use(bodyParserURLEncoded);

/** REST api methods */
const controller = require("./controllers/teacher.controller");

// Welcome
app.get("/", (req, res) => {
    res.send("Welcome to Express Server");
});

// C:create, R:read, U: update, D: delete

app.post("/api/teacher/create", (req, res, next) => {
    controller.createTeacher(req, res, next);
});

app.get("/api/teacher/getAll", (req, res, next) => {
    controller.getAllTeachers(req, res, next);
});

app.get("/api/teacher/getbydocument/:document", (req, res, next) => {
    controller.getByDocument(req, res, next);
});

app.put("/api/teacher/update", (req, res, next) => {
    controller.updateTeacher(req, res, next);
});

app.delete("/api/teacher/delete/:id", (req, res, next) => {
    controller.removeTeacher(req, res, next);
});

/** App start */
app.listen(port, () => {
    console.log(`Server is running in port ${port}...`);
});

