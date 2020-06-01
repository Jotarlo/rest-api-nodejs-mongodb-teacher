/** import packages */
const mongoose = require("mongoose");
const mongooseUniqueValidator = require("mongoose-unique-validator");

/** Schema Definition */
let Schema = mongoose.Schema;

/** Teacher Schema */
let courseSchema = new Schema({
    code: {
        type: "String",
        unique: true,
        required: true
    },
    name: {
        type: "String",
        required: true
    },
    startDate: {
        type: "Date",
        required: true
    },
    finalDate: {
        type: "Date",
        required: true
    },
    studentsAmountLimit:{
        type:"Number",
        min: 1,
        max: 50
    },
    teacherId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "coll_teacher",
        required: true
    }
},
{
    timestamps: true
});

courseSchema.plugin(mongooseUniqueValidator);
module.exports = courseSchema;