import React, { useContext } from 'react'
import Sidebar from '../components/Sidebar'
import { AppContext } from '../context/AppContext'
import BarChart from '../components/BarChart'
import PieChart  from '../components/PieChart'
const Dashboard = () => {
  const {darkMode,setDarkMode}=useContext(AppContext)
  
  return (
    <div className='flex pt-1'>
      <Sidebar/>
      {/* right section */}
      <div className='px-3 py-6 flex flex-col flex-1 flex-wrap'>
        {/* upper front */}
        <div className='flex flex-wrap gap-6 justify-start'>
          <div className={`flex flex-col shadow-2xl px-8 py-7 rounded-lg w-full sm:w-64 ${darkMode ? 'bg-dark text-white' : 'bg-light'}`}>
            <p className='text-xl font-semibold'>Total Balance</p>
            <p className='text-blue-900'>check here</p>
          </div>
          <div className={`flex flex-col shadow-2xl px-8 py-7 rounded-lg w-full sm:w-64 ${darkMode ? 'bg-dark text-white' : 'bg-light'}`}>
            <p className='text-xl font-semibold'>Monthly Expenses</p>
            <p className='text-blue-900'>Know more</p>
          </div>
          <div className={`flex flex-col shadow-2xl px-8 py-7 rounded-lg w-full sm:w-64 ${darkMode ? 'bg-dark text-white' : 'bg-light'}`}>
            <p className='text-xl font-semibold'>Monthly Income</p>
            <p className='text-blue-900'>Know more</p>
          </div>
        </div>

        {/* downsection Analytic parts */}
        
        <div className='pt-5 px-3'>
            <p className='py-3 font-semibold text-2xl'>Balance Trends</p>
            <div className={`${darkMode?'bg-dark':'bg-light'} rounded-lg shadow-2xl w-full px-3`}>
              <BarChart/>
            </div>
            <p className='py-3 font-semibold text-2xl'>Spending Breakdown</p>
            <div className={`${darkMode?'bg-dark':'bg-light'} rounded-lg shadow-2xl w-full px-3`}>
                 <PieChart/>
            </div>
        </div>

      </div>
    </div>
  )
}

export default Dashboard
