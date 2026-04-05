import { PieChart } from '@mui/x-charts/PieChart';
import { desktopOS, valueFormatterPie } from '../dataset/data';

export default function PieActiveArc() {
  return (
    <PieChart
      series={[
        {
          data: desktopOS,
          highlightScope: { fade: 'global', highlight: 'item' },
          faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
          valueFormatterPie,
        },
      ]}
      height={200}
      width={200}
    />
  );
}
