const mongoose = require('mongoose');

var Faculty = new mongoose.Schema({
    FacultyName:{
        type:String
    },
    FacultyEmail:{
        type:String
    },
    FacultyMobileNo:{
        type:String
    },
    FacultyAddress:{
        type:String
    },
    FacultyQualification:{
        type:String
    },
    FacultyGander:{
        type:String
    },

});


module.exports = mongoose.model('Faculty',Faculty);