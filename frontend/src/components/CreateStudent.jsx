import { useState } from "react"
import BackButton from "../minor_components/BackButton"
import { useStudent } from "../contexts/StudentContext"
import { useNavigate } from "react-router"

export default function AddStudent() {

  const {createStudent, student, setStudent} = useStudent()
  const navigate = useNavigate()

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
    createStudent(student)
    navigate('/')
  }

  
  return (
    <div className="flex flex-col justify-center items-center">
      <BackButton />
      <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center md:w-1/2 w-full gap-2 p-3 m-2 bg-blue-200 text-[20px]">
        <label htmlFor="n">Name &nbsp;
          <input onChange={handleChange} type="text" name="name" id="n" required />
        </label>
        <label htmlFor="a">Age &nbsp;
          <input onChange={handleChange} type="Number" name="age" id="a" required />
        </label>
        <button className="bg-blue-800 hover:bg-slate-900 text-white px-2 py-1 rounded-sm">Submit</button>

      </form>
    </div>
  )
}