import Title from "./Title";
import { InputAmount, InputDate, Result, Button } from "../../models/Inputs";
import Chart from "./Chart";
import React, { useState } from "react";

interface MainProps {
    amount: string;
    date: string;
    result: number;
    handleAmountChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleDateChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Main: React.FC<MainProps> = ({ amount, date, result, handleAmountChange, handleDateChange }) =>
    <div className="flex flex-col items-center justify-center p-8" >
        <Title />
        <div className="border rounded p-8 bg-cyan-400">
            If you had invested
            <br />
            <InputAmount className="border rounded h-7 p-1 mt-2 w-3/4" amount={parseFloat(amount)} handleChange={handleAmountChange} />
            <br />
            on <InputDate className="border rounded h-7 p-1 mt-2 mb-1" date={date} handleChange={handleDateChange} />
            <br />
            <div>Today you would have</div>
            <br />
            <Result className="border bg-white rounded h-7 p-1" result={result ?? 0} />
        </div>
        <Chart startDate={date} initialInvestment={parseFloat(amount)} finalValue={result} />
        <Button className="bg-cyan-400 text-white font-bold py-2 px-4 rounded mt-2" />
    </div>


export default Main;