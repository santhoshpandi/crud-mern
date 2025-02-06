
import { Routes, Route } from 'react-router'
import Home from './components/Home';
import CreateStudent from './components/CreateStudent';
import UpdateStudent from './components/UpdateStudent';
import ViewStudent from './components/ViewStudent'
import DeleteStudent from './components/DeleteStudent'
import { StudentProvider } from './contexts/StudentContext';

function App() {

  return (
    <StudentProvider>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/add' element={<CreateStudent />} />
        <Route path='/update/:id' element={<UpdateStudent />} />
        <Route path='/view/:id' element={<ViewStudent />} />
        <Route path='/delete/:id' element={<DeleteStudent />} />
      </Routes>
    </StudentProvider>
  )
}

export default App
