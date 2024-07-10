import Image from "next/image";
import NavBarHead from "./components/NavBarHead";
import Header from "./components/Header";

export default function Home() {
  return (
    <div className='w-full h-[1000px] lg:h-[800px] relative'>
      <div className='w-full h-[1000px] lg:h-[800px] bg-[url("/images/11.jpg")] bg-cover bg-no-repeat bg-center'></div>
      <div className=' absolute top-0 w-full h-[1000px] lg:h-[800px] bg-black opacity-50'></div>
      <div className='absolute top-0 w-full h-[1000px] lg:h-[800px]'>
      <NavBarHead/>
      <hr className="opacity-20"/>
      <Header/>
      </div>
      </div>
  );
}
