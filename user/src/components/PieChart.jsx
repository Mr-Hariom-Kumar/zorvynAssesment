import { PieChart } from '@mui/x-charts/PieChart'
import { spendingData, valueFormatterPie } from '../dataset/data'
import { useContext } from 'react'
import { AppContext } from '../context/AppContext'

export default function PieActiveArc() {
  const { darkMode, selectedYear, setSelectedYear } = useContext(AppContext)
  const textColor = darkMode ? '#ffffff' : '#000000'

  const currentData = spendingData.find((d) => d.year === selectedYear)?.data
    || spendingData[spendingData.length - 1].data

  return (
    <div style={{ width: '100%' }}>
      <div className="flex gap-2 px-2 pt-2">
        {spendingData.map(({ year }) => (
          <button
         key={year}
            onClick={() => setSelectedYear(year)}
            className={`px-3 py-1 rounded-full text-sm font-medium transition-all cursor-pointer
              ${selectedYear === year
                ? 'bg-blue-600 text-white'
              : darkMode
                  ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
               : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
          >
            {year}
          </button>
        ))}
      </div>
   <div style={{ width: '100%', height: 220 }}>
        <PieChart
          series={[
            {
              data: currentData,
        highlightScope: { fade: 'global', highlight: 'item' },
              faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
              valueFormatter: valueFormatterPie,
            },
          ]}
          sx={{
     '& .MuiChartsLegend-root':   { color: `${textColor} !important` },
            '& .MuiChartsLegend-series': { color: `${textColor} !important` },
            '& .MuiChartsLegend-label':  { color: `${textColor} !important` },
          }}
        />
      </div>
    </div>
  )
}