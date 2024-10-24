const performanceData = require('./performance.json');

// Function to get the 10th dataset of performance.json as an array of key-value pairs
function getTenthDataset(data: { [x: string]: any; }) {
  const tenthDataset = data["10"];
  return Object.entries(tenthDataset);
}

// Store the 10th dataset
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
  return stockData;
}
export const stockData = generateStockData();

// Extract available dates from stockData
export const availableDates = stockData.map(data => data.date);

// Function to get stock prices in a given range
export const getStockPricesInRange = (startDate: string, endDate: string) => {  
  const [startMonth, startYear] = startDate.split('/');
  const start = new Date(`${startYear}-${startMonth}-01`);
  const end = new Date(endDate);

  const filteredData = stockData.filter(data => {
    const [month, year] = data.date.split('/');
    const date = new Date(`${year}-${month}-01`);
    return date >= start && date <= end;
  });

  return filteredData;
};
