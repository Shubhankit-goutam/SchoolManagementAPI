var express = require('express')
var router = express.Router()

const schoolcontroller = require('../controller/school.controller');


 
router.get('/SchoolDetails',schoolcontroller.SchoolDetails )
router.post('/School',schoolcontroller.Schoolregister )
router.post('/Employe',schoolcontroller.Employee)

module.exports = router;