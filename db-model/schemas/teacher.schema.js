/** import packages */
const mongoose = require("mongoose");
const mongooseUniqueValidator = require("mongoose-unique-validator");

/** Schema Definition */
let Schema = mongoose.Schema;

/** Teacher Schema */
let teacherSchema = new Schema({
    document: {
        type: "String",
        unique: true,
        required: true
    },
    name: {
        type: "String",
        unique: false,
        required: true
    },
    lastname: {
        type: "String",
        unique: false,
        required: true
    },
    courses: ["String"]
},
{
    timestamps: true
});

teacherSchema.plugin(mongooseUniqueValidator);
module.exports = teacherSchema;