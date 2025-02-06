import { useContext, createContext, useState, useEffect } from "react";
import axios from 'axios'
import { useSnackbar } from "notistack";

//1.Context Creating
export const StudentContext = createContext();

//-------------------------------------------------------

//2.Context Provider
export const StudentProvider = ({children}) => {

  const { enqueueSnackbar } = useSnackbar();
  const [students, setStudents] = useState([{}])
  const [student, setStudent] = useState({})
  

  //View All Students
  async function showStudents()
  {
    const response = await axios.get('http://localhost:3000/student')
    .catch(err=> enqueueSnackbar(err.message,{variant:'error'}))
    setStudents(response.data.data)
  }

  // View Single Student
  async function showStudent(id)
  {
    const response = await axios.get('http://localhost:3000/student/'+id)
    .catch(err=>enqueueSnackbar(err.message,{variant:'error'}))
    setStudent(response.data.data)
  }

  // Create
  async function createStudent(student)
  {
    const response = await axios.post('http://localhost:3000/student',student)
    .then(res=>enqueueSnackbar(res.data.message,{variant:'success'}))
    .catch(err=>enqueueSnackbar(err.message,{variant:'error'}))
    
  }

  //Update
  async function updateStudent(student)
  {
    const response = await axios.put('http://localhost:3000/student/',student)
    .then(res=>enqueueSnackbar(res.data.message,{variant:'success'}))
    .catch(err=>enqueueSnackbar(err.message,{variant:'error'}))
  }

  //Delete
  async function deleteStudent(id)
  {
    const response = await axios.delete('http://localhost:3000/student/'+id)
    .then(res=>enqueueSnackbar(res.data.message,{variant:'success'}))
    .catch(err=>enqueueSnackbar(err.message,{variant:'error'}))
  }

  return(
    <StudentContext.Provider value={{student, setStudent,  showStudent, showStudents, createStudent, updateStudent, deleteStudent, students, setStudents}}>
      {children}
    </StudentContext.Provider>
  )
}

//-------------------------------------------------------

//3.use Context
export const useStudent = ()=>{
  return useContext(StudentContext)
}
