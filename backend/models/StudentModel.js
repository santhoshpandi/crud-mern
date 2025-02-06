const mongoose = require('mongoose')

//Creating Schema
const StudentSchema = new mongoose.Schema({
  name:String,
  age:Number
})

//Creating Collection
const StudentModel = mongoose.model('student', StudentSchema)

module.exports = StudentModel