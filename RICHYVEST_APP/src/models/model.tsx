import { useState, ChangeEvent } from 'react';
import { stockData } from './RealStockData';

// Custom hook to manage the state and logic 
// for calculating stock value

export const useGuessModel = () => {
  const today = new Date();
  const todayFormatted = `${(today.getMonth() + 1).toString().padStart(2, '0')}/${today.getFullYear()}`;
  const [amount, setAmount] = useState<string>('100');
  const [date, setDate] = useState<string>('10/2024');
  const [result, setResult] = useState<number>(100);
    
  const getStockPriceByDate = (date: string): number | null => {
    const data = stockData.find((d) => d.date === date);
    return data ? data.price : null;
  };
  
  const calculateResult = (amount: string, date: string) => {    
    const enteredDateValue = getStockPriceByDate(date);
    const todayValue = getStockPriceByDate(todayFormatted);
        
    if (enteredDateValue === null || todayValue === null) {
      setResult(0);
      return;
    }
    
    // Calculate the result and format with two decimal places and thousand separators
    const calculatedResult = (parseFloat(amount) / enteredDateValue) * todayValue;
    setResult(parseFloat(calculatedResult.toFixed(2))); // Limit result to 2 decimals
  };
  
  const handleAmountChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newAmount = e.target.value;
    setAmount(newAmount);
    calculateResult(newAmount, date); // Recalculate when amount changes
  };
  
  const handleDateChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const newDate = e.target.value;
    setDate(newDate);
    calculateResult(amount, newDate); // Recalculate when date changes
  };
  
  return {
    amount,
    date,
    result,
    handleAmountChange,
    handleDateChange,
    calculateResult,
  };
};