import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

const generateDateRange = (startDate: string, endDate: string): string[] => {
  console.log('Generating date range from', startDate, 'to', endDate);

  // Convert startDate from 'MM/YYYY' to 'YYYY-MM-DD'
  const [month, year] = startDate.split('/');
  const start = new Date(`${year}-${month}-01`);
  const end = new Date(endDate);
  const dates: string[] = [];

  if (isNaN(start.getTime()) || isNaN(end.getTime())) {
    console.error('Invalid date(s) provided:', { startDate, endDate });
    return dates;
  }

  while (start <= end) {
    const month = start.getMonth() + 1;
    const year = start.getFullYear();
    dates.push(`${month < 10 ? '0' : ''}${month}/${year}`);
    start.setMonth(start.getMonth() + 1);
  }

  console.log('Generated dates:', dates);
  return dates;
};

interface InvestmentChartProps {
  startDate: string;
  initialInvestment: number;
  finalValue: number;
}

const InvestmentChart: React.FC<InvestmentChartProps> = ({ startDate, initialInvestment, finalValue }) => {
  const [chartData, setChartData] = useState<any>({});

  useEffect(() => {
    console.log('useEffect triggered');

    const dateRange = generateDateRange(startDate, new Date().toISOString().slice(0, 10));
    if (!dateRange || dateRange.length === 0) {
      console.log('Date range is empty or undefined');
      return;
    }

    const dataPoints = dateRange.map((date, index) => {
      if (index === 0) return initialInvestment;
      if (index === dateRange.length - 1) return finalValue;
      return initialInvestment + ((finalValue - initialInvestment) / (dateRange.length - 1)) * index; // Interpolated values
    });

    console.log('Date Range:', dateRange);
    console.log('Data Points:', dataPoints);

    setChartData({
      labels: dateRange,
      datasets: [
        {
          label: 'Investment Return',
          data: dataPoints,
          borderColor: 'rgba(75, 192, 192, 1)',
          backgroundColor: 'rgba(75, 192, 192, 0.2)', // Set to a transparent color
          fill: true,
        },
      ],
    });
  }, [startDate, initialInvestment, finalValue]);

  const options = {
    scales: {
      x: {
        type: 'category' as const, // Ensure type is a specific string literal
      },
    },
  };

  return (
    <div style={{ backgroundColor: 'white', padding: '1rem' }}>
      {chartData.labels && chartData.datasets ? (
        <Line data={chartData} options={options} />
      ) : (
        <p>Loading chart...</p>
      )}
    </div>
  );
};

export default InvestmentChart;