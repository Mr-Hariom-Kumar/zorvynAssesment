export const dataset = [
{ income: 52000, expenses: 38000, savings: 14000, balance: 124000, month: 'Jan' },
  { income: 52000, expenses: 41000, savings: 11000, balance: 135000, month: 'Feb' },
  { income: 55000, expenses: 39000, savings: 16000, balance: 151000, month: 'Mar' },
  { income: 55000, expenses: 43000, savings: 12000, balance: 163000, month: 'Apr' },
  { income: 58000, expenses: 47000, savings: 11000, balance: 174000, month: 'May' },
  { income: 58000, expenses: 44000, savings: 14000, balance: 188000, month: 'Jun' },
  { income: 61000, expenses: 52000, savings: 9000,  balance: 197000, month: 'Jul' },
  { income: 61000, expenses: 48000, savings: 13000, balance: 210000, month: 'Aug' },
  { income: 63000, expenses: 45000, savings: 18000, balance: 228000, month: 'Sep' },
  { income: 63000, expenses: 50000, savings: 13000, balance: 241000, month: 'Oct' },
  { income: 67000, expenses: 55000, savings: 12000, balance: 253000, month: 'Nov' },
  { income: 67000, expenses: 61000, savings: 6000,  balance: 259000, month: 'Dec' },
];

export function valueFormatter(value) {
  return `${value}mm`;
}



//piechart
export const desktopOS = [
  {
    label: 'Windows',
    value: 72.72,
  },
  {
    label: 'OS X',
    value: 16.38,
  },
  {
    label: 'Linux',
    value: 3.83,
  },
  {
    label: 'Chrome OS',
    value: 2.42,
  },
  {
    label: 'Other',
    value: 4.65,
  },
];

export const mobileOS = [
  {
    label: 'Android',
    value: 70.48,
  },
  {
    label: 'iOS',
    value: 28.8,
  },
  {
    label: 'Other',
    value: 0.71,
  },
];

export const platforms = [
  {
    label: 'Mobile',
    value: 59.12,
  },
  {
    label: 'Desktop',
    value: 40.88,
  },
];

const normalize = (v, v2) => Number.parseFloat(((v * v2) / 100).toFixed(2));

export const mobileAndDesktopOS = [
  ...mobileOS.map((v) => ({
    ...v,
    label: v.label === 'Other' ? 'Other (Mobile)' : v.label,
    value: normalize(v.value, platforms[0].value),
  })),
  ...desktopOS.map((v) => ({
    ...v,
    label: v.label === 'Other' ? 'Other (Desktop)' : v.label,
    value: normalize(v.value, platforms[1].value),
  })),
];

export const valueFormatterPie = (item) => `${item.value}%`;
