import React from 'react'
import TopSection from '../FeedSection/TopSection';
import Tabs from './Tabs';


const AppartmentSection = () => {
  return (
    <div>
      <TopSection top={'Apartment Sketch'} bottom={'Apartments Plans'} ></TopSection>
      <div id="bottom-section" className='w-full px-4 lg:px-20'>
        {/* <div id="tab-nav" className='w-full  pl-32 pr-44 flex justify-between'>
          <Tabs text={'The Studio'}></Tabs>
          <Tabs text={'Delux Portion'}></Tabs>
          <Tabs text={'Penthouse'}></Tabs>
          <Tabs text={'Top Garden'}></Tabs>
          <Tabs text={'Double Height'}></Tabs>
        </div> */}


        <div id="content-section" className='w-full  py-1 mt-10 lg:flex lg:justify-center lg:items-center '>
          <div id="text" className='w-full lg:w-[45%] text-white mb-16 lg:mb-0 bg-color-orange px-5 py-6 lg:px-16 lg:py-14 '>

            <h1 className='pl-1 font-poppins font-bold text-[1.25rem] lg:text-[1.9rem] mb-4'>Delux Portion</h1>
            
            <p className='pl-1  font-nunito_Medium mb-6 lg:mb-10 leading-7 text-[0.86rem] lg:text-[1rem]'>Enimad minim veniam quis nostrud exercitation ullamco laboris. Lorem ipsum dolor sit amet cons aetetur adipisicing elit sedo eiusmod tempor.Incididunt labore et dolore magna aliqua. sed ayd minim veniam.</p>

            <ul className='pl-1  leading-8'>

              <div id="border"  className='w-full font-nunito_SemiBold flex justify-between lg:mb-2'>
                <h1 className='text-[0.85rem] lg:text-[1rem]'>Total area</h1>
                <hr className='bg-white'/>
                <h1 className='text-[0.85rem] lg:text-[1rem]'>2800 Sq. Ft</h1>
              </div>

              <div id="border"  className='w-full font-nunito_SemiBold flex justify-between lg:mb-2'>
                <h1 className='text-[0.85rem] lg:text-[1rem]'>Total area</h1>
                <hr className=''/>
                <h1 className='text-[0.85rem] lg:text-[1rem]'>2800 Sq. Ft</h1>
              </div>

              <div id="border"  className='w-full font-nunito_SemiBold flex justify-between lg:mb-2'>
                <h1 className='text-[0.85rem] lg:text-[1rem]'>Total area</h1>
                <hr className=''/>
                <h1 className='text-[0.85rem] lg:text-[1rem]'>2800 Sq. Ft</h1>
              </div>

              <div id="border"  className='w-full font-nunito_SemiBold flex justify-between lg:mb-2'>
                <h1 className='text-[0.85rem] lg:text-[1rem]'>Total area</h1>
                <hr className=''/>
                <h1 className='text-[0.85rem] lg:text-[1rem]'>2800 Sq. Ft</h1>
              </div>

              <div id="border"  className='w-full font-nunito_SemiBold flex justify-between lg:mb-2'>
                <h1 className='text-[0.85rem] lg:text-[1rem]'>Total area</h1>
                <hr className=''/>
                <h1 className='text-[0.85rem] lg:text-[1rem]'>2800 Sq. Ft</h1>
              </div>
              
            </ul>
          </div>

          <div id="image" className='h-[26rem] lg:h-[34rem] lg:w-[55%] lg:px-16 lg:py-[2.9rem] xl:py-0 bg-green-300'>
            <img className="size-full object-contain" src="/images/10.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AppartmentSection;