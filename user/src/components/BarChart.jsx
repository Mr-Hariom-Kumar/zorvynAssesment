import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { dataset, valueFormatter } from '../dataset/data';
import { AppContext } from '../context/AppContext';

export default function TickPlacementBars() {
  const { darkMode } = React.useContext(AppContext);
  const textColor = darkMode ? '#ffffff' : '#000000';

  const {selectedYear, setSelectedYear} = React.useContext(AppContext);

  // Find the data array for the selected year
  const currentData = dataset.find((d) => d.year === selectedYear)?.data || [];

  const chartSetting = {
    yAxis: [{ label: 'Amount (₹)', width: 70 }],
    series: [
      { dataKey: 'income',   label: 'Income',   valueFormatter, color: darkMode ? '#9ca3af' : '#363636' },
      { dataKey: 'expenses', label: 'Expenses', valueFormatter, color: '#ef4444' },
      { dataKey: 'balance',  label: 'Balance',  valueFormatter, color: '#3E50EF' },
    ],
    height: 300,
  };

  return (
    <div style={{ width: '100%' }}>
      {/* Year switcher */}
      <div className="flex gap-2 px-2 pt-2">
        {dataset.map(({ year }) => (
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

      <BarChart
        dataset={currentData}
        xAxis={[{ dataKey: 'month', scaleType: 'band' }]}
        {...chartSetting}
        sx={{
          '& text': { fill: `${textColor} !important`, fontWeight: 600 },
          '& .MuiChartsLegend-label': { color: textColor },
          '& .MuiChartsAxis-line': { stroke: textColor },
          '& .MuiChartsAxis-tick': { stroke: textColor },
          '& .MuiChartsGrid-line': { stroke: textColor, opacity: 0.2 },
        }}
      />
    </div>
  );
}