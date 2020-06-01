/** DTO file */
const courseDTO = require("../db-model/dto/course.dto");

exports.createCourse = (req, res, next) => {
    let course = {
        code: req.body.code,
        name: req.body.name,
        startDate: req.body.startDate,
        finalDate: req.body.finalDate,
        studentsAmountLimit: req.body.studentsAmountLimit
    };
    courseDTO.create(course, (err, data) => {
        if (err) {
            return res.json({
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

exports.getAllCourses = (req, res, next) => {
    courseDTO.getAll({}, (err, data) => {
        if (err) {
            return res.json({
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

exports.getByCode = (req, res, next) => {
    courseDTO.getByCode({ document: req.params.document }, (err, data) => {
        if (err) {
            return res.json({
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


exports.updateCourse = (req, res, next) => {
    let course = {
        code: req.body.code,
        name: req.body.name,
        startDate: req.body.startDate,
        finalDate: req.body.finalDate,
        studentsAmountLimit: req.body.studentsAmountLimit
    };
    courseDTO.update({_id: req.body.id}, course, (err, data) => {
        if (err) {
            return res.json({
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

exports.removeCourse = (req, res, next) => {
    courseDTO.delete({ _id: req.params.id }, (err, data) => {
        if (err) {
            return res.json({
                response: "KO",
                error: err
            });
        }

        res.json({
            response: "OK"
        });
    });
}