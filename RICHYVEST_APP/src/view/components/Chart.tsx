// src/view/components/Chart.tsx
import React, {useState} from 'react';
import InvestmentChart from '../../models/InvestmentChart';
import { stockData, availableDates } from '../../models/RealStockData';
import { InputAmount, InputDate, Result, Button } from './Inputs';
import { useGuessModel } from '../../models/model';

interface ChartProps {
    startDate: string;
    initialInvestment: number;
    finalValue: number;
}

const Chart: React.FC<ChartProps> = ({ startDate, initialInvestment, finalValue }) => {

    return (
        <div className='mt-4'>
            <h2 className='mb-2'>Investment Return Over Time</h2>
            <InvestmentChart 
                startDate={startDate} 
                initialInvestment={initialInvestment} 
                finalValue={finalValue} 
            />
        </div>
    );
}

export default Chart;