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

const Main: React.FC<MainProps> = ({
  amount,
  date,
  result,
  handleAmountChange,
  handleDateChange
}) => {
  const handleButtonClick = () => {
    window.location.href = "https://www.easyvest.be";
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-12">
      <Title />
      <div className="flex flex-col md:flex-row items-center justify-center space-y-12 md:space-y-0 md:space-x-4 mb-6">
        <div className="rounded-lg p-4 bg-cyan-100 max-w-md md:w-1/3">
          <label className="text-md font-semibold mb-2">
            If you had invested
          </label>
          <div className="flex flex-col items-start mt-2">
            <InputAmount
              className="border rounded-lg px-4 py-1 w-full text-lg"
              amount={parseFloat(amount)}
              handleChange={handleAmountChange}
            />
          </div>
          <div className="flex flex-col mt-4">
            <InputDate
              className="border rounded-lg h-9 px-4 w-full text-lg"
              date={date}
              handleChange={handleDateChange}
            />
            <small className="text-gray-600 mt-1 text-center">
              Choose an investment date
            </small>
          </div>
          <label className="text-md font-semibold mt-4 block">
            Today you would be rich!
          </label>
          <div className="flex items-center mt-2">
            <Result
              className="border bg-white rounded-lg h-10 px-4 w-full flex items-center text-lg"
              result={result ?? 0}
            />
          </div>
        </div>
        <div className="md:w-2/3">
          <Chart
            startDate={date}
            initialInvestment={parseFloat(amount)}
            finalValue={result}
          />
        </div>
      </div>
      <Button
        className="bg-cyan-400 text-xl text-white font-medium py-2 px-6 rounded hover:bg-cyan-900"
        onClick={handleButtonClick}
      >
        Invest Now
      </Button>
    </div>
  );
};

export default Main;
