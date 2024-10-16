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

const Main: React.FC<MainProps> = ({ amount, date, result, handleAmountChange, handleDateChange }) => {
    const handleButtonClick = () => {
        window.location.href = "https://www.easyvest.be";
    };

    return (
        <div className="flex flex-col items-center justify-center p-8">
            <div className="mb-8">
                <Title />
            </div>
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4 mb-6">
                <div className="rounded-lg p-4 bg-cyan-100 max-w-md md:w-1/3">
                    <label className="text-base font-light">If you had invested</label>
                    <div className="flex items-center mt-2">
                        <InputAmount 
                            className="border rounded px-3 w-2/3" 
                            amount={parseFloat(amount)} 
                            handleChange={handleAmountChange} 
                        />
                        <span className="ml-2 text-base font-light">euros</span>
                    </div>

                    <label className="text-base font-light mt-2 block">on this date:</label>
                    <InputDate 
                        className="border rounded h-7 px-3 w-auto mt-2" 
                        date={date} 
                        handleChange={handleDateChange} 
                    />
                    <label className="text-base font-light mt-2 block">Today you would be rich!</label>
                    <div className="flex items-center mt-2">
                        <Result 
                            className="border bg-white rounded h-8 px-3 w-auto flex items-center" 
                            result={result ?? 0} 
                        />
                    </div>
                </div>
                <div className="md:w-2/3">
                    <Chart startDate={date} initialInvestment={parseFloat(amount)} finalValue={result} />
                </div>
            </div>
            <Button className="bg-cyan-900 text-white font-medium py-1 px-6 mt-4 rounded hover:bg-cyan-400"
            onClick={handleButtonClick}>
                Invest Now
            </Button>
        </div>
    );
};


export default Main;