const mongoose = require('mongoose');

var Student  = new mongoose.Schema({
    StudentName:{
        type:String
    },
    StudentEmail:{
        type:String
    },
    StudenAddress:{
        type:String
    },
    StudenAge:{
        type:String
    },
    StudentCourse:{
        type:String
    },
    StudentGander:{
        type:String
    },
    StudentMobileNo:{
        type:String
    },

});

module.exports = mongoose.model('Student',Student)