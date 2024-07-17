import React from 'react'
import TopSection from '../FeedSection/TopSection'
import LatestListingCard from '../Cards/LatestListningCard'

const LatestListingSection = () => {
  return (
    <div className='mb-24 mt-20'>
      <TopSection top={'Property'} bottom={'Latest Listing'}></TopSection>
    <div id="wContainer" className='px-5 lg:px-12 custom_screen:px-20 '>
      <div id="wrapper" className='w-full grid grid-cols-1 custom_small:grid-cols-2 md:grid-cols-2 custom_screen:grid-cols-3 gap-x-6 gap-y-20'>
        <div id="box" className='bg-red-400 '>
            <LatestListingCard></LatestListingCard>
        </div>
        <div id="box" className='bg-green-400 '>
            <LatestListingCard></LatestListingCard>
        </div>
        <div id="box" className='bg-red-400 '>
            <LatestListingCard></LatestListingCard>
        </div>
        <div id="box" className='bg-green-400 '>
            <LatestListingCard></LatestListingCard>
        </div>
        <div id="box" className='bg-red-400 '>
            <LatestListingCard></LatestListingCard>
        </div>
        <div id="box" className='bg-green-400 '>
            <LatestListingCard></LatestListingCard>
        </div>
      </div>
      </div>
    </div>
  )
}

export default LatestListingSection
