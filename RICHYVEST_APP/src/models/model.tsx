import { useState, ChangeEvent } from 'react';
import { stockData } from './FakeStockData';

// Custom hook to manage the state and logic 
// for calculating stock value

export const useGuessModel = () => {
  const today = new Date().getFullYear();
  const [amount, setAmount] = useState<string>('100');
  const [year, setYear] = useState<number>(2024);
  const [result, setResult] = useState<number>(100);

  const getStockPriceByYear = (year: number): number | null => {
    const data = stockData.find((d) => d.year === year);
    return data ? data.price : null;
  };

  const calculateResult = async (amount: string, year: number): Promise<void> => {
    if (!amount) {
      setResult(0);
      return;
    }
  
    const enteredYearValue = getStockPriceByYear(year);
    const todayValue = getStockPriceByYear(today);
  
    if (enteredYearValue === null || todayValue === null) {
      setResult(0);
      return;
    }
  
    // Calculate the result and format with two decimal places and thousand separators
    const calculatedResult = (parseFloat(amount) / enteredYearValue) * todayValue;
    setResult(parseFloat(calculatedResult.toFixed(2))); // Limit result to 2 decimals
  };

  const handleAmountChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAmount(e.target.value);
    calculateResult(e.target.value, year); // Recalculate when amount changes
  };

  const handleYearChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newYear = parseInt(e.target.value);
    setYear(newYear);
    calculateResult(amount, newYear); // Recalculate when year changes
  };

  return {
    amount,
    year,
    result,
    handleAmountChange,
    handleYearChange,
    calculateResult,
  };
};