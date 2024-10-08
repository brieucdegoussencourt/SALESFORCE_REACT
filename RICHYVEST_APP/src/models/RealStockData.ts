// Import the JSON data
const performanceData = require('./performance.json');

// Function to get the 10th dataset as an array of key-value pairs
function getTenthDataset(data: { [x: string]: any; }) {
    const tenthDataset = data["10"];
    return Object.entries(tenthDataset);
  }

// Export the 10th dataset
export const stockData = getTenthDataset(performanceData);