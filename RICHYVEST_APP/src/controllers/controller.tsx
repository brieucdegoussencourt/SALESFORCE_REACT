import React from 'react';
import { useGuessModel } from '../models/model';
import {InputAmount, InputYear, Result, Button } from '../view/components/Inputs';
import Title from '../view/components/Title';

function Guess() {
  const { amount, year, result, handleAmountChange, handleYearChange, calculateResult } = useGuessModel();

  return (
    <div>
      <Title />
        <div className='leading-7'>  
            <InputAmount amount={amount} handleChange={handleAmountChange} />
            <InputYear year={year} handleChange={handleYearChange} />
            <Result result={result ?? 0} />
        </div>
      <Button />
    </div>
  );
}

export default Guess;