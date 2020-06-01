
/** controller import */
const controller = require("../controllers/teacher.controller");

module.exports = (app) => {
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
}