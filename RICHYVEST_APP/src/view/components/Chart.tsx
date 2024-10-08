// src/view/components/Chart.tsx
import React from 'react';
import InvestmentChart from '../../models/InvestmentChart';

function Chart() {
  // Example values for the props
  const startDate = '01/2022';
  const initialInvestment = 1000;
  const finalValue = 1500;

  return (
    <div className='mt-4'>
      <h2>Investment Return Over Time</h2>
      <InvestmentChart 
        startDate={startDate} 
        initialInvestment={initialInvestment} 
        finalValue={finalValue} 
      />
    </div>
  );
}

export default Chart;