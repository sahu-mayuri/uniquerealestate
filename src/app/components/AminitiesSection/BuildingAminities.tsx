import AminitiesTopSection from './AminitiesTopSection';

export default function BuildingAminities() {
    return (
        <>
            {/* main container of aminities cards */}
            <div className="w-full pt-[7.188rem] pb-[7.188rem] pr-[0.5rem] pl-[0.5rem]">
                <AminitiesTopSection></AminitiesTopSection>
                {/* card container */}
                <div className='w-full flex justify-center mt-[1rem]'>
                    <div className='w-full px[0.5rem] grid grid-cols-1 gap-y-[2.85rem] sm:grid-cols-2 sm:gap-x-4 sm:w-[31.875rem] sm:px-0 md:grid-cols-3 md:gap-x-8 md:w-[45rem] md:px-[0.9rem] lg:w-[58rem] lg:px-0 lg:grid-cols-4  xl:w-[74.375rem]'>
                        {/* cards */}
                        <div id="card" className="group w-full h-[11.75rem] shadow-box-shadow-4 cardshadow rounded-[0.5rem] pt-[2.5rem] pr-[0.938rem] pb-[2.188rem] pl-[0.938rem] md:h-[13.563rem] custom_screen:h-[15.25rem] hover:bg-color-orange transition duration-300 ease-in-out transform ">
                            <div className="w-full h-full">
                                <div className="w-full h-[7.875rem] flex flex-col">
                                    <div className='h-[5rem] flex justify-center'>
                                        <div className="size-[3.75rem] flex justify-center place-items-center rounded-[31.25rem] bg-lightPink md:size-[5rem] custom_screen:size-[6.25rem]">
                                            <img src="./aminitiesIcons/electric-car.svg" className="size-[1.563rem] md:size-[1.875rem] custom_screen:size-[2.813rem] fill-color-orange"></img>
                                        </div>
                                    </div>
                                    <h1 className="h-[1.438rem] font-poppins text-center text-[0.875rem] font-medium md:h-[2rem] md:mt-[5%] md:text-lg md:pt-[0.80rem] custom_screen:text-2xl custom_screen:mt-[2rem] group-hover:text-white">Parking Space</h1>
                                </div>
                                <div className="flex justify-center md:mt-[16%] custom_screen:mt-[25%]">
                                    <div className="w-[2.813rem] h-[2.813rem] rounded-[31.25rem] bg-white flex justify-center items-center shadow card-shadow">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-[1.4rem] fill-current group-hover:text-color-orange">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                                        </svg>

                                    </div>
                                </div>
                            </div>
                        </div>

                        <div id="card" className="group w-full h-[11.75rem] shadow-box-shadow-4 cardshadow rounded-[0.5rem] pt-[2.5rem] pr-[0.938rem] pb-[2.188rem] pl-[0.938rem] md:h-[13.563rem] custom_screen:h-[15.25rem] hover:text-white hover:bg-color-orange transition duration-300 ease-in-out transform ">
                            <div className="w-full h-full">
                                <div className="w-full h-[7.875rem] flex flex-col">
                                    <div className='h-[5rem] flex justify-center'>
                                        <div className="size-[3.75rem] flex justify-center place-items-center rounded-[31.25rem] bg-lightPink md:size-[5rem] custom_screen:size-[6.25rem]">
                                            <img src="./aminitiesIcons/swimming.svg" className="size-[1.563rem] md:size-[1.875rem] custom_screen:size-[2.813rem] fill-color-orange"></img>
                                        </div>
                                    </div>
                                    <h1 className="h-[1.438rem] text-center text-[0.875rem] font-medium md:h-[2rem] md:mt-[5%] md:text-lg md:pt-[0.80rem] custom_screen:text-2xl custom_screen:mt-[2rem] group-hover:text-white">Swimming Pool</h1>
                                </div>
                                <div className="flex justify-center md:mt-[16%] custom_screen:mt-[25%]">
                                    <div className="w-[2.813rem] h-[2.813rem] rounded-[31.25rem] bg-white flex justify-center items-center shadow card-shadow">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-[1.4rem] fill-current group-hover:text-color-orange">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div id="card" className="group w-full h-[11.75rem] shadow-box-shadow-4 cardshadow rounded-[0.5rem] pt-[2.5rem] pr-[0.938rem] pb-[2.188rem] pl-[0.938rem] md:h-[13.563rem] custom_screen:h-[15.25rem] hover:text-white hover:bg-color-orange transition duration-300 ease-in-out transform ">
                            <div className="w-full h-full">
                                <div className="w-full h-[7.875rem] flex flex-col">
                                    <div className='h-[5rem] flex justify-center'>
                                        <div className="size-[3.75rem] flex justify-center place-items-center rounded-[31.25rem] bg-lightPink md:size-[5rem] custom_screen:size-[6.25rem]">
                                            <img src="./aminitiesIcons/private.svg" className="size-[1.563rem] md:size-[1.875rem] custom_screen:size-[2.813rem]"></img>
                                        </div>
                                    </div>
                                    <h1 className="h-[1.438rem] text-center text-[0.875rem] font-medium md:h-[2rem] md:mt-[5%] md:text-lg md:pt-[0.80rem] custom_screen:text-2xl custom_screen:mt-[2rem] group-hover:text-white">Private Security</h1>
                                </div>
                                <div className="flex justify-center md:mt-[16%] custom_screen:mt-[25%]">
                                    <div className="w-[2.813rem] h-[2.813rem] rounded-[31.25rem] bg-white flex justify-center items-center shadow card-shadow">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-[1.4rem] fill-current group-hover:text-color-orange">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div id="card" className="group w-full h-[11.75rem] shadow-box-shadow-4 cardshadow rounded-[0.5rem] pt-[2.5rem] pr-[0.938rem] pb-[2.188rem] pl-[0.938rem] md:h-[13.563rem] custom_screen:h-[15.25rem] hover:text-white hover:bg-color-orange transition duration-300 ease-in-out transform ">
                            <div className="w-full h-full">
                                <div className="w-full h-[7.875rem] flex flex-col">
                                    <div className='h-[5rem] flex justify-center'>
                                        <div className="size-[3.75rem] flex justify-center place-items-center rounded-[31.25rem] bg-lightPink md:size-[5rem] custom_screen:size-[6.25rem]">
                                            <img src="./aminitiesIcons/medical.svg" className="size-[1.563rem] md:size-[1.875rem] custom_screen:size-[2.813rem]"></img>
                                        </div>
                                    </div>
                                    <h1 className="h-[1.438rem] text-center text-[0.875rem] font-medium md:h-[2rem] md:mt-[5%] md:text-lg md:pt-[0.80rem] custom_screen:text-2xl custom_screen:mt-[2rem] group-hover:text-white">Medical Center</h1>
                                </div>
                                <div className="flex justify-center md:mt-[16%] custom_screen:mt-[25%]">
                                    <div className="w-[2.813rem] h-[2.813rem] rounded-[31.25rem] bg-white flex justify-center items-center shadow card-shadow">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-[1.4rem] fill-current group-hover:text-color-orange">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div id="card" className="group w-full h-[11.75rem] shadow-box-shadow-4 cardshadow rounded-[0.5rem] pt-[2.5rem] pr-[0.938rem] pb-[2.188rem] pl-[0.938rem] md:h-[13.563rem] custom_screen:h-[15.25rem] hover:text-white hover:bg-color-orange transition duration-300 ease-in-out transform ">
                            <div className="w-full h-full">
                                <div className="w-full h-[7.875rem] flex flex-col">
                                    <div className='h-[5rem] flex justify-center'>
                                        <div className="size-[3.75rem] flex justify-center place-items-center rounded-[31.25rem] bg-lightPink md:size-[5rem] custom_screen:size-[6.25rem]">
                                            <img src="./aminitiesIcons/library.svg" className="size-[1.563rem] md:size-[1.875rem] custom_screen:size-[2.813rem]"></img>
                                        </div>
                                    </div>
                                    <h1 className="h-[1.438rem] text-center text-[0.875rem] font-medium md:h-[2rem] md:mt-[5%] md:text-lg md:pt-[0.80rem] custom_screen:text-2xl custom_screen:mt-[2rem] group-hover:text-white">Library Area</h1>
                                </div>
                                <div className="flex justify-center md:mt-[16%] custom_screen:mt-[25%]">
                                    <div className="w-[2.813rem] h-[2.813rem] rounded-[31.25rem] bg-white flex justify-center items-center shadow card-shadow">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-[1.4rem] fill-current group-hover:text-color-orange">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div id="card" className="group w-full h-[11.75rem] shadow-box-shadow-4 cardshadow rounded-[0.5rem] pt-[2.5rem] pr-[0.938rem] pb-[2.188rem] pl-[0.938rem] md:h-[13.563rem] custom_screen:h-[15.25rem] hover:text-white hover:bg-color-orange transition duration-300 ease-in-out transform ">
                            <div className="w-full h-full">
                                <div className="w-full h-[7.875rem] flex flex-col">
                                    <div className='h-[5rem] flex justify-center'>
                                        <div className="size-[3.75rem] flex justify-center place-items-center rounded-[31.25rem] bg-lightPink md:size-[5rem] custom_screen:size-[6.25rem]">
                                            <img src="./aminitiesIcons/beds.svg" className="size-[1.563rem] md:size-[1.875rem] custom_screen:size-[2.813rem]"></img>
                                        </div>
                                    </div>
                                    <h1 className="h-[1.438rem] text-center text-[0.875rem] font-medium md:h-[2rem] md:mt-[5%] md:text-lg md:pt-[0.80rem] custom_screen:text-2xl custom_screen:mt-[2rem] group-hover:text-white">King Size Beds</h1>
                                </div>
                                <div className="flex justify-center md:mt-[16%] custom_screen:mt-[25%]">
                                    <div className="w-[2.813rem] h-[2.813rem] rounded-[31.25rem] bg-white flex justify-center items-center shadow card-shadow">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-[1.4rem] fill-current group-hover:text-color-orange">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div id="card" className="group w-full h-[11.75rem] shadow-box-shadow-4 cardshadow rounded-[0.5rem] pt-[2.5rem] pr-[0.938rem] pb-[2.188rem] pl-[0.938rem] md:h-[13.563rem] md:ml-[58%] lg:ml-[0%] custom_screen:h-[15.25rem] hover:text-white hover:bg-color-orange transition duration-300 ease-in-out transform ">
                            <div className="w-full h-full">
                                <div className="w-full h-[7.875rem] flex flex-col">
                                    <div className='h-[5rem] flex justify-center'>
                                        <div className="size-[3.75rem] flex justify-center place-items-center rounded-[31.25rem] bg-lightPink md:size-[5rem] custom_screen:size-[6.25rem]">
                                            <img src="./aminitiesIcons/smarthomes.svg" className="size-[1.563rem] md:size-[1.875rem] custom_screen:size-[2.813rem]"></img>
                                        </div>
                                    </div>
                                    <h1 className="h-[1.438rem] text-center text-[0.875rem] font-medium md:h-[2rem] md:mt-[5%] md:text-lg md:pt-[0.80rem] custom_screen:text-2xl custom_screen:mt-[2rem] group-hover:text-white">Smart Homes</h1>
                                </div>
                                <div className="flex justify-center md:mt-[16%] custom_screen:mt-[25%]">
                                    <div className="w-[2.813rem] h-[2.813rem] rounded-[31.25rem] bg-white flex justify-center items-center shadow card-shadow">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-[1.4rem] fill-current group-hover:text-color-orange">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div id="card" className="group w-full h-[11.75rem] shadow-box-shadow-4 cardshadow rounded-[0.5rem] pt-[2.5rem] pr-[0.938rem] pb-[2.188rem] pl-[0.938rem] md:h-[13.563rem] md:ml-[58%] lg:ml-[0%] custom_screen:h-[15.25rem] hover:text-white hover:bg-color-orange transition duration-300 ease-in-out transform ">
                            <div className="w-full h-full">
                                <div className="w-full h-[7.875rem] flex flex-col">
                                    <div className='h-[5rem] flex justify-center'>
                                        <div className="size-[3.75rem] flex justify-center place-items-center rounded-[31.25rem] bg-lightPink md:size-[5rem] custom_screen:size-[6.25rem]">
                                            <img src="./aminitiesIcons/kidsPlay.svg" className="size-[1.563rem] md:size-[1.875rem] custom_screen:size-[2.813rem]"></img>
                                        </div>
                                    </div>
                                    <h1 className="h-[1.438rem] text-center text-[0.875rem] font-medium md:h-[2rem] md:mt-[5%] md:text-lg md:pt-[0.80rem] custom_screen:text-2xl xl:mt-[2rem] group-hover:text-white">Kid's Playland</h1>
                                </div>
                                <div className="flex justify-center md:mt-[16%] custom_screen:mt-[25%]">
                                    <div className="w-[2.813rem] h-[2.813rem] rounded-[31.25rem] bg-white flex justify-center items-center shadow card-shadow">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-[1.4rem] fill-current group-hover:text-color-orange">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </>
    )
}