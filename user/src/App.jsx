import React, { useContext } from 'react'
import Navbar from './components/Navbar'
import {AppContext} from './context/AppContext'
import Sidebar from './components/Sidebar'
import { Route,Routes,  useNavigate } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
const App = () => {
  const {darkMode}=useContext(AppContext)
  const navigate=useNavigate()
  return (
    <div className={`${darkMode?'bg-dark/92 text-white' : 'bg-light/95'} min-h-screen p-1`}>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Dashboard/>}/>
      </Routes>
    </div>
  )
}

export default App
