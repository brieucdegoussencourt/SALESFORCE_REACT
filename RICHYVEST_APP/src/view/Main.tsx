import Title from "./components/Title";
import { InputAmount, InputDate, Result, Button } from "../models/Inputs";
import Chart from "./components/Chart";
import React, { useState } from "react";


interface MainProps {
    amount: string;
    date: string;
    result: number;
    handleAmountChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleDateChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Main: React.FC<MainProps> = ({ amount, date, result, handleAmountChange, handleDateChange }) =>
<div className="flex flex-col items-center justify-center p-6 space-y-4 bg-gray-100 rounded-lg shadow-lg">
  <Title />
  <div className="border rounded-lg p-4 bg-cyan-200 max-w-md ">
    <label className="text-lg font-light">Amount Invested:</label>
    <div className="flex items-center mt-2">
      <InputAmount 
        className="border rounded h-8 px-3 w-1/2" 
        amount={parseFloat(amount)} 
        handleChange={handleAmountChange} 
      />
      <span className="ml-2">euros</span>
    </div>

    <label className="text-lg font-light mt-4 block">Date:</label>
    <InputDate 
      className="border rounded h-8 px-3 w-auto mt-2" 
      date={date} 
      handleChange={handleDateChange} 
    />
    <label className="text-lg font-light mt-4 block">Today you would have</label>
    <div className="flex items-center mt-2">
    <Result 
      className="border bg-white rounded h-8 px-3 w-auto flex items-center" 
      result={result ?? 0} 
    />
    </div>
  </div>

  <Chart startDate={date} initialInvestment={parseFloat(amount)} finalValue={result} />

  <Button className="bg-cyan-900 text-white font-bold py-2 px-6 rounded-lg mt-4 hover:bg-cyan-600 transition-shadow shadow-md hover:shadow-lg">
    Invest Now
  </Button>
</div>


export default Main;