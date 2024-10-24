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
            <h1 className="text-center text-cyan-900 mb-2 text-base">Investment Value Over Time</h1>
            <h2 className="text-center text-cyan-900 mb-2 text-xs">MSCI World Index ETF</h2>

            <InvestmentChart 
                startDate={startDate} 
                initialInvestment={initialInvestment} 
                finalValue={finalValue} 
            />
        </div>
    );
}

export default Chart;
