import Image from "next/image";
import NavBarHead from "./components/Header/NavBarHead";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import TopFooter from "./components/Footer/TopFooter";
import FeedSection from "./components/FeedSection/FeedSection";
import BuildingAminities from "./components/AminitiesSection/BuildingAminities";
import PropertySearchBox from "./components/Header/PropertySearchBox";
import ButtonDropdown from "./components/Header/LocationButtonDropdown";

export default function Home() {
  return (
    <div className="bg-light-white">

      <div className="w-full h-[1000px] lg:h-[800px] relative">
        <div className='w-full h-[1000px] lg:h-[800px] bg-[url("/images/11.jpg")] bg-cover bg-no-repeat bg-center'></div>
        <div className=" absolute top-0 w-full h-[1000px] lg:h-[800px] bg-black opacity-50"></div>
        <div className="absolute top-0 w-full h-[1000px] lg:h-[800px]">
          <NavBarHead />
          <hr className="opacity-20" />
          <Header />
          <PropertySearchBox/>
        </div>
      </div>
      
      <BuildingAminities></BuildingAminities>
      <FeedSection ></FeedSection>
      <TopFooter></TopFooter>
      <Footer></Footer>

    </div>
  );
}
