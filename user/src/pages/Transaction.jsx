import React, { useContext, useState } from 'react'
import Sidebar from '../components/Sidebar'
import { AppContext } from '../context/AppContext'
import { transactionsData } from '../dataset/data'
import CallMadeIcon from '@mui/icons-material/CallMade'
import CallReceivedIcon from '@mui/icons-material/CallReceived'

const Transaction = () => {
  const { darkMode, admin } = useContext(AppContext)

  const [search, setSearch] = useState('')
  const [sortByTime, setSortByTime] = useState('')
  const [sortByUse, setSortByUse] = useState('')
  const [data, setData] = useState(transactionsData)


  const handleDelete = (id) => {
    setData(prev => prev.filter(t => t.id !== id))
  }


  const filteredData = data
    .filter((t) => t.id.toString().includes(search.trim()))
    .filter((t) => {
      if (sortByUse === 'null' || sortByUse === '') return true
      return t.type === sortByUse
    })
    .sort((a, b) => {
      if (sortByTime === 'latest') return new Date(b.date) - new Date(a.date)
      if (sortByTime === 'oldest') return new Date(a.date) - new Date(b.date)
      return 0
    })


  const exportToCSV = (data) => {
    if (!data.length) return

    const headers = ['TxnId', 'Description', 'Category', 'Date', 'Amount', 'Type']

    const rows = data.map((t) => [
      t.id,
      `"${t.description}"`,
      `"${t.category}"`,
      new Date(t.date).toLocaleDateString(),
      t.amount,
      t.type,
    ])

    const csvContent = [headers, ...rows].map(row => row.join(',')).join('\n')

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' })
    const url = URL.createObjectURL(blob)

    const link = document.createElement('a')
    link.href = url
    link.setAttribute('download', 'transactions.csv')
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className="flex min-h-screen overflow-x-hidden">
      <Sidebar />

      <div className="px-3 py-4 flex flex-col w-full min-w-0">
        
        {/* HEADER */}
        <div className="w-full flex justify-between">
          <p className="font-semibold text-2xl">Transactions</p>

          <button
            onClick={() => exportToCSV(filteredData)}
            className="bg-green-600 px-3 py-2 text-white rounded-lg shadow-2xl"
          >
            Export CSV
          </button>
        </div>

        {/* FILTER */}
        <div className="py-3 flex flex-wrap items-center justify-between gap-3">

          <select
            value={sortByTime}
            onChange={(e) => setSortByTime(e.target.value)}
            className={`${darkMode ? 'bg-dark text-white' : 'bg-light'} px-2 py-1 border rounded`}
          >
            <option value="null">Sort by Time</option>
            <option value="latest">Latest</option>
            <option value="oldest">Oldest</option>
          </select>

          <select
            value={sortByUse}
            onChange={(e) => setSortByUse(e.target.value)}
            className={`${darkMode ? 'bg-dark text-white' : 'bg-light'} px-2 py-1 border rounded`}
          >
            <option value="null">Type</option>
            <option value="expense">Expense</option>
            <option value="income">Income</option>
          </select>

          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by txn id"
            className="px-3 py-1 border rounded"
          />
        </div>

        {/* TABLE */}
        <div className={`${darkMode ? 'bg-dark' : 'bg-light'} rounded-lg p-4 shadow-2xl max-md:overflow-x-auto`}>

          {/* HEADER */}
          <div className="grid min-w-[600px] grid-cols-[40px_1fr_80px_80px_80px_100px] font-semibold border-b pb-2">
            <div>ID</div>
            <div>Description</div>
            <div>Category</div>
            <div>Date</div>
            <div className="text-right">Amount</div>
            <div className="text-right">Type</div>
          </div>

          {/* ROWS */}
          {filteredData.map((t) => (
            <div
              key={t.id}
              className="grid min-w-[600px] grid-cols-[40px_1fr_80px_80px_80px_100px] py-3 items-center"
            >
              <div>{t.id}</div>

              <div className="flex items-center gap-2">
                {t.type === 'expense' ? <CallMadeIcon className='text-green-500' /> : <CallReceivedIcon className='text-red-500' />}
                {t.description}
              </div>

              <div>{t.category}</div>
              <div>{new Date(t.date).toLocaleDateString()}</div>

              <div className={`text-right ${t.type === 'expense' ? 'text-red-500' : 'text-green-500'}`}>
                ₹{t.amount}
              </div>

              <div className="flex justify-end gap-2 items-center">
                <span className="text-xs">{t.type}</span>

                {admin && (
                  <i
                    onClick={() => handleDelete(t.id)}
                    className="fa-solid fa-trash text-red-500 cursor-pointer"
                  />
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}

export default Transaction