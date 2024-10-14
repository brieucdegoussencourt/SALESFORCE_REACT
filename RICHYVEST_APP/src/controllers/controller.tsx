import React from 'react';
import { useGuessModel } from '../models/model';
import { InputAmount, InputDate, Result, Button } from '../view/components/Inputs';
import Title from '../view/components/Title';
import Chart from '../view/components/Chart';

function Guess() {
  const { amount, date, result, handleAmountChange, handleDateChange } = useGuessModel();

  return (
    <div className='App mt-7'>
      <div className='leading-7'>
        <Title />
        <InputAmount amount={amount} handleChange={handleAmountChange} />
        <InputDate date={date} handleChange={handleDateChange} />
        <Result result={result ?? 0} />
        <Chart startDate={date} initialInvestment={parseFloat(amount)} finalValue={result} />
        <Button />
      </div>
    </div>
  );
}

export default Guess;