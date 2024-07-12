import TopSection from "./FeedSection/TopSection"

export default function  BuildingAminities() {
    return (
        <>
            {/* main container of aminities cards */}

            <div id="buildingAminities" className="w-full pt-[6.80rem] pr-[1rem] pl-[1rem] bg-blue-400 sm:flex sm:justify-center">
                
                {/* the header part of Building Amnities */}
                {/* <div className="w-screen h-[7.774rem] pb-[3.125rem] sm:w-[31.875rem]">
                    <div className="flex justify-center">
                        <h6 className="w-[8.205rem] h-[1.762rem] text-[0.8rem] flex justify-center items-center bg-orange-50 text-orange-500 font-semibold rounded-xl text-center">Our Aminities</h6>
                    </div>
                    <div className="flex justify-center mt-[1.2rem] w-full h-[1.949rem]">
                        <h1 className="text-[1.5rem] font-bold">Building Aminities</h1>
                    </div>
                </div> */}

                

                {/* cards container*/}
                <div className="pb-[5rem] w-full bg-gray-300 grid grid-col-1 gap-y-[2.85rem] sm:grid-cols-2 sm:gap-x-4 sm:w-[32.875rem] md:grid-cols-3 md:gap-x-7 md:w-[45rem] lg:grid-cols-4 lg:w-[58.125rem] xl:w-[67.5rem]">

                    {/* cards */}

                    <div id="card" className="w-full h-[11.75rem] pt-[2.5rem] bg-red-700 shadow cardshadow rounded-[0.5rem]  hover:bg-orange-500 sm:w-full lg:h-[90%] xl:h-[90%] ">
                        <div className="h-[7.063rem]">
                            <div className="w-full flex justify-center">
                                <div className="w-[3.75rem] h-[3.75rem] flex justify-center items-center rounded-[31.25rem] bg-lightPink md:size-[5rem] xl:size-[6.25rem]">
                                    <img src="https://i.postimg.cc/q7nyDm2c/car.png" className="w-[1.563em] h-[1.563rem] md:size-[1.875rem] xl:size-[2.813rem]"></img>
                                </div>
                            </div>
                            <h6 className="pt-[1.5rem] text-center text-[0.813rem] font-medium sm:text-sm sm:font-semibold md:text-base md:pt-[0.80rem] xl:text-lg">Parking Space</h6>
                        </div>

                        <div className="flex justify-center mt-[0.90rem] ">
                            <div className="w-[2.813rem] h-[2.813rem] rounded-[31.25rem] bg-white flex justify-center items-center shadow card-shadow ]">
                                <img src="https://i.postimg.cc/NF9KXf8x/right-arrow.png" className="w-[1.125rem] h-[1.125rem]"></img>
                            </div>
                        </div>
                    </div>

                    <div id="card" className="w-full h-[11.75rem] pt-[2.5rem] bg-red-700 shadow cardshadow rounded-[0.5rem]  hover:bg-orange-500 sm:w-full lg:h-[90%] xl:h-[90%] ">
                        <div className="h-[7.063rem]">
                            <div className="w-full flex justify-center">
                                <div className="w-[3.75rem] h-[3.75rem] flex justify-center items-center rounded-[31.25rem] bg-lightPink md:size-[5rem] xl:size-[6.25rem]">
                                    <img src="https://i.postimg.cc/6pJj2zG4/swimming.png" className="w-[1.563em] h-[1.563rem] md:size-[1.875rem] xl:size-[2.813rem]"></img>
                                </div>
                            </div>
                            <h6 className="pt-[1.5rem] text-center text-[0.813rem] font-medium sm:text-sm sm:font-semibold md:text-base md:pt-[0.80rem] xl:text-lg">Swimming pool</h6>
                        </div>

                        <div className="flex justify-center mt-[0.90rem] ">
                            <div className="w-[2.813rem] h-[2.813rem] rounded-[31.25rem] bg-white flex justify-center items-center shadow card-shadow ]">
                                <img src="https://i.postimg.cc/NF9KXf8x/right-arrow.png" className="w-[1.125rem] h-[1.125rem]"></img>
                            </div>
                        </div>
                    </div>

                    <div id="card" className="w-full h-[11.75rem] pt-[2.5rem] bg-red-700 shadow cardshadow rounded-[0.5rem]  hover:bg-orange-500 sm:w-full lg:h-[90%] xl:h-[90%] ">
                        <div className="h-[7.063rem]">
                            <div className="w-full flex justify-center">
                                <div className="w-[3.75rem] h-[3.75rem] flex justify-center items-center rounded-[31.25rem] bg-lightPink md:size-[5rem] xl:size-[6.25rem]">
                                    <img src="https://i.postimg.cc/NMm7cvpN/private.png" className="w-[1.563em] h-[1.563rem] md:size-[1.875rem] xl:size-[2.813rem]"></img>
                                </div>
                            </div>
                            <h6 className="pt-[1.5rem] text-center text-[0.813rem] font-medium sm:text-sm sm:font-semibold md:text-base md:pt-[0.80rem] xl:text-lg">Swimming pool</h6>
                        </div>

                        <div className="flex justify-center mt-[0.90rem] ">
                            <div className="w-[2.813rem] h-[2.813rem] rounded-[31.25rem] bg-white flex justify-center items-center shadow card-shadow ]">
                                <img src="https://i.postimg.cc/NF9KXf8x/right-arrow.png" className="w-[1.125rem] h-[1.125rem]"></img>
                            </div>
                        </div>
                    </div>
            
                    <div id="card" className="w-full h-[11.75rem] pt-[2.5rem] bg-red-700 shadow cardshadow rounded-[0.5rem]  hover:bg-orange-500 sm:w-full lg:h-[90%] xl:h-[90%] ">
                        <div className="h-[7.063rem]">
                            <div className="w-full flex justify-center">
                                <div className="w-[3.75rem] h-[3.75rem] flex justify-center items-center rounded-[31.25rem] bg-lightPink md:size-[5rem] xl:size-[6.25rem]">
                                    <img src="https://i.postimg.cc/fyFwj1hN/medical.png" className="w-[1.563em] h-[1.563rem] md:size-[1.875rem] xl:size-[2.813rem]"></img>
                                </div>
                            </div>
                            <h6 className="pt-[1.5rem] text-center text-[0.813rem] font-medium sm:text-sm sm:font-semibold md:text-base md:pt-[0.80rem] xl:text-lg">Swimming pool</h6>
                        </div>

                        <div className="flex justify-center mt-[0.90rem] ">
                            <div className="w-[2.813rem] h-[2.813rem] rounded-[31.25rem] bg-white flex justify-center items-center shadow card-shadow ]">
                                <img src="https://i.postimg.cc/NF9KXf8x/right-arrow.png" className="w-[1.125rem] h-[1.125rem]"></img>
                            </div>
                        </div>
                    </div>
                    

                    <div id="card" className="w-full h-[11.75rem] pt-[2.5rem] bg-red-700 shadow cardshadow rounded-[0.5rem]  hover:bg-orange-500 sm:w-full lg:h-[90%] xl:h-[90%] ">
                        <div className="h-[7.063rem]">
                            <div className="w-full flex justify-center">
                                <div className="w-[3.75rem] h-[3.75rem] flex justify-center items-center rounded-[31.25rem] bg-lightPink md:size-[5rem] xl:size-[6.25rem]">
                                    <img src="https://i.postimg.cc/zGvQ13W0/library.png" className="w-[1.563em] h-[1.563rem] md:size-[1.875rem] xl:size-[2.813rem]"></img>
                                </div>
                            </div>
                            <h6 className="pt-[1.5rem] text-center text-[0.813rem] font-medium sm:text-sm sm:font-semibold md:text-base md:pt-[0.80rem] xl:text-lg">Swimming pool</h6>
                        </div>

                        <div className="flex justify-center mt-[0.90rem] ">
                            <div className="w-[2.813rem] h-[2.813rem] rounded-[31.25rem] bg-white flex justify-center items-center shadow card-shadow ]">
                                <img src="https://i.postimg.cc/NF9KXf8x/right-arrow.png" className="w-[1.125rem] h-[1.125rem]"></img>
                            </div>
                        </div>
                    </div>
                    
                    <div id="card" className="w-full h-[11.75rem] pt-[2.5rem] bg-red-700 shadow cardshadow rounded-[0.5rem]  hover:bg-orange-500 sm:w-full lg:h-[90%] xl:h-[90%] ">
                        <div className="h-[7.063rem]">
                            <div className="w-full flex justify-center">
                                <div className="w-[3.75rem] h-[3.75rem] flex justify-center items-center rounded-[31.25rem] bg-lightPink md:size-[5rem] xl:size-[6.25rem]">
                                    <img src="https://i.postimg.cc/X7jjdcSq/beds.png" className="w-[1.563em] h-[1.563rem] md:size-[1.875rem] xl:size-[2.813rem]"></img>
                                </div>
                            </div>
                            <h6 className="pt-[1.5rem] text-center text-[0.813rem] font-medium sm:text-sm sm:font-semibold md:text-base md:pt-[0.80rem] xl:text-lg">Swimming pool</h6>
                        </div>

                        <div className="flex justify-center mt-[0.90rem] ">
                            <div className="w-[2.813rem] h-[2.813rem] rounded-[31.25rem] bg-white flex justify-center items-center shadow card-shadow ]">
                                <img src="https://i.postimg.cc/NF9KXf8x/right-arrow.png" className="w-[1.125rem] h-[1.125rem]"></img>
                            </div>
                        </div>
                    </div>

                    <div id="card" className="w-full h-[11.75rem] pt-[2.5rem] bg-red-700 shadow cardshadow rounded-[0.5rem]  hover:bg-orange-500 sm:w-full lg:h-[90%] xl:h-[90%] ">
                        <div className="h-[7.063rem]">
                            <div className="w-full flex justify-center">
                                <div className="w-[3.75rem] h-[3.75rem] flex justify-center items-center rounded-[31.25rem] bg-lightPink md:size-[5rem] xl:size-[6.25rem]">
                                    <img src="https://i.postimg.cc/PJmMHnrX/smarthomes.png" className="w-[1.563em] h-[1.563rem] md:size-[1.875rem] xl:size-[2.813rem]"></img>
                                </div>
                            </div>
                            <h6 className="pt-[1.5rem] text-center text-[0.813rem] font-medium sm:text-sm sm:font-semibold md:text-base md:pt-[0.80rem] xl:text-lg">Swimming pool</h6>
                        </div>

                        <div className="flex justify-center mt-[0.90rem] ">
                            <div className="w-[2.813rem] h-[2.813rem] rounded-[31.25rem] bg-white flex justify-center items-center shadow card-shadow ]">
                                <img src="https://i.postimg.cc/NF9KXf8x/right-arrow.png" className="w-[1.125rem] h-[1.125rem]"></img>
                            </div>
                        </div>
                    </div>
                    

                    <div id="card" className="w-full h-[11.75rem] pt-[2.5rem] bg-red-700 shadow cardshadow rounded-[0.5rem]  hover:bg-orange-500 sm:w-full lg:h-[90%] xl:h-[90%] ">
                        <div className="h-[7.063rem]">
                            <div className="w-full flex justify-center">
                                <div className="w-[3.75rem] h-[3.75rem] flex justify-center items-center rounded-[31.25rem] bg-lightPink md:size-[5rem] xl:size-[6.25rem]">
                                    <img src="./aminitiesIcons/playground.png" className="w-[1.563em] h-[1.563rem] md:size-[1.875rem] xl:size-[2.813rem]"></img>
                                </div>
                            </div>
                            <h6 className="pt-[1.5rem] text-center text-[0.813rem] font-medium sm:text-sm sm:font-semibold md:text-base md:pt-[0.80rem] xl:text-lg">Swimming pool</h6>
                        </div>

                        <div className="flex justify-center mt-[0.90rem] ">
                            <div className="w-[2.813rem] h-[2.813rem] rounded-[31.25rem] bg-white flex justify-center items-center shadow card-shadow ]">
                                <img src="https://i.postimg.cc/NF9KXf8x/right-arrow.png" className="w-[1.125rem] h-[1.125rem]"></img>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}