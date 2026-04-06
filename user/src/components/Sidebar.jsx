import React, { useContext, useState } from 'react'
import DropdownMenu from './DropDownMenu'
import { NavLink } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import { assets } from '../assets/assets'

const Sidebar = () => {
  const { darkMode } = useContext(AppContext)
  const [collapsed, setCollapsed] = useState(true)

  // ✅ control dropdown from here
  const [menuAnchor, setMenuAnchor] = useState(null)

  return (
    <>
      <div
        className={`
          hidden md:flex flex-col justify-between fixed left-0 z-40
          top-18 bottom-0 transition-all duration-200 overflow-hidden
          ${collapsed ? 'w-16' : 'w-48'}
          ${darkMode ? 'bg-dark text-white' : 'bg-light'}
          shadow-[4px_0_24px_rgba(0,0,0,0.25)]
        `}
      >
        {/* Top */}
        <div className="pt-3">
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="w-full flex justify-start px-3 pb-3 text-lg cursor-pointer hover:opacity-70"
          >
            {collapsed
              ? <i className="fa-regular fa-circle-right" />
              : <i className="fa-regular fa-circle-left" />}
          </button>

          <ul className="flex flex-col gap-3 px-2 font-medium">
            <NavLink to="/" className="mt-2">
              <li className="flex items-center gap-2 px-1 py-1 rounded hover:opacity-80">
                <img src={darkMode ? assets.dsummary : assets.summary} />
                {!collapsed && <span>Summary</span>}
              </li>
            </NavLink>

            <NavLink to="/transaction" className="mt-2">
              <li className="flex items-center gap-2 px-1 py-1 rounded hover:opacity-80">
                <img src={darkMode ? assets.dtransaction : assets.transaction} />
                {!collapsed && <span>Transactions</span>}
              </li>
            </NavLink>

            <NavLink to="/insights" className="mt-2">
              <li className="flex items-center gap-2 px-1 py-1 rounded hover:opacity-80">
                <img src={darkMode ? assets.dfinance : assets.finance} />
                {!collapsed && <span>Insights</span>}
              </li>
            </NavLink>
          </ul>
        </div>

        {/* ✅ Bottom (fixed) */}
        <div className="px-2 py-5 flex items-center gap-2">
          
          {/* gear icon always clickable */}
          <span
            onClick={(e) => setMenuAnchor(e.currentTarget)}
            className="cursor-pointer hover:animate-bounce"
          >
            <i className="fa-solid fa-gear text-lg" />
          </span>

          {/* show label only when expanded */}
          {!collapsed && <span className='font-semibold cursor-pointer hover:scale-x-105 hover:scale-y-105 '>Settings</span>}

          {/* dropdown always mounted */}
          <DropdownMenu anchorEl={menuAnchor} setAnchorEl={setMenuAnchor} />
        </div>
      </div>

      {/* spacer */}
      <div
        className={`hidden md:block transition-all duration-200 ${
          collapsed ? 'w-16' : 'w-0'
        }`}
      />
    </>
  )
}

export default Sidebar