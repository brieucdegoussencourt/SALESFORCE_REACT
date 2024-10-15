import React, { ChangeEvent } from "react";
import { availableDates } from "./RealStockData";

interface InputAmountProps {
  amount: number;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

const InputAmount: React.FC<InputAmountProps> = ({
  amount,
  handleChange,
  className
}) => {
  return (
    <input
      type="number"
      value={amount}
      onChange={handleChange}
      className={className}
    />
  );
};

interface InputDateProps {
  date: string;
  handleChange: (event: ChangeEvent<HTMLSelectElement>) => void;
  className?: string;
}

const InputDate: React.FC<InputDateProps> = ({
  date,
  handleChange,
  className
}) => {
  return (
    <select value={date} onChange={handleChange} className={className}>
      <option value="" disabled>
        Select a date
      </option>
      {availableDates.map((availableDate) => (
        <option key={availableDate} value={availableDate}>
          {availableDate}
        </option>
      ))}
    </select>
  );
};

function Result({ result, className }: { result: number; className?: string }) {
  return (
    <span className={className}>
      {result.toLocaleString("en-US", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      })}{" "}
      euros
    </span>
  );
}

interface ButtonProps {
  className?: string;
  children?: React.ReactNode;
}



const Button: React.FC<ButtonProps> = ({ className, children }) => {
  const handleClick = () => {
    window.location.href = "https://www.easyvest.be";
  };

  return (
    

      <button className={className}>

          {children}

      </button>

  );

};

export { InputAmount, InputDate, Result, Button };
