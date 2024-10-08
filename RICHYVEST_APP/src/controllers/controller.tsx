import React from 'react';
import { useGuessModel } from '../models/model';
import {InputAmount, InputDate, Result, Button } from '../view/components/Inputs';
import Title from '../view/components/Title';

function Guess() {
  const { amount, date, result, handleAmountChange, handleDateChange, calculateResult } = useGuessModel();

  return (
    <div>
      <Title />
        <div className='leading-7'>  
            <InputAmount amount={amount} handleChange={handleAmountChange} />
            <InputDate date={date} handleChange={handleDateChange} />
            <Result result={result ?? 0} />
        </div>
      <Button />
    </div>
  );
}

export default Guess;