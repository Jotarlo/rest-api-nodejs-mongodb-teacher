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
const controllerCourse = require("./controllers/course.controller");

// Welcome
app.get("/", (req, res) => {
    res.send("Welcome to Express Server");
});

// Teacher C:create, R:read, U: update, D: delete

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


// Course 

app.post("/api/course/create", (req, res, next) => {
    controllerCourse.createCourse(req, res, next);
});

app.get("/api/course/getAll", (req, res, next) => {
    controllerCourse.getAllCourses(req, res, next);
});

app.get("/api/course/getbycode/:document", (req, res, next) => {
    controllerCourse.getByCode(req, res, next);
});

app.put("/api/course/update", (req, res, next) => {
    controllerCourse.updateCourse(req, res, next);
});

app.delete("/api/course/delete/:id", (req, res, next) => {
    controllerCourse.removeCourse(req, res, next);
});


/** App start */
app.listen(port, () => {
    console.log(`Server is running in port ${port}...`);
});

