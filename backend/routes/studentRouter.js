const express = require('express')
const router = express.Router()

const {getStudent, getSingleStudent, postStudent, putStudent, deleteStudent} = require('../controllers/studentController')

router.route('/student')
.get(getStudent)
.post(postStudent)
.put(putStudent)

router.route('/student/:id')
.get(getSingleStudent)
.delete(deleteStudent)

module.exports = router