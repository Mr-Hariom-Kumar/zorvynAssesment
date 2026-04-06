import React, { useContext, useState } from 'react'
import DropdownMenu from './DropDownMenu'
import { NavLink } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import { assets } from '../assets/assets'

const Sidebar = () => {
  const { darkMode } = useContext(AppContext)
  const [collapsed, setCollapsed] = useState(true)

  return (
    <>
      
      <div
        className={`
          hidden md:flex
          flex-col justify-between
          fixed left-0 z-40
          top-18 bottom-0
          transition-all duration-200
          overflow-hidden
          ${collapsed ? 'w-16' : 'w-48'}
          ${darkMode ? 'bg-dark text-white' : 'bg-light'}
          shadow-[4px_0_24px_rgba(0,0,0,0.25)]
        `}
      >
      
        <div className="pt-3">
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="w-full flex justify-start px-3 pb-3 text-lg cursor-pointer hover:opacity-70 transition-opacity"
          >
            {collapsed
              ? <i className="fa-regular fa-circle-right" />
              : <i className="fa-regular fa-circle-left" />}
          </button>

          <ul className="flex flex-col gap-3 px-2 font-medium">
            <NavLink to="/" className="mt-2">
              <li className="flex items-center gap-2 px-1 py-1 rounded hover:opacity-80">
                <span><img src={darkMode ? assets.dsummary : assets.summary} alt="Summary" /></span>
                {!collapsed && <span>Summary</span>}
              </li>
            </NavLink>

            <NavLink to="/transaction" className="mt-2">
              <li className="flex items-center gap-2 px-1 py-1 rounded hover:opacity-80">
                <span><img src={darkMode ? assets.dtransaction : assets.transaction} alt="Transactions" /></span>
                {!collapsed && <span>Transactions</span>}
              </li>
            </NavLink>

            <NavLink to="/insights" className="mt-2">
              <li className="flex items-center gap-2 px-1 py-1 rounded hover:opacity-80">
                <span><img src={darkMode ? assets.dfinance : assets.finance} alt="Insights" /></span>
                {!collapsed && <span>Insights</span>}
              </li>
            </NavLink>
          </ul>
        </div>

        {/* Bottom settings */}
        <div className="px-2 font-medium py-5 flex items-center gap-2">
          <span><i className="fa-solid fa-gear" /></span>
          {!collapsed && <DropdownMenu />}
        </div>
      </div>


      <div
        className={`
          hidden md:block flex-shrink-0
          transition-all duration-200
          ${collapsed ? 'w-16' : 'w-0'}
        `}
      />
    </>
  )
}

export default Sidebar