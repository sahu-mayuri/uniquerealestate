
export default function AminitiesCard(props: any) {
    return (
        <>
            <div id="card" className="group relative w-full h-[11.75rem] shadow-box-shadow-4 cardshadow rounded-[0.5rem] pt-[2.5rem]  pb-[2.188rem] custom_small:w-[15.43rem] md:w-[12.125rem] md:h-[13.563rem] custom_screen:h-[15.25rem] custom_screen:w-[15.938rem] hover:bg-color-orange transition duration-300 ease-in-out transform ">
                <div className="w-full h-full">
                    <div className="w-full h-[7.875rem] flex flex-col">

                        <div className='h-[5rem] flex justify-center'>
                            <div className="size-[3.75rem] flex justify-center place-items-center rounded-[31.25rem] bg-lightPink md:size-[5rem] custom_screen:size-[6.25rem]">
                                <img src={props.img} className="size-[1.563rem] md:size-[1.875rem] custom_screen:size-[2.813rem] fill-color-orange"></img>
                            </div>
                        </div>

                        <h1 className="h-[1.438rem] font-poppins text-center text-[0.875rem] font-medium md:h-[2rem] md:mt-[5%] md:text-lg md:pt-[0.80rem] custom_screen:text-2xl custom_screen:mt-[2rem] group-hover:text-white">{props.title}</h1>
                    </div>
                    
                    <div className="flex justify-center  w-[100%] absolute md:bottom-[-10%] custom_screen:mt-[25%]">
                        
                        <div className="w-[2.813rem] h-[2.813rem] rounded-[31.25rem] bg-white flex justify-center items-center shadow card-shadow">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-[1.4rem] fill-current group-hover:text-color-orange">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                            </svg>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}