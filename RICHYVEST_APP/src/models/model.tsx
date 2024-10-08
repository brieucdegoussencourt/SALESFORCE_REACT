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
  
  console.log('Stock Data:', stockData);
  
  const getStockPriceByDate = (date: string): number | null => {
    console.log(`Fetching stock price for date: ${date}`);
    const data = stockData.find((d) => d.date === date);
    console.log(`Found data: ${data ? JSON.stringify(data) : 'No data found'}`);
    return data ? data.price : null;
  };
  
  const calculateResult = (amount: string, date: string) => {
    console.log(`Calculating result for amount: ${amount}, date: ${date}`);
    
    const enteredDateValue = getStockPriceByDate(date);
    const todayValue = getStockPriceByDate(todayFormatted);
    
    console.log(`Stock price on entered date: ${enteredDateValue}, Stock price today: ${todayValue}`);
    
    if (enteredDateValue === null || todayValue === null) {
      setResult(0);
      return;
    }
    
    // Calculate the result and format with two decimal places and thousand separators
    const calculatedResult = (parseFloat(amount) / enteredDateValue) * todayValue;
    console.log(`Calculated result: ${calculatedResult}`);
    setResult(parseFloat(calculatedResult.toFixed(2))); // Limit result to 2 decimals
  };
  
  const handleAmountChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newAmount = e.target.value;
    console.log(`Amount changed: ${newAmount}`);
    setAmount(newAmount);
    calculateResult(newAmount, date); // Recalculate when amount changes
  };
  
  const handleDateChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const newDate = e.target.value;
    console.log(`Date changed: ${newDate}`);
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