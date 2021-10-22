const mongoose = require('mongoose');

const Salary = new mongoose.Schema({
 salery :{
    type:String
    }
});

module.exports = mongoose.model('Salary',Salary)