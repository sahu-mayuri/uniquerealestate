import React from 'react'
interface TabsProps{
    text:string;
}

const Tabs = (props:TabsProps) => {
  return (
    <div className=''>
      <button className='px-2 py-4 font-nunito_Medium text-[1.3rem]'>{props.text}</button>
      
    </div>
  )
}

export default Tabs
