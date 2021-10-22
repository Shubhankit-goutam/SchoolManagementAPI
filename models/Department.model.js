const mongoose = require('mongoose');

const Department = new mongoose.Schema({
    DepartmentName:{
        type:String
    }
});

module.exports =  mongoose.model('Department',Department);