interface LatestListingProps{
    url:string;
    purpose:string;
    location:string;
    price:number;
    text:string;
    Number_of_bedroom:number;
    Number_of_bathroom:number;
    owner_name:string;
    isRent:Boolean;
}
const  LatestListingCard: React.FC<LatestListingProps> = ({url,purpose,location,price,text,Number_of_bathroom,Number_of_bedroom,owner_name,isRent}) => {
    return (
      <div id="card-container" className="w-full bg-white shadow-xl">

          <div id="image-container" className="w-full h-[13.5rem] md:h-[18rem] overflow-hidden relative ">

            {/* THIS IS THE LAYER DIV TO LOWER THE BRIGHTNESS OF THE IMAGES */}

          <div id="layercontainer" className="size-full bg-black/20 absolute top-0"></div>

            <div id="content" className="w-full h-full absolute top-0 p-4 ">
                
                {/* TOP PART OF THE CARD*/}

                <div id="top" className="w-full  flex  justify-end md:mb-32 mb-16">

                    {/* AVATAR IMAGE  */}
                    <div id="avatar-img" className="size-12 bg-white rounded-full overflow-hidden">
                        <img className="size-full object-contain" src="https://imgs.search.brave.com/mYuKqM8YeN3Xo0rk0ioz3wRsMz8tw2c9O8pUk5uohlI/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/dzNzY2hvb2xzLmNv/bS9ob3d0by9pbWdf/YXZhdGFyLnBuZw" alt="" />
                    </div>
                </div>
               

            </div>
            
            <img className=" w-full h-full object-cover hover:scale-110 transition duration-500 ease-in-out " src={url} alt="" />
          </div>


          {/* This is the middle Section of card */}

          <div id="dets-container" className="w-full p-4">

                {/* THE RENT OR SELL BUTTON */}

              <div id="icons" className="p-2  mt-2">
                  <button className={`font-nunito_ExtraBold tracking-tight text-[0.8rem] md:text-[0.9rem] text-white px-3 py-1 ${isRent ? 'bg-[#77C720]' : 'bg-red-500'}`}>{purpose}</button>
              </div>
              
              <div id="dets" className="w-full">
                  <h1 className="font-popins p-2 pb-4 text-[1.1rem] font-bold md:text-[115%] lgi:text-[115%] lg:font-bold hover:text-color-orange transition ease-in-out duration-200 hover:cursor-pointer">{text}</h1>
              </div>

                {/* THIS IS ICONS */}
              <div id="b1" className="ml-1 mb-4 flex items-center">
                        <div id="svg">
                        <svg className=" text-[0.85rem] md:text-[1rem] custom_screen:text-[0.9rem] mr-1 text-color-orange" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 384 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" > <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path> </svg>
                        </div>
                        <div id="text">
                            <h1 className="font-nunitoLight font-semibold text-gray-500 text-[0.85rem] md:text-[0.95rem] hover:text-color-orange transition ease-in-out duration-200 hover:cursor-pointer">{location}</h1>
                        </div>
              </div>

              <div id="dets" className=" flex gap-2 ml-2 mb-6">
                <div id="box" className=" pr-4  flex gap-2">
                    <div id="top" className="flex gap-2 items-center">
                        <div id="text"><h1 className="font-nunito_Medium font-bold text-gray-500 text-[0.9rem]">{Number_of_bedroom}</h1></div>
                    </div>
                    <div id="btm">
                        <h1 className="font-nunito_Medium font-medium text-gray-500 text-[0.9rem]">Bedrooms</h1>
                    </div>
                </div>
                <div id="box" className=" pr-4  flex gap-2">
                    <div id="top" className="flex gap-2 items-center">
                        <div id="text"><h1 className="font-nunito_Medium font-bold text-gray-500 text-[0.9rem]">{Number_of_bathroom}</h1></div>
                    </div>
                    <div id="btm">
                        <h1 className="font-nunito_Medium font-medium text-gray-500 text-[0.9rem]">Bathroom</h1>
                    </div>
                </div>
                <div id="box" className=" pr-4  flex gap-2">
                    <div id="top" className="flex gap-2 items-center">
                        <div id="text"><h1 className="font-nunito_Medium font-bold text-gray-500 text-[0.9rem]">3450</h1></div>
                    </div>
                    <div id="btm">
                        <h1 className="font-nunito_Medium font-medium text-gray-500  text-[0.9rem]">Sq. Ft</h1>
                    </div>
                </div>
                
                
              </div>
              <div id="popover" className="mb-5 w-1/2 mt-5 md:mt-0 md:px-2 lg:px-4 flex items-center justify-between ">

                <div id="box" className="size-10 ">
                    <button className="size-full flex justify-center items-center bg-[#F3EEEE] hover:bg-color-orange">
                        <img className="size-4 object-contain" src="/FlaticonSVG/two-way.png" alt="" />
                    </button>
                </div>
                <div id="box" className="size-10 ">
                    <button className="size-full flex justify-center items-center bg-[#F3EEEE] hover:bg-color-orange">
                        <img className="size-4 object-contain" src="/FlaticonSVG/heart.png" alt="" />
                    </button>
                </div>
                <div id="box" className="size-10 ">
                    <button className="size-full flex justify-center items-center bg-[#F3EEEE] hover:bg-color-orange">
                        <img className="size-4 object-contain" src="/FlaticonSVG/add.png" alt="" />
                    </button>
                </div>

                </div>

              {/* HORIZONTAL LINE!! */}
              <hr className="text-gray-400 mb-5  w-[100%] self-center" />

            {/* THIS IS BOTTOM SECTION OF THE CARD */}

              <div id="bottom-section" className="w-full md:flex ">

              <h1 className="font-poppins ml-2 text-color-orange font-bold md:text-[85%] lg:text-[1rem]">{price} <span className="font-normal">/Month</span></h1>
                
              </div>
          </div>
        </div>
     
    );
  };
  
  export default LatestListingCard;

