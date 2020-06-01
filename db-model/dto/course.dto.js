/** packages */
const mongoose = require("mongoose");
const db = require("../database");

/** Schema file */
const courseSchema = require("../schemas/course.schema");

/** start db connection */
db();

courseSchema.statics = {
    create: function(data, cb){
        let t = new this(data);
        t.save(cb);
    },
    getAll: function (query, cb){
        this.find(query, cb);
    },
    getByCode: function (query, cb){
        this.find(query, cb);
    },
    update: function(query, newdata, cb){
        this.findOneAndUpdate(query, {$set: newdata}, {new: true}, cb);
    },
    delete: function (query, cb){
        this.findOneAndDelete(query, cb);
    }
};

let courseColl = mongoose.model("coll_course", courseSchema);
module.exports = courseColl;