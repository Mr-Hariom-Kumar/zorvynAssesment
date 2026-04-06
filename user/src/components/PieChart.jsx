import { PieChart } from '@mui/x-charts/PieChart'
import { desktopOS, valueFormatterPie } from '../dataset/data'
import { useContext } from 'react'
import { AppContext } from '../context/AppContext'

export default function PieActiveArc() {
  const { darkMode } = useContext(AppContext)
  const textColor = darkMode ? '#ffffff' : '#000000'

  return (
    <div style={{ width: '100%', height: 220 }}>
      <PieChart
        series={[
          {
            data: desktopOS,
            highlightScope: { fade: 'global', highlight: 'item' },
            faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
            valueFormatter: valueFormatterPie,
          },
        ]}
        sx={{
          '& .MuiChartsLegend-root': { color: textColor },
          '& .MuiChartsLegend-series': { color: textColor },
          '& .MuiChartsLegend-label': { color: textColor },
        }}
      />
    </div>
  )
}