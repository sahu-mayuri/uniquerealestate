import React from 'react';

const Parallax = () => {
  return (
    <div>
      <div className='w-full h-[21rem] mb-5 mt-20 bg-fixed bg-center bg-cover' style={{ backgroundImage: 'url("/images/19.jpg")' }}>
        <div id="videoIcon" className='w-full h-full flex justify-center items-center'>
          <div id="icon" className='relative flex justify-center items-center w-14 h-14 bg-white rounded-full overflow-hidden'>
            <svg className='absolute w-5 h-5 text-color-orange left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2' stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"></path></svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Parallax;
