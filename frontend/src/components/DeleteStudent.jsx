import { useNavigate, useParams } from "react-router"
import { useStudent } from "../contexts/StudentContext"
export default function DeleteStudent(){
  const navigate = useNavigate()
  const {deleteStudent} = useStudent()
  const {id} = useParams()

  function handleYes()
  {
    deleteStudent(id)  
    handleNo()  
  }

  function handleNo(){
    navigate('/')
  }

  return(
    <div className="bg-[lavender] p-2 flex flex-col justify-center items-center md:w-[50%] w-full mx-auto">
      Are you Sure want to Delete?
      <div className="p-2 flex gap-3">
      <button onClick={handleYes} className="bg-green-700 text-white px-2 py-1 rounded-sm" >Yes</button>
      <button onClick={handleNo} className="bg-red-500 text-white px-2 py-1 rounded-sm" >No</button>
      </div>
    </div>
  )
}