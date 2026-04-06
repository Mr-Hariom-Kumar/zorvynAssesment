export const dataset = [
  {
  year:2023,
  data:[
    { income: 41000, expenses: 31000, savings: 10000, balance: 89000,  month: 'Jan' },
    { income: 41000, expenses: 33000, savings: 8000,  balance: 97000,  month: 'Feb' },
    { income: 43000, expenses: 30000, savings: 13000, balance: 110000, month: 'Mar' },
    { income: 43000, expenses: 34000, savings: 9000,  balance: 119000, month: 'Apr' },
    { income: 45000, expenses: 37000, savings: 8000,  balance: 127000, month: 'May' },
    { income: 45000, expenses: 35000, savings: 10000, balance: 137000, month: 'Jun' },
    { income: 47000, expenses: 40000, savings: 7000,  balance: 144000, month: 'Jul' },
    { income: 47000, expenses: 38000, savings: 9000,  balance: 153000, month: 'Aug' },
    { income: 49000, expenses: 36000, savings: 13000, balance: 166000, month: 'Sep' },
    { income: 49000, expenses: 39000, savings: 10000, balance: 176000, month: 'Oct' },
    { income: 51000, expenses: 43000, savings: 8000,  balance: 184000, month: 'Nov' },
    { income: 51000, expenses: 47000, savings: 4000,  balance: 188000, month: 'Dec' },
  ],
},{
  year:2024,
   data:[
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
  ],
},{
  year:2025,
  data: [
    { income: 70000, expenses: 52000, savings: 18000, balance: 277000, month: 'Jan' },
    { income: 70000, expenses: 55000, savings: 15000, balance: 292000, month: 'Feb' },
    { income: 73000, expenses: 51000, savings: 22000, balance: 314000, month: 'Mar' },
    { income: 73000, expenses: 57000, savings: 16000, balance: 330000, month: 'Apr' },
    { income: 76000, expenses: 60000, savings: 16000, balance: 346000, month: 'May' },
    { income: 76000, expenses: 58000, savings: 18000, balance: 364000, month: 'Jun' },
    { income: 79000, expenses: 65000, savings: 14000, balance: 378000, month: 'Jul' },
    { income: 79000, expenses: 61000, savings: 18000, balance: 396000, month: 'Aug' },
    { income: 82000, expenses: 59000, savings: 23000, balance: 419000, month: 'Sep' },
    { income: 82000, expenses: 64000, savings: 18000, balance: 437000, month: 'Oct' },
    { income: 86000, expenses: 70000, savings: 16000, balance: 453000, month: 'Nov' },
    { income: 86000, expenses: 75000, savings: 11000, balance: 464000, month: 'Dec' },
  ],
},{
  year:2026,
  data: [
    { income: 89000, expenses: 63000, savings: 26000, balance: 490000, month: 'Jan' },
    { income: 89000, expenses: 67000, savings: 22000, balance: 512000, month: 'Feb' },
    { income: 92000, expenses: 65000, savings: 27000, balance: 539000, month: 'Mar' },  
  ]
},
]
  
;

export function valueFormatter(value) {
  return `${value}mm`;
}



//piechart
export const spendingData = [
  {
    year: 2023,
    data: [
      { label: 'Housing',          value: 30, color: '#6366f1' },
      { label: 'Groceries',        value: 20, color: '#f59e0b' },
      { label: 'Utilities',        value: 6,  color: '#06b6d4' },
      { label: 'Transport',        value: 14, color: '#ef4444' },
      { label: 'Health & Fitness', value: 3,  color: '#22c55e' },
      { label: 'Liabilities',      value: 18, color: '#ec4899' },
      { label: 'Investments',      value: 9,  color: '#a855f7' },
    ],
  },
  {
    year: 2024,
    data: [
      { label: 'Housing',          value: 28, color: '#6366f1' },
      { label: 'Groceries',        value: 18, color: '#f59e0b' },
      { label: 'Utilities',        value: 5,  color: '#06b6d4' },
      { label: 'Transport',        value: 12, color: '#ef4444' },
      { label: 'Health & Fitness', value: 4,  color: '#22c55e' },
      { label: 'Liabilities',      value: 20, color: '#ec4899' },
      { label: 'Investments',      value: 13, color: '#a855f7' },
    ],
  },
  {
    year: 2025,
    data: [
      { label: 'Housing',          value: 26, color: '#6366f1' },
      { label: 'Groceries',        value: 17, color: '#f59e0b' },
      { label: 'Utilities',        value: 5,  color: '#06b6d4' },
      { label: 'Transport',        value: 11, color: '#ef4444' },
      { label: 'Health & Fitness', value: 5,  color: '#22c55e' },
      { label: 'Liabilities',      value: 21, color: '#ec4899' },
      { label: 'Investments',      value: 15, color: '#a855f7' },
    ],
  },
  {
    year: 2026,
    data: [
      { label: 'Housing',          value: 25, color: '#6366f1' },
      { label: 'Groceries',        value: 16, color: '#f59e0b' },
      { label: 'Utilities',        value: 5,  color: '#06b6d4' },
      { label: 'Transport',        value: 10, color: '#ef4444' },
      { label: 'Health & Fitness', value: 6,  color: '#22c55e' },
      { label: 'Liabilities',      value: 20, color: '#ec4899' },
      { label: 'Investments',      value: 18, color: '#a855f7' },
    ],
  },
]
 
export const valueFormatterPie = (item) => `${item.value}%`
