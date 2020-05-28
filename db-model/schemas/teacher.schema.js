/** import packages */
const mongoose = require("mongoose");

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

module.exports = teacherSchema;