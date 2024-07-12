import React from "react";
import Cards from "../Cards/Card";

const Slider = () => {
  return (
    <div className="w-full px-20 relative ">

        <div id="L-Btn" className="size-12 rounded-full absolute top-52 bg-black right-0 overflow-hidden ">
          <div id="icon" className="w-full h-full size-1 bg-color-orange flex items-center justify-center ">
          <svg className="size-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" ><path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" /></svg>
          </div>
        </div>

        <div id="R-Btn" className="size-12 rounded-full absolute top-52 bg-black left-0 overflow-hidden">
          <div id="icon" className="w-full h-full size-1 bg-color-orange"></div>
        </div>

      <div id="slider" className="w-full px-4 bg-slider-background-color flex overflow-x-auto scrollbar-none ">

        <div id="card" className="mr-7 shrink-0 ">
          <Cards></Cards>
        </div>
        <div id="card" className="mr-7">
          <Cards></Cards>
        </div>
        <div id="card" className="mr-7">
          <Cards></Cards>
        </div>
        <div id="card" className="mr-7">
          <Cards></Cards>
        </div>
        <div id="card" className="mr-7">
          <Cards></Cards>
        </div>
        <div id="card" className="mr-7">
          <Cards></Cards>
        </div>
      </div>
    </div>
  );
};

export default Slider;
