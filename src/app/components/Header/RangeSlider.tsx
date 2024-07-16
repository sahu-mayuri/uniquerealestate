'use client'
import React, { useState } from 'react';

export default function RangeSlider() {
  const [minValue, setMinValue] = useState(5);
  const [maxValue, setMaxValue] = useState(30);

  const handleMin = (e: React.ChangeEvent<HTMLInputElement>) => {
    // if((maxValue - minValue >= 100) && maxValue<=10){
    //   if(parseInt(e.target.value)>maxValue){
    //   }
    //   else{
    //     setMinValue(parseInt(e.target.value))
    //   }
    // }else{
    //   if(parseInt(e.target.value)<minValue){
    //     setMinValue(parseInt(e.target.value))
    //   }
    // }
    const value = parseInt(e.target.value);
    setMinValue(value);
    if (value > maxValue) {
      setMaxValue(value);
    }
  };

  const handleMax = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    setMaxValue(value);
    if (value < minValue) {
      setMinValue(value);
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
            width: `${((maxValue - minValue) / (100 - 0)) * 100}%`,
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
          max={maxValue}
          className='range-min absolute w-full -top-1 h-1 bg-transparent appearance-none pointer-events-none'
        />
        <input id='customSliderRight'
          type="range"
          value={maxValue}
          onChange={handleMax}
          min={minValue}
          step={1}
          max={100}
          className='range-max absolute w-full -top-1 h-1 bg-transparent appearance-none pointer-events-none'
        />
      </div>
    </div>
  );
}

