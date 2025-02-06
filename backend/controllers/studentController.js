const Student = require('../models/StudentModel')

// GET - '/student'
const getStudent = async (req, res) => {
  try {
    const students = await Student.find({})  
    if(!students) return res.status(200).json({message:'Students Empty'})
    
    // 200 - OK
    res.status(200).json({
      data: students,
    })
  }
  catch (err) {
    res.status(500).json({
      message:err.message
    })
  }
}

// GET - '/student:id'
const getSingleStudent = async (req, res) => {
  try {
    const {id} = req.params
    const student = await Student.findOne({_id:id}).exec()  
    if(!student) return res.status(404).json({message:'Student Not Found'})
    
    // 200 - OK
    res.status(200).json({
      data: student,
    })
  }
  catch (err) {
    res.status(500).json({
      message:err.message
    })
  }
}

// POST - '/student'
const postStudent = async (req, res) => {
  try{
    const {name,age} = req.body
    await Student.create({name:name, age:age})
    // 201 - OK Data Created
    res.status(201).json({
      message:'Successfully Created'
    })
  }
  catch(err){
    // 500 - Internal Server Error
    res.status(500).json({
      message:err.message
    })
  }
}

// PUT - '/student'
const putStudent = async (req, res) => {
  try{
    const {_id,name,age} = req.body
    const student = await Student.findOne({_id:_id}).exec()

    if(!student) return res.status(404).json({message:'Student Not Found'})

    student.name = name
    student.age=age      
    await student.save()
    res.status(200).json({
      message:'Successfully Updated'
    })

  }
  catch(err){
    // 500 - Internal Server Error
    res.status(500).json({
      message:err.message
    })
  }
}

// DELETE - '/student:id'
const deleteStudent = async (req, res) => {
  try{
    const {id} = req.params
    const student = await Student.findById({_id:id})
    console.log(student)
    if(!student) return res.status(404).json({message:'Student Not Found'})
    
    await Student.deleteOne({_id:id})
    res.status(200).json({message:'Student Deleted Successfully'})
  }
  catch(err){
    // 500 - Internal Server Error
    res.status(500).json({
      message:err.message
    })
  }
}

module.exports = { getStudent, getSingleStudent, postStudent, putStudent, deleteStudent }