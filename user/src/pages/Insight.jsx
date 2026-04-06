import React, { useContext } from 'react'
import Sidebar from '../components/Sidebar'
import { AppContext } from '../context/AppContext'
import { dataset, transactionsData } from '../dataset/data'
import { LineChart, BarChart, PieChart } from '@mui/x-charts'

const Insight = () => {
  const { darkMode, selectedYear, setSelectedYear } = useContext(AppContext)
  const yearData = dataset.find((d) => d.year === selectedYear)?.data || []
  const textColor = darkMode ? '#ffffff' : '#000000';
  // LINE CHART DATA 
  const months = yearData.map((d) => d.month)
  const income = yearData.map((d) => d.income)
  const expenses = yearData.map((d) => d.expenses)

  //BAR CHART DATA
  const savings = yearData.map((d) => d.savings)

  // PIE CHART DATA
  const categoryMap = {}

  transactionsData.forEach((t) => {
    if (t.type === 'expense') {
      categoryMap[t.category] =
        (categoryMap[t.category] || 0) + Math.abs(t.amount)
    }
  })

  const pieData = Object.keys(categoryMap).map((key, i) => ({
    id: i,
    value: categoryMap[key],
    label: key,
  }))

  // INSIGHTS 
  const totalIncome = income.reduce((a, b) => a + b, 0)
  const totalExpense = expenses.reduce((a, b) => a + b, 0)
  const totalSavings = totalIncome - totalExpense

  const highestExpenseMonth =
    yearData.length > 0
      ? yearData.reduce((max, curr) =>
          curr.expenses > max.expenses ? curr : max
        ).month
      : '-'

  const highestIncomeMonth =
    yearData.length > 0
      ? yearData.reduce((max, curr) =>
          curr.income > max.income ? curr : max
        ).month
      : '-'

  return (
    <div className="flex min-h-screen">
      <Sidebar />

      <div className="w-full px-4 py-4 space-y-6">

        {/*  HEADER + YEAR SELECTOR  */}
        <div className="flex justify-between items-center">
          <p className="text-2xl font-semibold">Insights</p>

          <select
            value={selectedYear}
            onChange={(e) => setSelectedYear(Number(e.target.value))}
            className={`px-3 py-1 rounded-md border text-sm cursor-pointer
              ${darkMode ? 'bg-dark text-white border-gray-600' : 'bg-light text-black border-gray-300'}`}
          > 
            {[...dataset].reverse().map((d) => (
              <option key={d.year} value={d.year}>
                {d.year}
              </option>
            ))}
          </select>
        </div>

        {/*  INSIGHTS CARDS  */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-4`}>
          <div className={`p-4 rounded-lg shadow-2xl  ${darkMode?'bg-dark': 'bg-light'}`}>
            <p className='text-gray-600 font-semibold'>Total Income</p>
            <p className="font-bold text-lg">₹{totalIncome}</p>
          </div>

          <div className={`p-4 rounded-lg shadow-2xl ${darkMode?'bg-dark': 'bg-light'}`}>
            <p className='text-gray-600 font-semibold'>Total Expense</p>
            <p className="font-bold text-lg">₹{totalExpense}</p>
          </div>

          <div className={`p-4 rounded-lg shadow-2xl ${darkMode?'bg-dark': 'bg-light'}`}>
            <p className='text-gray-600 font-semibold'>Net Savings</p>
            <p className="font-bold text-lg">₹{totalSavings}</p>
          </div>

          <div className={`p-4 rounded-lg shadow-2xl ${darkMode?'bg-dark': 'bg-light'}`}>
            <p className='text-gray-600 font-semibold'>Top Expense Month</p>
            <p className="font-bold text-lg">{highestExpenseMonth}</p>
          </div>
        </div>

        {/*  LINE CHART  */}
        <div className={`${darkMode ? 'bg-dark' : 'bg-light'} rounded-lg shadow-2xl w-full px-2 overflow-x-auto`}>
  <p className="py-3 font-semibold text-xl md:text-2xl">Income vs Expenses</p>

  <div className="min-w-[300px]">
    <LineChart
      xAxis={[{ scaleType: 'point', data: months }]}
      series={[
        { data: income, label: 'Income' },
        { data: expenses, label: 'Expenses' },
      ]}
      height={300}
      sx={{
        '& text': { fill: `${textColor} !important`, fontWeight: 600 },
        '& .MuiChartsLegend-label': { color: textColor },
        '& .MuiChartsAxis-line': { stroke: textColor },
        '& .MuiChartsAxis-tick': { stroke: textColor },
        '& .MuiChartsGrid-line': { stroke: textColor, opacity: 0.2 },
      }}
    />
  </div>
</div>

        {/*  BAR CHART  */}
        <div className={`${darkMode ? 'bg-dark' : 'bg-light'} rounded-lg shadow-2xl w-full px-2 overflow-x-auto`}>
  <p className="py-3 font-semibold text-xl md:text-2xl">Monthly Savings</p>

  <div className="min-w-[300px]">
    <BarChart
      xAxis={[{ scaleType: 'band', data: months }]}
      series={[{ data: savings, label: 'Savings' }]}
      height={300}
      sx={{
        '& text': { fill: `${textColor} !important`, fontWeight: 600 },
        '& .MuiChartsLegend-label': { color: textColor },
        '& .MuiChartsAxis-line': { stroke: textColor },
        '& .MuiChartsAxis-tick': { stroke: textColor },
        '& .MuiChartsGrid-line': { stroke: textColor, opacity: 0.2 },
      }}
    />
  </div>
</div>

        {/*  PIE CHART  */}
        <div className={`p-4 rounded-lg shadow-2xl ${darkMode?'bg-dark':'bg-white'}`}>
          <p className="font-semibold mb-3 font-semibold text-xl md:text-2xl">Expense Distribution</p>
          <PieChart
            series={[
              {
                data: pieData,
              },
            ]}
            height={300}
             sx={{
     '& .MuiChartsLegend-root':   { color: `${textColor} !important` },
            '& .MuiChartsLegend-series': { color: `${textColor} !important` },
            '& .MuiChartsLegend-label':  { color: `${textColor} !important` },
          }}
          />
        </div>

      </div>
    </div>
  )
}

export default Insight