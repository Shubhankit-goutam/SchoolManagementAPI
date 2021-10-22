const mongoose = require('mongoose');

var schoolSchema = new mongoose.Schema({
    schoolname:{
     type: String
    },
    education:{
     type:String
    },
    phoneno:{
     type:String   
    },
    email:{
        type:String
    },
    address:{
        type:String
    }
});

module.exports = mongoose.model( 'schoolSchema',schoolSchema );