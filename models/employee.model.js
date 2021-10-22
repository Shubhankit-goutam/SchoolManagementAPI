const mongoose = require('mongoose');

var Employee = new mongoose.Schema({
    EmployeeName:{
        type:String
    }

});


module.exports = mongoose.model('Employee',Employee);