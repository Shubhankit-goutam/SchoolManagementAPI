const mongoose = require('mongoose');

var Education  = new mongoose.Schema({
    courseName:{
        type:String
    },
    courseDurations:{
        type:String
    },
    courseFee:{
        type:String
    },
    courseType:{
        type:String
    }
}); 

module.exports = mongoose.model('Education',Education)