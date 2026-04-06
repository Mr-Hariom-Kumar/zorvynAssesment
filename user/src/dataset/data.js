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


export const transactionsData = [
  { id: 1, description: "Burger", category: "Food", date: "2026-04-05", amount: -250, type: "expense" },
  { id: 2, description: "Salary", category: "Income", date: "2026-04-01", amount: 50000, type: "income" },
  { id: 3, description: "Groceries", category: "Food", date: "2026-03-30", amount: -1200, type: "expense" },
  { id: 4, description: "Electric Bill", category: "Bills", date: "2026-03-28", amount: -2200, type: "expense" },
  { id: 5, description: "Freelance", category: "Income", date: "2026-03-27", amount: 8000, type: "income" },
  { id: 6, description: "Movie", category: "Entertainment", date: "2026-03-25", amount: -400, type: "expense" },
  { id: 7, description: "Petrol", category: "Transport", date: "2026-03-24", amount: -1500, type: "expense" },
  { id: 8, description: "Internet Bill", category: "Bills", date: "2026-03-22", amount: -999, type: "expense" },
  { id: 9, description: "Bonus", category: "Income", date: "2026-03-20", amount: 10000, type: "income" },
  { id: 10, description: "Lunch", category: "Food", date: "2026-03-19", amount: -300, type: "expense" },
  { id: 11, description: "Shopping", category: "Lifestyle", date: "2026-03-18", amount: -4500, type: "expense" },
  { id: 12, description: "Taxi", category: "Transport", date: "2026-03-17", amount: -350, type: "expense" },
  { id: 13, description: "Gym Fee", category: "Health", date: "2026-03-15", amount: -2000, type: "expense" },
  { id: 14, description: "Salary", category: "Income", date: "2026-03-01", amount: 50000, type: "income" },
  { id: 15, description: "Snacks", category: "Food", date: "2026-02-28", amount: -150, type: "expense" },
  { id: 16, description: "Mobile Recharge", category: "Bills", date: "2026-02-27", amount: -299, type: "expense" },
  { id: 17, description: "Stock Profit", category: "Income", date: "2026-02-25", amount: 6000, type: "income" },
  { id: 18, description: "Dinner", category: "Food", date: "2026-02-24", amount: -700, type: "expense" },
  { id: 19, description: "Bus", category: "Transport", date: "2026-02-22", amount: -120, type: "expense" },
  { id: 20, description: "OTT Subscription", category: "Entertainment", date: "2026-02-20", amount: -499, type: "expense" },
  { id: 21, description: "Gift", category: "Lifestyle", date: "2026-02-18", amount: -2000, type: "expense" },
  { id: 22, description: "Salary", category: "Income", date: "2026-02-01", amount: 50000, type: "income" },
  { id: 23, description: "Coffee", category: "Food", date: "2026-01-30", amount: -120, type: "expense" },
  { id: 24, description: "Electric Bill", category: "Bills", date: "2026-01-28", amount: -2100, type: "expense" },
  { id: 25, description: "Freelance", category: "Income", date: "2026-01-26", amount: 9000, type: "income" },
  { id: 26, description: "Movie", category: "Entertainment", date: "2026-01-25", amount: -350, type: "expense" },
  { id: 27, description: "Petrol", category: "Transport", date: "2026-01-24", amount: -1600, type: "expense" },
  { id: 28, description: "Internet Bill", category: "Bills", date: "2026-01-22", amount: -999, type: "expense" },
  { id: 29, description: "Bonus", category: "Income", date: "2026-01-20", amount: 12000, type: "income" },
  { id: 30, description: "Lunch", category: "Food", date: "2026-01-19", amount: -280, type: "expense" },
  { id: 31, description: "Shopping", category: "Lifestyle", date: "2026-01-18", amount: -5000, type: "expense" },
  { id: 32, description: "Taxi", category: "Transport", date: "2026-01-17", amount: -400, type: "expense" },
  { id: 33, description: "Gym Fee", category: "Health", date: "2026-01-15", amount: -2000, type: "expense" },
  { id: 34, description: "Salary", category: "Income", date: "2026-01-01", amount: 50000, type: "income" },
  { id: 35, description: "Snacks", category: "Food", date: "2025-12-30", amount: -200, type: "expense" },
  { id: 36, description: "Mobile Recharge", category: "Bills", date: "2025-12-28", amount: -299, type: "expense" },
  { id: 37, description: "Stock Profit", category: "Income", date: "2025-12-25", amount: 7000, type: "income" },
  { id: 38, description: "Dinner", category: "Food", date: "2025-12-24", amount: -800, type: "expense" },
  { id: 39, description: "Bus", category: "Transport", date: "2025-12-22", amount: -150, type: "expense" },
  { id: 40, description: "OTT Subscription", category: "Entertainment", date: "2025-12-20", amount: -499, type: "expense" },
];