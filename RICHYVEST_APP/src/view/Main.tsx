import Title from "./components/Title";
import { InputAmount, InputDate, Result, Button } from "../models/Inputs";
import Chart from "./components/Chart";
import React from "react";

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
    <div className="flex flex-col items-center justify-center p-9 space-y-9">
      <Title />
      <div className="flex flex-col md:flex-row items-center justify-center space-y-12 md:space-y-0 md:space-x-4 mb-6">
        <div className="rounded p-3 bg-cyan-700 max-w-md">
          <label className="text-md text-white font-medium mb-2">
            If you had invested
          </label>
          <div className="flex flex-col items-start mt-2">
            <InputAmount
              className="border rounded px-4 py-1 w-full text-lg"
              amount={parseFloat(amount)}
              handleChange={handleAmountChange}
            />
          </div>

          <div className="flex flex-col mt-4">
            <InputDate
              className="border rounded h-9 px-4 w-full text-lg"
              date={date}
              handleChange={handleDateChange}
            />
            <small className="text-white text-sm mt-1 text-center">
              Choose an investment date
            </small>
          </div>
          <label className="text-md text-white font-medium mt-4 block">
            Today you would be rich!
          </label>
          <div className="flex items-center mt-2">
            <Result
              className="border bg-white rounded h-10 px-4 w-full flex items-center text-lg"
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
      <div className="bg-cyan-500 text-white text-xl text-cyan-900 font-medium py-3 px-8 rounded hover:from-cyan-900 hover:bg-cyan-900 hover:text-cyan-400 shadow-lg">
      <Button
          
          onClick={handleButtonClick}
        >
          Invest Now
        </Button>
      </div>



    </div>
  );
};

export default Main;
