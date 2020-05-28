/** packages */
const mongoose = require("mongoose");
const db = require("../database");

/** Schema file */
const teacherSchema = require("../schemas/teacher.schema");

/** start db connection */
db();

teacherSchema.statics = {
    create: function(data, cb){
        let t = new this(data);
        t.save();
    },
    getAll: function (query, cb){
        this.find(query, cb);
    },
    getByDocument: function (query, cb){
        this.find(query, cb);
    },
    update: function(query, newdata, cb){
        this.findOneAndUpdate(query, {$set: newdata}, {new: true}, cb);
    },
    delete: function (query, cb){
        this.findOneAndDelete(query, cb);
    }
};

let teacherColl = mongoose.model("coll_teacher", teacherSchema);
module.exports = teacherColl;