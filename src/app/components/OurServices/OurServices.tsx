import FeedbackTopSection from "../FeedbackSection/FeedbackTopSection";
import ServicesCard from "./ServicesCard";


export default function OurServices() {
    return (
        <>
            <div className="bg-gray-100">
                <FeedbackTopSection top="Our Services" bottom="Our Main Focus"></FeedbackTopSection>

                <div className="w-full grid grid-cols-1 lg:grid-cols-3 lg:px-20 gap-2 ">
                    <div className="w-full h-[25.313rem] pr-[0.9rem] pl-[0.9rem]  ">
                        <div id="card1" className="w-full h-[23.4rem] mb-[1.875rem] ">
                            <ServicesCard img="./aminitiesIcons/services1.png" title="But A Home"></ServicesCard>
                        </div>
                    </div>

                    <div className="w-full h-[25.313rem] pr-[0.625rem] pl-[0.625rem]">
                        <div id="card2" className="w-full h-[23.4rem] mb-[1.875rem] ">
                            <ServicesCard img="./aminitiesIcons/services2.png" title="Rent A Home"></ServicesCard>
                        </div>
                    </div>

                    <div className="w-full h-[25.313rem] pr-[0.625rem] pl-[0.625rem]">
                        <div id="card3" className="w-full h-[23.4rem] mb-[1.875rem] ">
                            <ServicesCard img="./aminitiesIcons/services3.png" title="Sell A Home"></ServicesCard>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}