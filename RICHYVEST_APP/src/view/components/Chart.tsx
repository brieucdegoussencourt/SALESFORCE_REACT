// src/view/components/Chart.tsx
import React, {useState} from 'react';
import InvestmentChart from '../../models/InvestmentChart';

interface ChartProps {
    startDate: string;
    initialInvestment: number;
    finalValue: number;
}

const Chart: React.FC<ChartProps> = ({ startDate, initialInvestment, finalValue }) => {

    return (
        <div className='bg-white p-7 rounded-lg' >
            <InvestmentChart 
                startDate={startDate} 
                initialInvestment={initialInvestment} 
                finalValue={finalValue} 
            />
        </div>
    );
}

export default Chart;
