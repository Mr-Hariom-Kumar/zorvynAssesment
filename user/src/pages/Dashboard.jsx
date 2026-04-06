import React, { useContext } from 'react'
import Sidebar from '../components/Sidebar'
import { AppContext } from '../context/AppContext'
import BarChart from '../components/BarChart'
import PieChart from '../components/PieChart'
import { dataset } from '../dataset/data'

const Dashboard = () => {
  const { darkMode } = useContext(AppContext)
  const latest = dataset[dataset.length - 1]
  const cards = [
    { title: 'Total Balance',     value: `₹${(latest.balance / 1000).toFixed(0)}k`, sub: 'As of Dec 2025' },
    { title: 'Monthly Expenses',  value: `₹${(latest.expenses / 1000).toFixed(0)}k`, sub: 'This month' },
    { title: 'Monthly Income',    value: `₹${(latest.income / 1000).toFixed(0)}k`,   sub: 'This month' },
  ]
  return (
    <div className="flex min-h-screen overflow-x-hidden">
      <Sidebar />

      {/* Main content */}
      <div className="w-full min-w-0 px-3 py-4 flex flex-col">

        {/* Summary cards — stack on mobile, row on sm+ */}
        <div className="flex flex-col sm:flex-row sm:flex-wrap gap-4">
          {cards.map(({ title, value, sub }) => (
            <div
              key={title}
              className={`flex flex-col shadow-2xl px-6 py-5 rounded-lg w-full sm:w-56 md:w-64
                ${darkMode ? 'bg-dark text-white' : 'bg-light'}`}
            >
              <p className="text-sm text-gray-400 mb-1">{title}</p>
              <p className="text-2xl font-bold">{value}</p>
              <p className="text-blue-400 text-xs mt-1">{sub}</p>
            </div>
          ))}
        </div>
        {/* Analytics */}
        <div className="pt-5 w-full min-w-0">
          <p className="py-3 font-semibold text-xl md:text-2xl">Balance Trends</p>
          <div className={`${darkMode ? 'bg-dark' : 'bg-light'} rounded-lg shadow-2xl w-full px-2 overflow-x-auto`}>
            <div className="min-w-[280px]">
              <BarChart />
            </div>
          </div>

          <p className="py-3 mt-4 font-semibold text-xl md:text-2xl">Spending Breakdown</p>
          <div className={`${darkMode ? 'bg-dark' : 'bg-light'} rounded-lg shadow-2xl w-full px-2 flex justify-center overflow-x-auto`}>
            <PieChart />
          </div>
        </div>

      </div>
    </div>
  )
}

export default Dashboard