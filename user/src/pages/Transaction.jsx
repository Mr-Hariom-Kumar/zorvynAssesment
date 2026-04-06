import React, { useContext, useState } from 'react'
import Sidebar from '../components/Sidebar'
import { AppContext } from '../context/AppContext'
import { transactionsData } from '../dataset/data'
import CallMadeIcon from '@mui/icons-material/CallMade'
import CallReceivedIcon from '@mui/icons-material/CallReceived'

const Transaction = () => {
  const { darkMode } = useContext(AppContext)
  const [search, setSearch] = useState('')
  const [sortByTime, setSortByTime] = useState('')
  const [sortByUse, setSortByUse] = useState('')

  //filter logic
  const filteredData = transactionsData
    .filter((t) => {
      return t.id.toString().includes(search.trim())
    })
    .filter((t) => {
      if (sortByUse === 'null' || sortByUse === '') return true
      return t.type === sortByUse
    })
    .sort((a, b) => {
      if (sortByTime === 'latest') {
        return new Date(b.date) - new Date(a.date)
      }
      if (sortByTime === 'oldest') {
        return new Date(a.date) - new Date(b.date)
      }
      return 0
    })

//exportcsv logic 


  return (
    <div className="flex min-h-screen overflow-x-hidden">
      <Sidebar />

      <div className="px-3 py-4 flex flex-col w-full min-w-0">
        <div className="w-full flex">
          <p className="font-semibold text-2xl">Transactions</p>
        </div>

        {/* Filter bar */}
        <div className="py-3 flex flex-wrap items-center justify-between gap-3 w-full">

          {/* Sort by time */}
          <span className="flex items-center gap-2 font-semibold">
            <label htmlFor="time">Sort by:</label>
            <select
              name="time"
              id="time"
              value={sortByTime}
              onChange={(e) => setSortByTime(e.target.value)}
              className={`px-2 py-1 rounded-md text-sm border cursor-pointer
                focus:outline-none focus:ring-0
                ${darkMode ? 'bg-dark text-white border-gray-600' : 'bg-light text-black border-gray-300'}`}
            >
              <option value="null">------</option>
              <option value="latest">Latest</option>
              <option value="oldest">Oldest</option>
            </select>
          </span>

          {/* Sort by type */}
          <span className="flex items-center gap-2 font-semibold">
            <label htmlFor="use">Sort by:</label>
            <select
              name="use"
              id="use"
              value={sortByUse}
              onChange={(e) => setSortByUse(e.target.value)}
              className={`px-2 py-1 rounded-md text-sm border cursor-pointer
                focus:outline-none focus:ring-0
                ${darkMode ? 'bg-dark text-white border-gray-600' : 'bg-light text-black border-gray-300'}`}
            >
              <option value="null">------</option>
              <option value="expense">Expense</option>
              <option value="income">Income</option>
            </select>
          </span>

          {/* Search */}
          <span
            className={`flex items-center gap-0 rounded-lg border shadow-md overflow-hidden
            ${darkMode ? 'bg-gray-800 border-gray-600' : 'bg-white border-gray-300'}`}
          >
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by txn id"
              className={`py-1 px-3 text-sm bg-transparent focus:outline-none focus:ring-0 w-44 sm:w-56
                ${darkMode ? 'text-white placeholder-gray-400' : 'text-black placeholder-gray-400'}`}
            />
            <button
              className={`px-3 py-1.5 border-l cursor-pointer
              ${darkMode ? 'border-gray-600 text-white hover:bg-gray-700' : 'border-gray-300 text-black hover:bg-gray-100'}`}
            >
              <i className="fa-solid fa-magnifying-glass text-sm"></i>
            </button>
          </span>
        </div>

        {/* Table */}
        <div
          className={`rounded-lg p-4 ${darkMode ? 'bg-dark' : 'bg-light'} shadow-2xl max-md:overflow-x-auto max-md:text-sm`}
        >
          {/* Header */}
          <div
            className={`grid min-w-[600px] grid-cols-[40px_1fr_80px_80px_80px_80px] 
            md:grid-cols-[45px_0.9fr_90px_90px_90px_90px]
            items-center gap-3 ${
              darkMode ? 'text-white' : 'text-black'
            } text-md px-2 py-2 border-b border-gray-600/30 `}
          >
            <div>TxnId</div>
            <div>Description</div>
            <div>Category</div>
            <div>Date</div>
            <div className="text-right max-md:text-center">Amount</div>
            <div className="text-right max-md:text-center">Type</div>
          </div>

          {/* Rows */}
          {filteredData.map((t) => (
            <div
              key={t.id}
              className={`grid min-w-[600px] grid-cols-[40px_1fr_80px_80px_80px_80px] 
              md:grid-cols-[45px_0.9fr_90px_90px_90px_90px]
              items-center gap-3 px-2 py-3 rounded-md transition
              ${darkMode ? 'hover:bg-gray-800/40' : 'hover:bg-gray-100'}`}
            >
              {/* id */}
              <div className="text-lg">{t.id}</div>

              {/* description */}
              <div className={`${darkMode ? 'text-white' : 'text-black'} font-medium`}>
                <span className="flex gap-1 items-center">
                  <div
                    className={`text-lg ${
                      t.type === 'expense'
                        ? 'text-red-700/95'
                        : 'text-green-600'
                    }`}
                  >
                    {t.type === 'expense' ? (
                      <CallMadeIcon />
                    ) : (
                      <CallReceivedIcon />
                    )}
                  </div>
                  <p>{t.description}</p>
                </span>
              </div>

              {/* category */}
              <div className="text-gray-400">{t.category}</div>

              {/* date */}
              <div className="text-gray-400 text-sm">
                {new Date(t.date).toLocaleDateString()}
              </div>

              {/* amount */}
              <div
                className={`text-right font-semibold ${
                  t.type === 'expense'
                    ? 'text-red-500'
                    : 'text-green-500'
                }`}
              >
                ₹{t.amount}
              </div>

              {/* type */}
              <div className="text-right">
                <span
                  className={`px-2 py-1 text-xs rounded-md ${
                    t.type === 'expense'
                      ? 'bg-red-500/20 text-red-500'
                      : 'bg-green-500/20 text-green-500'
                  }`}
                >
                  {t.type}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Transaction