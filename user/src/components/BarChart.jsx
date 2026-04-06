import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { dataset, valueFormatter } from '../dataset/data';
import { AppContext } from '../context/AppContext';

export default function TickPlacementBars() {
  const { darkMode } = React.useContext(AppContext);
  const textColor = darkMode ? '#ffffff' : '#000000';

  const chartSetting = {
    yAxis: [{ label: 'Amount (₹)', width: 70 }],
    series: [
      {
        dataKey: 'income',
        label: 'Income',
        valueFormatter,
        color: darkMode ? '#9ca3af' : '#363636',
      },
      {
        dataKey: 'expenses',
        label: 'Expenses',
        valueFormatter,
        color: '#ef4444',
      },
      {
        dataKey: 'balance',
        label: 'Balance',
        valueFormatter,
        color: '#3E50EF',
      },
    ],
    height: 300,
  };

  return (
    <div style={{ width: '100%' }}>
      <BarChart
        dataset={dataset}
        xAxis={[{ dataKey: 'month', scaleType: 'band' }]}
        {...chartSetting}
        sx={{
            '& text': { fill: textColor, fontWeight: 600 },
            '& .MuiChartsLegend-label': { color: textColor },
          '& .MuiChartsAxis-label': {
            fill: darkMode ? 'white' : 'black',
            fontWeight: 600,
          },
          '& .MuiChartsAxis-tickLabelText': {
            fill: darkMode ? 'white' : 'black',
            fontWeight: 600,
          },
          '& .MuiChartsAxis-bottom text': {
            fill: darkMode ? 'white' : 'black',
            fontWeight: 600,
          },
          '& .MuiChartsAxis-left text': {
            fill: darkMode ? 'white' : 'black',
            fontWeight: 600,
          },
          '& .MuiChartsAxis-line': {
            stroke: darkMode ? 'white' : 'black',
          },
          '& .MuiChartsGrid-line': {
            stroke: darkMode ? 'white' : 'black',
            opacity: 0.2,
          },
        }}
      />
    </div>
  );
}