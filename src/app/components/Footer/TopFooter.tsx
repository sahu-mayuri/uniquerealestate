

const TopFooter = () => {
  return (
    <div>
      <div id="top-footer-container" className="w-full relative mt-10">
        <div id="top" className="w-full h-36 bg-light-white"></div>
        <div id="bottom" className="w-full h-44 bg-[#171B2A] "></div>

        <div
          id="top-layer"
          className=" w-[91%] bg-color-orange absolute top-0 left-4 px-5 py-[13%] sm:py-[9%] md:w-[80%] md:py-[5%] md:ml-16 md:mt-7 lg:mt-9 lg:w-[87%]  lg:ml-16 lg:px-12 lg:pt-16 lg:pb-8"
        >
          <div id="dets" className="w-full h-full  flex flex-col items-center justify-center md:flex md:items-center lg:flex lg:flex-row lg:px-4 ">
            <div id="upper" className="lg:w-[120%] mb-4">
              <h1 className="font-popins text-2xl font-extrabold  text-white mb-3 md:text-[2rem] lg:text-[2.2rem] ">
                {" "}
                Looking for a dream home?
              </h1>
              <div id="spacer" className="lg:size-4 "></div>
              <p className="text-white font-headfont md:text-[0.9rem] lg:text-[1rem]">
                We can help you realize your dream of a new home
              </p>
            </div>

            <div id="bottom-container"className="w-full h-full relative lg:px-0 lg:flex bg-white">

              <div id="bottom" className="w-full bg-color-orange flex justify-center items-center md:justify-center md:pt-4 lg:mt-0 lg:justify-end  ">

                <button className=" flex items-center gap-1 text-[0.9rem] shadow-2xl bg-white font-popins  px-[7%] py-[4%] md:py-[2%] md:px-[4%] md:text-[1rem] lg:py-[3.5%] lg:text-[1rem] relative lg:mb-8 ">
                  Explore Properties
                  <div id="icon" className="h-4 w-5 ">
                  <svg className="size-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" ><path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" /></svg>
                  </div>
                  {/* <div id="animation" className="absolute w-full h-full bg-black top-0 left-[-100%]"></div> */}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopFooter;
