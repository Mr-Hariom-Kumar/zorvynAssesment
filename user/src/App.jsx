import React, { useContext } from 'react'
import Navbar from './components/Navbar'
import { AppContext } from './context/AppContext'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Transaction from './pages/Transaction'
import Insight from './pages/Insight'

const App = () => {
  const { darkMode } = useContext(AppContext)

  return (
    <div className={`${darkMode ? 'bg-dark/92 text-white' : 'bg-light/95'} min-h-screen overflow-x-hidden`}>
      <Navbar />
      <div className="pt-15">
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/transaction' element={<Transaction />} />
          <Route path='/insights' element={<Insight />} />
        </Routes>
      </div>
    </div>
  )
}

export default App