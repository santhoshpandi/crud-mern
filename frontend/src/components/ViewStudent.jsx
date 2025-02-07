import { useEffect } from "react"
import { useStudent } from "../contexts/StudentContext"
import BackButton from "../minor_components/BackButton"
import { useParams } from "react-router"
export default function ViewStudent() {

  const {student, showStudent} = useStudent()
  const {id} = useParams()
  
  useEffect(()=>{
    showStudent(id)
  },[])

  return (
    <div className="flex flex-col items-center">
      <BackButton />
      <table className="bg-slate-100 rounded-md">
        <tbody>
        <tr className="border border-black border-b-1">
          <th className="p-2">Id</th>
          <td className="p-2">{student._id}</td>
        </tr>
        <tr className="border border-black border-b-1">
          <th className="p-2">Name</th>
          <td className="p-2">{student.name}</td>
        </tr>
        <tr className="border border-black border-b-1">
          <th className="p-2">Age</th>
          <td className="p-2">{student.age}</td>
        </tr>
        </tbody>
      </table>
    </div>
  )
}