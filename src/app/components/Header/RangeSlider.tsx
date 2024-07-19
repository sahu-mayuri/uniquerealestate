'use client'
import React, { useState } from 'react';

export default function RangeSlider() {
  const [minValue, setMinValue] = useState(3);
  const [maxValue, setMaxValue] = useState(30);

  const handleMin = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (value <= maxValue) {
      setMinValue(value);
    }
  };
  
  const handleMax = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (value >= minValue) {
      setMaxValue(value);
    }
  };

  return (
    <div>
      <div className='mb-6 text-gray-500 font-poppins font-semibold text-sm'>
        <p>Your range:<span className='px-10'>{minValue} - {maxValue} </span></p>
      </div>
      <div className='slider relative h-2 rounded-md bg-gray-300'>
        <div
          className='progress absolute h-2 bg-color-orange rounded'
          style={{
            width: `${((maxValue - minValue) / 100) * 100}%`,
            left: `${(minValue / 100) * 100}%`,
          }}
        ></div>
      </div>
      <div className='range-input relative'>
        <input id='customSliderLeft'
          type="range"
          value={minValue}
          onChange={handleMin}
          min={0}
          step={1}
          max={100}
          className='range-min absolute w-full -top-1 h-1 bg-transparent appearance-none pointer-events-none cursor-pointer'
        />
        <input id='customSliderRight'
          type="range"
          value={maxValue}
          onChange={handleMax}
          min={0}
          step={1}
          max={100}
          className='range-max absolute w-full -top-1 h-1 bg-transparent appearance-none pointer-events-none cursor-pointer'
        />
      </div>
    </div>
  );
}

