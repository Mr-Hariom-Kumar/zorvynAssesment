import React, { useContext,useState } from 'react'
import Navbar from './Navbar'
import DropdownMenu from './DropDownMenu'
import { NavLink, useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import {assets} from '../assets/assets'

const Sidebar = () => {
    const navigate=useNavigate()
    const {darkMode,setDarkMode}=useContext(AppContext);
    const [collapsed, setCollapsed] = useState(false)
  // AFTER
return (
    <div className={`min-h-[90vh] pt-5 flex flex-col justify-between transition-all duration-100
      ${collapsed ? 'w-16' : 'w-48'}
      ${darkMode ? 'bg-dark text-white' : 'bg-light'}
      shadow-[10px_0_30px_rgba(0,0,0,0.25)] overflow-y-hidden`}>

      {/* Toggle button — sits at top, flips arrow on collapse */}
      <div>
        <button
          onClick={() => setCollapsed(!collapsed)}
          className='w-full flex justify-start px-3 pb-3 text-lg cursor-pointer hover:text-xl '
        >
          {collapsed ? <i class="fa-regular fa-circle-right"></i> : <i class="fa-regular fa-circle-left"></i>}
        </button>

        <ul className='flex flex-col gap-3 px-2 font-medium'>
          <NavLink to='/' className='mt-2'>
            {/* icon always shows, text hides when collapsed */}
            <li className='flex items-center gap-2'>
              <span><img src={darkMode?assets.dsummary:assets.summary} alt="" /></span>
              {!collapsed && <span>Summary</span>}
            </li>
          </NavLink>
          <NavLink to='/transaction' className='mt-2'>
            <li className='flex items-center gap-2'>
              <span><img src={darkMode?assets.dtransaction:assets.transaction} alt="" /></span>
              {!collapsed && <span>Transactions</span>}
            </li>
          </NavLink>
          <NavLink to='/insights' className='mt-2'>
            <li className='flex items-center gap-2'>
              <span><img  src={darkMode?assets.dfinance:assets.finance}/></span>
              {!collapsed && <span>Insights</span>}
            </li>
          </NavLink>
        </ul>
      </div>

      {/* DropdownMenu hides fully when collapsed */}
      <div className='px-2 font-medium py-5 flex items-center gap-2'>
        <span><i class="fa-solid fa-gear"></i></span>
        {!collapsed && <DropdownMenu />}
      </div>
    </div>
  )
}

export default Sidebar
