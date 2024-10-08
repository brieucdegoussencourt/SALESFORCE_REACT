
// Function to generate an array of fake stock data 
// from 1980 to 2024 with an 8% annual return

// Define the shape of the stock data objects
interface StockData {
    year: number;
    price: number;
  }
  
  const generateStockData = (): StockData[] => {
    const startYear = 1980;
    const endYear = 2024;
    const basePrice = 100; 
    const annualReturn = 0.08;
    let price = basePrice;
  
    const stockData: StockData[] = [];
    
    // Loop through each year from startYear to endYear
    for (let year = startYear; year <= endYear; year++) {
      stockData.push({ year, price: parseFloat(price.toFixed(2)) });
      price *= 1 + annualReturn;
    }
  
    return stockData;
  };


  
  // Export the generated data
  export const stockData = generateStockData();
  console.log(stockData);
