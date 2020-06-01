/** controller import */
const controllerCourse = require("../controllers/course.controller");

module.exports = (app) => {
    app.post("/api/course/create", (req, res, next) => {
        controllerCourse.createCourse(req, res, next);
    });

    app.get("/api/course/getAll", (req, res, next) => {
        controllerCourse.getAllCourses(req, res, next);
    });

    app.get("/api/course/getbycode/:code", (req, res, next) => {
        controllerCourse.getByCode(req, res, next);
    });

    app.put("/api/course/update", (req, res, next) => {
        controllerCourse.updateCourse(req, res, next);
    });

    app.delete("/api/course/delete/:id", (req, res, next) => {
        controllerCourse.removeCourse(req, res, next);
    });
}