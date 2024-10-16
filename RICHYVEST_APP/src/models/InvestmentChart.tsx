import "chartjs-adapter-date-fns";
import {
  Chart,
  ChartOptions,
  TimeScale,
  Filler,
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  Title
} from "chart.js";
import { Line } from "react-chartjs-2";
import React, { useState, useEffect } from "react";
import { getStockPricesInRange } from "./RealStockData";

Chart.register(
  TimeScale,
  LineController,
  Filler,
  LineElement,
  PointElement,
  LinearScale,
  Title
);

interface InvestmentChartProps {
  startDate: string;
  initialInvestment: number;
  finalValue: number;
}

const InvestmentChart: React.FC<InvestmentChartProps> = ({
  startDate,
  initialInvestment
}) => {
  const [chartData, setChartData] = useState<any>({});

  useEffect(() => {
    const endDate = new Date().toISOString().slice(0, 10);
    const stockData = getStockPricesInRange(startDate, endDate);
    const dates = stockData.map((data) => {
      const [month, year] = data.date.split("/");
      return `${year}-${month}-01`; // Convert to ISO format
    });
    const prices = stockData.map((data) => data.price);
    const investmentValues = prices.map(
      (price) => (initialInvestment / prices[0]) * price
    );

    const newChartData = {
      labels: dates,
      datasets: [
        {
          label: "Investment Value Over Time",
          data: investmentValues,
          borderColor: "rgba(75, 192, 192, 1)",
          backgroundColor: "rgba(75, 192, 192, 0.2)",
          fill: true
        }
      ]
    };

    setChartData(newChartData);
  }, [startDate, initialInvestment]);

  const options: ChartOptions<"line"> = {
    scales: {
      x: {
        type: "time",
        time: {
          unit: "month",
          tooltipFormat: "MM/yyyy",
          displayFormats: {
            month: "MM/yy"
          }
        }
      },
      y: {
        beginAtZero: true,
        min: initialInvestment
      }
    }
  };

  return (
    <div>
      {chartData.labels && chartData.datasets ? (
        <Line data={chartData} options={options} />
      ) : (
        <p>Loading chart...</p>
      )}
    </div>
  );
};

export default InvestmentChart;
