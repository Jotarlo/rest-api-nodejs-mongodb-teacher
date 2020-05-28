/** DTO file */
const teacherDTO = require("../db-model/dto/teacher.dto");

exports.createTeacher = (req, res, next) => {
    let teacher = {
        document: req.body.document,
        name: req.body.name,
        lastname: req.body.lastname,
        courses: req.body.courses
    };
    teacherDTO.create(teacher, (err, data) => {
        if (err) {
            res.json({
                response: "KO",
                error: err
            });
        }
        
        res.json({
            response: "OK",
            data: data
        });
    });
}

exports.getAllTeachers = (req, res, next) => {
    teacherDTO.getAll({}, (err, data) => {
        if (err) {
            res.json({
                response: "KO",
                error: err
            });
        }

        res.json({
            response: "OK",
            data: data
        });
    });
}

exports.getByDocument = (req, res, next) => {
    teacherDTO.getByDocument({ document: req.params.document }, (err, data) => {
        if (err) {
            res.json({
                response: "KO",
                error: err
            });
        }

        res.json({
            response: "OK",
            data: data
        });
    });
}


exports.updateTeacher = (req, res, next) => {
    let teacher = {
        document: req.body.document,
        name: req.body.name,
        lastname: req.body.lastname,
        courses: req.body.courses
    };
    teacherDTO.update({_id: req.body.id}, teacher, (err, data) => {
        if (err) {
            res.json({
                response: "KO",
                error: err
            });
        }
        res.json({
            response: "OK",
            data: data
        });
    });
}

exports.removeTeacher = (req, res, next) => {
    teacherDTO.delete({ _id: req.params.id }, (err, data) => {
        if (err) {
            res.json({
                response: "KO",
                error: err
            });
        }

        res.json({
            response: "OK"
        });
    });
}