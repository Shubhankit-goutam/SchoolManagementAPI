const mongoose = require('mongoose');
const School = require('../models/school.model')
const Student = require('../models/student.model')
const Education = require('../models/education.model')
const Faculty = require('../models/Faculty.model')
const Employee = require('../models/employee.model')
const Department = require('../models/Department.model');
const Salary = require('../models/salary.model')
module.exports.Schoolregister = (req, res, next) => {
    const type = req.body.type
    switch (type) {
        case 'School':
            // School model
            var school = new School();
            school.schoolname = req.body.schoolname;
            school.education = req.body.education;
            school.email = req.body.email;
            school.phoneno = req.body.phoneno;
            school.address = req.body.address;
            school.save((err, result) => {
                if (!err) {
                    res.send({
                        "schoolResult": result,
                        "schoolResult": "successfully register ",
                        "status": "200"
                    })
                } else {
                    res.send(err);
                }
            });
            break;
        case 'Faculty':
            // Faculty model
            var Facultyobj = new Faculty();
            Facultyobj.FacultyName = req.body.FacultyName1;
            Facultyobj.FacultyEmail = req.body.FacultyEmail1;
            Facultyobj.FacultyMobileNo = req.body.FacultyMobileNo1;
            Facultyobj.FacultyAddress = req.body.FacultyAddress1;
            Facultyobj.FacultyQualification = req.body.FacultyQualification1;
            Facultyobj.FacultyGander = req.body.FacultyGander1;
            Facultyobj.save((err, result) => {
                if (!err) {
                    res.send({
                        "FacultyResult": result,
                        "FacultyResult": "successfully register ",
                        "status": "201"
                    })
                } else {
                    res.send(err);
                }
            });
            break;

        case 'Student':
            // Student model
            var student = new Student();
            student.StudentName = req.body.StudentName;
            student.StudentEmail = req.body.StudentEmail;
            student.StudenAddress = req.body.StudenAddress;
            student.StudenAge = req.body.StudenAge;
            student.StudentCourse = req.body.StudentCourse;
            student.StudentGander = req.body.StudentGander;
            student.StudentMobileNo = req.body.StudentMobileNo;
            student.save((err, result) => {
                if (!err) {
                    res.send({
                        "StudentResult": result,
                        "StudentResult": "successfully register ",
                        "status": "201"
                    })
                } else {
                    res.send(err);
                }
            });
            break;
        case 'Education':
            //Education model
            const education = new Education();
            education.courseName = req.body.courseName;
            education.courseDurations = req.body.courseDurations;
            education.courseFee = req.body.courseFee;
            education.courseType = req.body.courseType;
            education.save((err, result) => {
                if (!err) {
                    res.send({
                        "educationResult": result,
                        "educationResult": "successfully register ",
                        "status": "201"
                    })
                }
            })
        break;
    }


}

//get school details api

module.exports.SchoolDetails = (req, res, next) => {
    Student.find({}, function (err, result) {
        console.log(result);
        res.send({
            "SchoolDetails": result
        })
    });

}

// Employee API

module.exports.Employee = (req, res, next) => {
    var type = req.body.type;
    switch (type) {
        case 'Employee':
            const employee = new Employee();
            employee.EmployeeName = req.body.name;
            employee.save((err, result) => {
                if (!err) {
                    res.send({
                        "Result": result,
                        "message": "successfully register ",
                        "status": "200"
                    })
                } else {
                    res.send({
                        "erroor message": err,
                        "status": "201"
                    })
                }
            })
        break;

        case 'Department':
            const department = new Department();
            department.DepartmentName = req.body.dptname;
            department.save((err, result) => {
                if (!err) {
                    res.send({
                        "Result": result,
                        "Message": "successfully register Department ",
                        "status": "200"
                    })
                } else {
                    res.send({
                        "erroor message": err,
                        "status": "201"
                    })
                }
            })
        break;    
        case 'Salary':
            const salary = new Salary();
            salary.salary = req.body.salary;
            salary.save((err, result) => {
                if (!err) {
                    res.send({
                        "Result": result,
                        "Message": "successfully  salary ",
                        "status": "200"
                    })
                } else {
                    res.send({
                        "erroor message": err,
                        "status": "201"
                    })
                }
            })
        break;    
    }
}

