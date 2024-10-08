import React, { ChangeEvent } from 'react';

// components needed for user inetraction

function InputAmount({ amount, handleChange }: 
    { amount: string, handleChange: (e: ChangeEvent<HTMLInputElement>) => void }) {
    return (
      <div>
        <p>If you had invested</p>
        <input 
          type="number" 
          value={amount} 
          onChange={handleChange} 
          placeholder="Enter amount here" 
          className="border rounded placeholder-gray-700 text-black h-6 inline-block w-auto"
        />
        <p className='inline-block ml-2'>euros</p>
      </div>
    );
  }

function InputYear({ year, handleChange }: { year: number, handleChange: (e: ChangeEvent<HTMLInputElement>) => void }) {
    return (
      <div>
        <p>in our Exchange-Traded Fund in</p>
        <input 
          type="number" 
          value={year} 
          onChange={handleChange} 
          min="1980" 
          max="2024" 
          className="border rounded text-black h-6 inline-block"
        />
      </div>
    );
  }

function Result({ result }: { result: number }) {
    return (
      <div>
        <p>Today you would have</p>
        <span className="border rounded bg-white text-black h-7 p-1 flex items-center w-max">
          {result.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} euros</span>
      </div>
    );
  }

function Button() {
    const handleClick = () => {
      window.location.href = "https://www.easyvest.be";
    };

    return (
      <button 
        onClick={handleClick} 
        className="bg-cyan-400 text-white font-bold py-2 px-4 rounded mt-8">Invest Now
      </button>
    );
  }

export { InputAmount, InputYear, Result, Button };