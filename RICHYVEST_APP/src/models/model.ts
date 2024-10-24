import { useState, ChangeEvent } from 'react';
import { stockData } from './RealStockData';

// "useGuessModel" is a custom hook that encapsulates the state and logic for the app's main page. 
// It's the core engine of the app, handling the user's input and calculating the result.

export const useGuessModel = () => {
  const today = new Date();
  const todayFormatted = `${(today.getMonth() + 1).toString().padStart(2, '0')}/${today.getFullYear()}`;
  const [amount, setAmount] = useState<string>('100');
  const [date, setDate] = useState<string>('12/2008');
    
  const getStockPriceByDate = (date: string): number | null => {
    const data = stockData.find((d) => d.date === date);
    return data ? data.price : null;
  };
  
  const calculateResult = (amount: string, date: string): number => {    
    const enteredDateValue = getStockPriceByDate(date);
    const todayValue = getStockPriceByDate(todayFormatted);
        
    if (enteredDateValue === null || todayValue === null) {
      return 0;
    }
    
    const calculatedResult = (parseFloat(amount) / enteredDateValue) * todayValue;
    return parseFloat(calculatedResult.toFixed(2));
  };

  const [result, setResult] = useState<number>(() => calculateResult(amount, date));
  
  // Recalculate when amount changes
  const handleAmountChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newAmount = e.target.value;
    setAmount(newAmount);
    setResult(calculateResult(newAmount, date));
  };
  // Recalculate when date changes
  const handleDateChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const newDate = e.target.value;
    setDate(newDate);
    setResult(calculateResult(amount, newDate));
  };
  
  return {
    amount,
    date,
    result,
    handleAmountChange,
    handleDateChange,
  };
};