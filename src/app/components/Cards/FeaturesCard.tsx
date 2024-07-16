const FeaturesCard = () => {
    return (
      <div id="card-container" className="w-full bg-white">

          <div id="image-container" className="w-full h-[13.5rem] md:h-[18rem] overflow-hidden relative ">

          <div id="layercontainer" className="size-full bg-black/20 absolute top-0"></div>

            <div id="content" className="w-full h-full absolute top-0 p-4 ">
                

                <div id="top" className="w-full  flex - justify-end mb-32">
                    <button className="font-nunito_ExtraBold tracking-tight text-[0.9rem] text-white bg-[#77C720] px-3 py-1">FOR RENT</button>
                </div>
                <div id="btm" className="w-full flex justify-between pt-16">
                    <div id="b1" className=" flex items-center">
                        <div id="svg">
                        <svg className=" text-[0.9rem] md:text-[1rem] custom_screen:text-[1rem] mr-1 text-white" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 384 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" > <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path> </svg>
                        </div>
                        <div id="text">
                            <h1 className="font-nunitoLight font-semibold text-white">Chicago</h1>
                        </div>
                    </div>
                    <div id="b2" className="flex gap-2  ">
                        <div id="Icons" className="flex bg-white/30 items-center py-1 px-2">
                            <div id="svg" className="">
                            <svg className="me-2 text-white" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M512 144v288c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V144c0-26.5 21.5-48 48-48h88l12.3-32.9c7-18.7 24.9-31.1 44.9-31.1h125.5c20 0 37.9 12.4 44.9 31.1L376 96h88c26.5 0 48 21.5 48 48zM376 288c0-66.2-53.8-120-120-120s-120 53.8-120 120 53.8 120 120 120 120-53.8 120-120zm-32 0c0 48.5-39.5 88-88 88s-88-39.5-88-88 39.5-88 88-88 88 39.5 88 88z"></path></svg>
                            </div>
                            <div id="text" ><h1 className="text-white font-nunito_Medium">3</h1></div>
                        </div>

                        <div id="Icons" className="flex bg-white/30 items-center py-1 px-2">
                            <div id="svg" className="">
                            <svg className="me-2 text-white" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512"  height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M488 64h-8v20c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12V64H96v20c0 6.6-5.4 12-12 12H44c-6.6 0-12-5.4-12-12V64h-8C10.7 64 0 74.7 0 88v336c0 13.3 10.7 24 24 24h8v-20c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v20h320v-20c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v20h8c13.3 0 24-10.7 24-24V88c0-13.3-10.7-24-24-24zM96 372c0 6.6-5.4 12-12 12H44c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40zm0-96c0 6.6-5.4 12-12 12H44c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40zm0-96c0 6.6-5.4 12-12 12H44c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40zm272 208c0 6.6-5.4 12-12 12H156c-6.6 0-12-5.4-12-12v-96c0-6.6 5.4-12 12-12h200c6.6 0 12 5.4 12 12v96zm0-168c0 6.6-5.4 12-12 12H156c-6.6 0-12-5.4-12-12v-96c0-6.6 5.4-12 12-12h200c6.6 0 12 5.4 12 12v96zm112 152c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40zm0-96c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40zm0-96c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40z"></path></svg>

                            </div>
                            <div id="text" ><h1 className="text-white font-nunito_Medium">3</h1></div>
                        </div>
                    </div>
                </div>

            </div>
            
            <img className=" w-full h-full object-cover hover:scale-110 transition duration-500 ease-in-out " src="/images/4.jpg" alt="" />
          </div>
          <div id="dets-container" className="w-full p-4">

              <div id="icons" className="p-2  mt-2">
                  <div id="admin" className="flex items-center">
                     
                      <div id="text">
                          <h1 className="font-poppins text-color-orange font-bold text-[75%] md:text-[85%] lg:text-[1.1rem]">$ 69/ <span className="font-normal">Month</span></h1>
                      </div>
                  </div>
                  
              </div>
              <div id="dets" className="w-full">
                  <h1 className="font-popins p-2 pb-8 text-[100%] font-semibold md:text-[115%] lg:text-[115%] lg:font-bold">Luxury Vila in Rego Park </h1>
              </div>

              <div id="dets" className=" flex gap-2 ml-2 mb-8">
                <div id="box" className=" pr-4 border-r-2 border-gray-400">
                    <div id="top" className="flex gap-2 items-center">
                        <div id="text"><h1 className="font-nunito_Medium font-bold text-gray-500 text-[0.9rem]">3</h1></div>
                        <div id="icon" className="size-4 bg-green-400"> </div>
                    </div>
                    <div id="btm">
                        <h1 className="font-nunito_Medium font-medium text-gray-500 text-[0.9rem]">Bedrooms</h1>
                    </div>
                </div>
                <div id="box" className=" pr-4 border-r-2 border-gray-400">
                    <div id="top" className="flex gap-2 items-center">
                        <div id="text"><h1 className="font-nunito_Medium font-bold text-gray-500 text-[0.9rem]">2</h1></div>
                        <div id="icon" className="size-4 bg-green-400"> </div>
                    </div>
                    <div id="btm">
                        <h1 className="font-nunito_Medium font-medium text-gray-500 text-[0.9rem]">Bathroom</h1>
                    </div>
                </div>
                <div id="box" className=" pr-4 border-r-2 border-gray-400">
                    <div id="top" className="flex gap-2 items-center">
                        <div id="text"><h1 className="font-nunito_Medium font-bold text-gray-500 text-[0.9rem]">3450</h1></div>
                        <div id="icon" className="size-4 bg-green-400"> </div>
                    </div>
                    <div id="btm">
                        <h1 className="font-nunito_Medium font-medium text-gray-500  text-[0.9rem]">Sq. Ft</h1>
                    </div>
                </div>
                
                
              </div>
              {/* HORIZONTAL LINE!! */}
              <hr className="text-gray-400 my-3 ml-2 w-[94%] self-center" />
              <div id="icons" className="p-2 flex justify-between gap-4">
                  <div id="admin" className="flex gap-2">
                      <div className="icon size-4">
                          <svg className="me-2 text-color-orange" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M148 288h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm108-12v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 96v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm192 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96-260v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h48V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h128V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h48c26.5 0 48 21.5 48 48zm-48 346V160H48v298c0 3.3 2.7 6 6 6h340c3.3 0 6-2.7 6-6z"></path></svg>
                      </div>
                      <div id="text">
                          <h1 className="font-bodyfont text-[75%] md:text-[85%] lg:text-[85%]">July 11, 2024</h1>
                      </div>
                  </div>
                  <div id="location" className="flex">
                      <div id="text">
                          <h1 className="font-bodyfont text-[75%] md:text-[85%] lg:text-[85%] font-semibold text-color-orange">READ MORE</h1>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    );
  };
  
  export default FeaturesCard;
  