import React, { useContext, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import MenuIcon from '@mui/icons-material/Menu'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import CloseIcon from '@mui/icons-material/Close'
import { AppContext } from '../context/AppContext'
import DropdownMenu from '../components/DropDownMenu'

const Navbar = () => {
  const navigate = useNavigate()
  const [showMobileMenu, setShowMobileMenu] = useState(false)
  const [menuAnchor, setMenuAnchor] = useState(null)

  const { token, admin,setToken, darkMode, setDarkMode } = useContext(AppContext)

  return (
    <>
      {/* Navbar */}
      <div className={`
        fixed top-0 left-0 right-0 z-50
        ${darkMode ? 'bg-dark text-white shadow-slate-900' : 'bg-light'}
        flex items-center justify-between text-sm py-3 px-4 shadow-lg
      `}>
        <MenuIcon
          sx={{ fontSize: 36, display: { xs: 'block', md: 'none' } }}
          onClick={() => setShowMobileMenu(true)}
          className="cursor-pointer"
        />

        <ul className="hidden md:flex items-center gap-5 font-medium">
          <NavLink to="/"><li>ZORVYN</li></NavLink>
          <NavLink to="/"><li>Home</li></NavLink>
          <NavLink to="/"><li>Services</li></NavLink>
          <NavLink to="/"><li>About</li></NavLink>
          <NavLink to="/"><li>Help & Contact</li></NavLink>
        </ul>

        <div className="flex items-center gap-4">
          {/* Dark mode */}
          <div
            onClick={() => setDarkMode(!darkMode)}
            className="cursor-pointer border py-1 px-1 rounded-full"
          >
            {darkMode ? <DarkModeOutlinedIcon /> : <DarkModeIcon />}
          </div>

          {/* Auth UI */}
          {token ? (
            <AccountCircleIcon sx={{ fontSize: 36 }} />
          ) : (
            <button
              onClick={() => setToken(true)}
              className={`${darkMode ? 'bg-white text-black' : 'bg-black text-white'} px-3 py-2 rounded-lg font-semibold hidden md:block`}
            >
              Create Account
            </button>
          )}
        </div>
      </div>

      {/* Mobile Drawer */}
      <div className={`fixed inset-0 z-50 md:hidden transition-all duration-300 ${showMobileMenu ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className="absolute inset-0 bg-black/40" onClick={() => setShowMobileMenu(false)} />

        <div className={`absolute left-0 top-0 h-full w-64 ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'} shadow-2xl flex flex-col`}>

          {/* Header */}
          <div className="flex items-center justify-between px-5 py-6 border-b border-gray-500/20">
            <span className="font-bold text-lg">ZORVYN</span>
            <CloseIcon onClick={() => setShowMobileMenu(false)} className="cursor-pointer" />
          </div>

          {/* Content */}
          <div className="flex flex-col justify-between h-full">

            {/* TOP */}
            <ul className="flex flex-col gap-1 mt-4 px-3 text-base font-medium">
              <NavLink onClick={() => setShowMobileMenu(false)} to="/"><p className="px-4 py-3 rounded hover:bg-blue-500/10">
            
              {
                admin ? 'WELCOME ADMIN' : token ? 'WELCOME USER' : ''
                
              }
              </p></NavLink>
              <NavLink onClick={() => setShowMobileMenu(false)} to="/"><p className="px-4 py-3 rounded hover:bg-blue-500/10">Home</p></NavLink>
              <NavLink onClick={() => setShowMobileMenu(false)} to="/transaction"><p className="px-4 py-3 rounded hover:bg-blue-500/10">Transactions</p></NavLink>
              <NavLink onClick={() => setShowMobileMenu(false)} to="/insights"><p className="px-4 py-3 rounded hover:bg-blue-500/10">Insights</p></NavLink>
              <NavLink onClick={() => setShowMobileMenu(false)} to="/"><p className="px-4 py-3 rounded hover:bg-blue-500/10">About</p></NavLink>
              <NavLink onClick={() => setShowMobileMenu(false)} to="/"><p className="px-4 py-3 rounded hover:bg-blue-500/10">Help & Contact</p></NavLink>

              {/* ✅ Auth button fixed */}
              <div className="mt-4 px-4">
                <button
                  onClick={() => {
                    if (token) {
                      setToken(false)   // logout
                    } else {
                      setToken(true)    // login
                    }
                    setShowMobileMenu(false)
                  }}
                  className={`w-full py-2 rounded-lg font-semibold ${darkMode ? 'bg-white text-black' : 'bg-black text-white'}`}
                >
                  {token ? 'Logout' : 'Create Account'}
                </button>
              </div>
            </ul>

            {/* BOTTOM SETTINGS */}
            <div className="px-4 py-5 flex items-center gap-3 border-t border-gray-500/20">
              <div
                onClick={(e) => setMenuAnchor(e.currentTarget)}
                className="flex items-center gap-3 cursor-pointer hover:opacity-80"
              >
                <i className="fa-solid fa-gear text-lg" />
                <span className="font-medium">Settings</span>
              </div>

              <DropdownMenu anchorEl={menuAnchor} setAnchorEl={setMenuAnchor} />
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar