import { useEffect } from "react"
import BackButton from "../minor_components/BackButton"
import { useStudent } from "../contexts/StudentContext"
import { useNavigate, useParams } from "react-router"

export default function UpdateStudent() {

  const {student, setStudent, updateStudent, showStudent} = useStudent()
  const {id} = useParams()
  const navigate = useNavigate()

  useEffect(()=>{
    showStudent(id)
  },[])

  function handleChange(e)
  {
    setStudent({
      ...student,
      [e.target.name]:e.target.value
    })
  }

  function handleSubmit(e)
  {
    e.preventDefault()
    updateStudent(student)
    navigate('/')
  }

  
  return (
    <div className="flex flex-col justify-center items-center">

      <BackButton />
      <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center md:w-1/2 w-full gap-2 p-3 m-2 bg-blue-200">
        <label htmlFor="n">Name &nbsp;
          <input onChange={handleChange} value={student.name} type="text" name="name" id="n" />
        </label>
        <label htmlFor="a">Age &nbsp;
          <input onChange={handleChange} value={student.age} type="Number" name="age" id="a" />
        </label>
        <button className="bg-blue-800 hover:bg-slate-900 text-white px-2 py-1 rounded-sm">Update</button>
      </form>
      
    </div>
  )
}