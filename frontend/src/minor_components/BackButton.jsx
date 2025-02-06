import { useNavigate } from "react-router";

export default function BackButton() {
  const navigate = useNavigate()
  function handleBack() {
    navigate('/')
  }

  return (
    <button onClick={handleBack} className="bg-violet-400 text-white  px-2 py-1 rounded-sm">
      Back
    </button>
  )
}