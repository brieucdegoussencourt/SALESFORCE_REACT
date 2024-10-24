import Title from "./components/Title";
import { InputAmount, InputDate, Result, Button } from "../models/Inputs";
import Chart from "./components/Chart";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEuroSign } from "@fortawesome/free-solid-svg-icons";

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
      <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-6 mb-6">
        <div className="rounded p-4 bg-cyan-700 max-w-md">
          <div className="flex flex-col mt-2">
            <small className="text-white text-base mb-4 text-center">
              Choose an amount
              <FontAwesomeIcon icon={faEuroSign} className="ml-2" />
            </small>
            <InputAmount
              className="rounded py-1 w-full text-base text-center"
              amount={parseFloat(amount)}
              handleChange={handleAmountChange}
            />
          </div>

          <div className="flex flex-col mt-4">
            <small className="text-white text-base mb-4 text-center">
              Choose an investment date
            </small>
            <InputDate
              className="rounded h-8 w-full text-base text-center"
              date={date}
              handleChange={handleDateChange}
            />
          </div>

          <div className="flex flex-col mt-6 justify-center items-center">
            <label className="text-white text-lg font-medium mb-4 text-center">
              Today you would be rich!
            </label>
            <Result
              className="bg-white font-medium rounded h-10 px-4 w-full flex items-center justify-center text-lg text-center "
              result={result ?? 0}
            />
          </div>
        </div>
        <div className="w-auto">
          <Chart
            startDate={date}
            initialInvestment={parseFloat(amount)}
            finalValue={result}
          />
        </div>
      </div>
      <div className="anim_btn bg-cyan-400 text-white text-xl text-cyan-900 font-medium py-3 px-8 rounded hover:from-cyan-900 hover:bg-cyan-900 hover:text-cyan-400 shadow-lg">
        <Button onClick={handleButtonClick}>Invest Now</Button>
      </div>
    </div>
  );
};

export default Main;
