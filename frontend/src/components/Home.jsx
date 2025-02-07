import { FaRegEdit, FaEye } from "react-icons/fa";
import { MdDelete, MdAssignmentAdd } from "react-icons/md";
import { useNavigate,  } from 'react-router';
import { useStudent } from '../contexts/StudentContext';
import { useEffect } from 'react';

export default function Home() {
  const navigate = useNavigate()
  //From Context API
  const { showStudents, students } = useStudent()

  useEffect(() => {
    showStudents()
  }, [])

  return (
    <>
      <div className='flex flex-col justify-center w-3/4 mx-auto items-center'>
        <div className="m-5">
          <button onClick={() => navigate('/add')} className='text-green-700 hover:text-orange-700 text-[45px] px-2 py-1 rounded-sm '>
            <MdAssignmentAdd />
          </button>
        </div>
        <table className='border border-black w-full flex flex-wrap justify-center flex-col items-center text-[25px] grow-[1]'>
          <thead>
            <tr className=' '>
              <td className='p-2 border border-slate-700'>S.no</td>
              <td className='p-2 border border-slate-700'>Name</td>
              <td className='p-2 border border-slate-700'>Age</td>
              <td className='p-2 border border-slate-700'>Actions</td>
            </tr>
          </thead>
          <tbody>
            {
              students.map((student, index) => (
                <tr key={index} className=' '>
                  <td className='p-2 border border-slate-700'>{index+1}</td>
                  <td className='p-2 border border-slate-700'>{student.name}</td>
                  <td className='p-2 border border-slate-700'>{student.age}</td>
                  <td className='p-2 border border-slate-700 flex justify-evenly'>
                    <button onClick={() => navigate(`/view/${student._id}`)} className='p-1 text-violet-700'><FaEye /></button>
                    <button onClick={() => navigate(`/update/${student._id}`)} className='p-1 text-blue-800'><FaRegEdit /></button>
                    <button onClick={() => navigate(`/delete/${student._id}`)} className='p-1 text-red-500'><MdDelete /></button>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </>
  )
}