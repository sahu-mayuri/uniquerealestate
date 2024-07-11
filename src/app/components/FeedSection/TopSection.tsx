
const TopSection = () => {
  return (
    <div className="feed-section bg-light-white">
        <div className="container w-full pt-5">
            <div id="content" className='flex flex-col items-center'>
                <div id="text" className=' py-2 px-3 rounded-[50px] bg-pink mb-4'>
                    <h1 className='text-orange-color font-semibold '>News & Blogs</h1>
                </div>
                <div id="text2" className='mb-5'>
                    <h1 className='font-popins font-bold text-2xl'>Leatest News Feeds</h1>
                </div>
            </div>
            <div id="cards"></div>
        </div>
    </div>
  )
}

export default TopSection
