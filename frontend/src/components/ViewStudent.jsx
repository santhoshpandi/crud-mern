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
    <div>
      <BackButton />
      <table>
        <tbody>
        <tr>
          <th>Id</th>
          <td>{student._id}</td>
        </tr>
        <tr>
          <th>Name</th>
          <td>{student.name}</td>
        </tr>
        <tr>
          <th>Age</th>
          <td>{student.age}</td>
        </tr>
        </tbody>
      </table>
    </div>
  )
}