import React from 'react'

export default function LanguageHoverDropdown() {
    const language = [
        { id: '1', name: 'Arabic' },
        { id: '2', name: 'Bengali' },
        { id: '3', name: 'Chinese' },
        { id: '4', name: 'English' },
        { id: '5', name: 'French' },
        { id: '6', name: 'Hindi' },
    ];
    return (
        <div>
            <div className="relative group cursor-pointer">
                <div className='w-full flex flex-row items-center  md:justify-end md:pr-0 lg:pr-10'>
                    <a className='font-nunito_SemiBold text-white text-[0.813rem] md:text-sm'>
                        English
                    </a>
                    <svg className="text-white size-4 lg:size-5" stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                        <path fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth={48} d="M112 268l144 144 144-144M256 392V100" /></svg>
                </div>
                <div className=" absolute z-10 left-[-5.4rem] top-[1.2rem] hidden group-hover:block">
                    <div id="filter" className='w-full h-3 '></div>
                    <div className='w-auto text-nowrap pr-14 bg-gray-100 py-1'>

                        {language.map((list) =>
                            <a key={list.id} className="my-2 block px-4 font-nunito_Medium text-base text-gray-500 hover:text-color-orange md:mx-2">
                                {list.name}
                            </a>
                        )
                        }
                    </div>
                </div>
            </div>
        </div>

    )
}
