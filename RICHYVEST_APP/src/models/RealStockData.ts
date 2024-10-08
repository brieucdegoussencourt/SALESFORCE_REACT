const performanceData = require('./performance.json');

console.log('Performance Data:', performanceData);

// Function to get the 10th dataset as an array of key-value pairs
function getTenthDataset(data: { [x: string]: any; }) {
  const tenthDataset = data["10"];
  console.log('Tenth Dataset:', tenthDataset);
  return Object.entries(tenthDataset);
}

// Export the 10th dataset
const RealstockData = getTenthDataset(performanceData);

// Define the shape of the stock data objects
interface StockData {
  date: string;
  price: number;
}

// Function to format a date to "month/year"
function formatDateToMonthYear(dateString: string): string {
  const date = new Date(dateString);
  const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-based
  const year = date.getFullYear();
  return `${month}/${year}`;
}

// Function to generate an array of stock data objects
const generateStockData = (): StockData[] => {
  const stockData: StockData[] = [];
  for (let i = 0; i < RealstockData.length; i++) {
    const [date, price] = RealstockData[i];
    const formattedDate = formatDateToMonthYear(date);
    stockData.push({ date: formattedDate, price: Number(price) });
  }
  console.log('Generated Stock Data:', stockData);
  return stockData;
}
// Export the generated data
export const stockData = generateStockData();

// Extract available dates from stockData
export const availableDates = stockData.map(data => data.date);