interface TimeSeriesData {
  [date: string]: {
    '1. open': string;
    '2. high': string;
    '3. low': string;
    '4. close': string;
    '5. volume': string;
  };
}

interface ApiResponse {
  'Time Series (Daily)': TimeSeriesData;
  'Error Message'?: string;
  'Note'?: string;
}

const symbol = 'URTH'; // Replace with the wanted symbol
const API_KEY = 'LTC43A14JL58FBFO'; // Replace with your actual API key
const API_BASE_URL = 'http://localhost:5001'; // Your Express server URL

export const FetchApiData = async (date: string): Promise<number> => {
  const url = `${API_BASE_URL}/stock/URTH/${date}`;
  console.log('Fetching data from URL:', url);

  const response = await fetch(url);
  
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  const data = await response.json();
  
  if (data.error) {
    throw new Error(data.error);
  }
  
  return data.close_price;
};