import React, { useContext, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import MenuIcon from '@mui/icons-material/Menu'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import CloseIcon from '@mui/icons-material/Close'
import { AppContext } from '../context/AppContext'

const Navbar = () => {
  const navigate = useNavigate()
  const [showMobileMenu, setShowMobileMenu] = useState(false)
  const [token, setToken] = useState('')
  const { darkMode, setDarkMode } = useContext(AppContext)

  return (
    <>
      {/* Fixed navbar */}
      <div className={`
        fixed top-0 left-0 right-0 z-50
        ${darkMode ? 'bg-dark text-white shadow-slate-900' : 'bg-light'}
        flex items-center justify-between text-sm py-3 px-4 shadow-lg
      `}>
        {/* Hamburger — mobile only */}
        <MenuIcon
          sx={{ fontSize: 36, display: { xs: 'block', md: 'none' } }}
          onClick={() => setShowMobileMenu(true)}
          className="cursor-pointer"
        />

        {/* Desktop nav links */}
        <ul className="hidden md:flex items-center gap-5 font-medium">
          <NavLink to="/"><li className="py-1">LOGO</li></NavLink>
          <NavLink to="/"><li className="py-1">Home</li></NavLink>
          <NavLink to="/doctors"><li className="py-1">Services</li></NavLink>
          <NavLink to="/about"><li className="py-1">About</li></NavLink>
          <NavLink to="/contact"><li className="py-1">Help &amp; Contact</li></NavLink>
        </ul>

        {/* Right controls */}
        <div className="flex items-center gap-4">
          <div
            onClick={() => setDarkMode(!darkMode)}
            className="flex items-center gap-2 cursor-pointer border py-1 px-2 rounded-full"
          >
            {darkMode ? <DarkModeOutlinedIcon /> : <DarkModeIcon />}
          </div>

          {token ? (
            <div className="flex items-center gap-2 cursor-pointer group relative">
              <AccountCircleIcon sx={{ fontSize: 36 }} />
              <div className="absolute top-0 right-0 pt-14 text-base font-medium z-20 hidden group-hover:block">
                <div className="min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4">
                  <p onClick={() => navigate('/my-profile')} className="hover:bg-primary hover:text-white cursor-pointer w-full px-3 py-2 rounded">My Profile</p>
                  <p onClick={() => navigate('/my-appointments')} className="hover:bg-primary hover:text-white cursor-pointer w-full px-3 py-2 rounded">My Appointments</p>
                  <p onClick={() => setToken('')} className="hover:bg-primary hover:text-white cursor-pointer w-full px-3 py-2 rounded">Logout</p>
                </div>
              </div>
            </div>
          ) : (
            <button
              onClick={() => setToken('token')}
              className={`${darkMode ? 'bg-white text-black' : 'bg-black text-white'} px-3 py-2 rounded-lg font-semibold hidden md:block cursor-pointer`}
            >
              Create Account
            </button>
          )}
        </div>
      </div>

      {/* Mobile drawer */}
      <div className={`fixed inset-0 z-50 md:hidden transition-all duration-300 ${showMobileMenu ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setShowMobileMenu(false)} />
        <div className={`absolute left-0 top-0 h-full w-64 ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'} shadow-2xl flex flex-col transition-transform duration-300 ${showMobileMenu ? 'translate-x-0' : '-translate-x-full'}`}>
          <div className={`flex items-center justify-between px-5 py-6 border-b border-gray-200/20 ${darkMode?'border-gray-200':'border-gray-800'}`}>
            <span className="font-bold text-lg">LOGO</span>
            <CloseIcon className="cursor-pointer" onClick={() => setShowMobileMenu(false)} />
          </div>
          <ul className="flex flex-col gap-1 mt-4 px-3 text-base font-medium">
            <NavLink onClick={() => setShowMobileMenu(false)} to="/"><p className="px-4 py-3 rounded hover:bg-blue-500/10">Home</p></NavLink>
            <NavLink onClick={() => setShowMobileMenu(false)} to="/transaction"><p className="px-4 py-3 rounded hover:bg-blue-500/10">Transactions</p></NavLink>
            <NavLink onClick={() => setShowMobileMenu(false)} to="/insights"><p className="px-4 py-3 rounded hover:bg-blue-500/10">Insights</p></NavLink>
            <NavLink onClick={() => setShowMobileMenu(false)} to="/about"><p className="px-4 py-3 rounded hover:bg-blue-500/10">About</p></NavLink>
            <NavLink onClick={() => setShowMobileMenu(false)} to="/contact"><p className="px-4 py-3 rounded hover:bg-blue-500/10">Help &amp; Contact</p></NavLink>
            <div className="mt-4 px-4">
              <button
                onClick={() => { setToken(token ? '' : 'token'); setShowMobileMenu(false) }}
                className={`w-full py-2 rounded-lg font-semibold ${darkMode ? 'bg-white text-black' : 'bg-black text-white'}`}
              >
                {token ? 'Logout' : 'Create Account'}
              </button>
            </div>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Navbar