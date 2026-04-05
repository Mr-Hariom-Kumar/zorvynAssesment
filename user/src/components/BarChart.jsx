import * as React from 'react';
import Stack from '@mui/material/Stack';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import { BarChart } from '@mui/x-charts/BarChart';
import { dataset, valueFormatter } from '../dataset/data';
import { AppContext } from '../context/AppContext';

function TickParamsSelector({
  tickPlacement,
  tickLabelPlacement,
  setTickPlacement,
  setTickLabelPlacement,
}) {
  return (
    <Stack direction="column" justifyContent="space-between" sx={{ width: '100%' }}>
     
    </Stack>
  );
}

const chartSetting = {
  yAxis: [
    {
      label: 'rainfall (mm)',
      width: 60,
    },
  ],
  series: [{ dataKey: 'seoul', label: 'Seoul rainfall', valueFormatter }],
  height: 300,
  margin: { left: 0 },
};

export default function TickPlacementBars() {
  const [tickPlacement, setTickPlacement] = React.useState('middle');
  const [tickLabelPlacement, setTickLabelPlacement] = React.useState('middle');
     const {darkMode,setDarkMode}=React.useContext(AppContext)
  return (
    <div style={{ width: '100%' }}>
      <TickParamsSelector
        tickPlacement={tickPlacement}
        tickLabelPlacement={tickLabelPlacement}
        setTickPlacement={setTickPlacement}
        setTickLabelPlacement={setTickLabelPlacement}
      />
      <BarChart
        dataset={dataset}
        xAxis={[{ dataKey: 'month', tickPlacement, tickLabelPlacement }]}
        {...chartSetting}
        sx={{
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
