import React, { useState } from "react";

const Card = (props: any) => {
    const [isHovered, setIsHovered] = useState(false);
    const [animationDirection, setAnimationDirection] = useState<"left-to-right" | "right-to-left">("left-to-right");

    const handleMouseEnter = () => {
        setIsHovered(true);
        setAnimationDirection("left-to-right");
    };

    const handleMouseLeave = () => {
        setAnimationDirection("right-to-left");
        setTimeout(() => {
            setIsHovered(false);
        }, 300); // Adjust this timeout to match your CSS animation duration
    };

    return (
        <div id="card-container" className="w-full bg-white rounded-xl group relative pt-[1.875rem] px-[2.187rem] pb-[2.5rem]"

            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div id="image-container" className="w-full flex items-start overflow-hidden relative">
                <div className="absolute">
                    {/* <svg fill={isHovered ? "#FF5733" : "#5c727d"} height="28px" width="28px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="-1.92 -1.92 67.84 67.84" enableBackground="new 0 0 64 64" xmlSpace="preserve" stroke={isHovered ? "#FF5733" : "#5c727d"} strokeWidth="1.5"><g id="SVGRepo_bgCarrier" strokeWidth={0} /><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" stroke="#CCCCCC" strokeWidth="1.28" /><g id="SVGRepo_iconCarrier"> <g id="Quotemarks-left"> <path d="M50.6292648,26.225668c-0.1288986-1.3934994-0.0303001-5.1816006,3.5985985-10.4492006 c0.2745018-0.3975,0.2247009-0.9335995-0.1161957-1.2743998c-1.4795036-1.4794998-2.395504-2.4131002-3.0379982-3.0663996 c-0.8448029-0.8614006-1.2305031-1.2539005-1.795002-1.7657003c-0.3769035-0.3388004-0.9472008-0.3446999-1.3281021-0.0125999 c-6.3251991,5.5038996-13.3505974,16.8768997-12.3339958,30.8105011 c0.5956955,8.1815987,6.5634956,14.1200981,14.1894951,14.1200981c7.8260994,0,14.1932983-6.3661995,14.1932983-14.1923981 C63.9993629,32.845768,58.0736694,26.6543674,50.6292648,26.225668z M49.8060646,52.5879669 c-6.5489006,0-11.6767998-5.1581993-12.1953011-12.2645988c0,0,0,0,0-0.0009995 c-1.1435966-15.6709003,8.1718025-25.8496017,10.9863014-28.5449009c0.2743988,0.2705002,0.5878983,0.5887995,1.0498009,1.0594997 c0.5565987,0.5664005,1.3183975,1.3417997,2.4706993,2.4981003c-4.4053001,6.7870998-3.5741997,11.6229992-3.2099991,12.3164005 c0.1728973,0.3290997,0.5273972,0.5508003,0.8984985,0.5508003c6.7236023,0,12.1932983,5.469698,12.1932983,12.1933002 C61.9993629,47.1182671,56.5296669,52.5879669,49.8060646,52.5879669z" /> <path d="M15.1136675,26.225668c-0.1299-1.3896008-0.0341997-5.1748009,3.5985994-10.4492006 c0.2735004-0.3975,0.2245998-0.9335995-0.1161995-1.2743998c-1.4766006-1.4765997-2.3915997-2.4091997-3.0332003-3.0625 c-0.8476-0.8633003-1.2343998-1.2568998-1.7987995-1.7695999c-0.3769999-0.3388004-0.9473-0.3437004-1.3281002-0.0136003 c-6.3251996,5.5039005-13.3515997,16.875-12.3369999,30.8115005v0.0009995 c0.5977,8.1805992,6.5664001,14.1190987,14.1924,14.1190987c7.8261995,0,14.1934004-6.3661995,14.1934004-14.1923981 C28.4847679,32.8448677,22.5589676,26.6524677,15.1136675,26.225668z M14.2913675,52.5879669 c-6.5478001,0-11.6786995-5.1581993-12.1982002-12.2655983v0.0009995 c-1.1406-15.6748009,8.1747999-25.8516006,10.9892006-28.5459003c0.2754002,0.2705002,0.5899,0.5908003,1.0528002,1.0625 c0.5555992,0.5663996,1.3163996,1.3408003,2.4667988,2.4951c-4.4052992,6.7880993-3.5741997,11.6229992-3.2099991,12.3153992 c0.1729002,0.3291016,0.5283003,0.5518017,0.8993998,0.5518017c6.7237005,0,12.1934004,5.469698,12.1934004,12.1933002 C26.4847679,47.1182671,21.0150681,52.5879669,14.2913675,52.5879669z" /> </g> </g></svg> */}
                    <svg fill={isHovered ? "#FF5733" : "#5c727d"} height="28px" width="28px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="-1.92 -1.92 67.84 67.84" enableBackground="new 0 0 64 64" xmlSpace="preserve" stroke={isHovered ? "#FF5733" : "#5c727d"} strokeWidth="2"><g id="SVGRepo_bgCarrier" strokeWidth={0} /><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" stroke="#CCCCCC" strokeWidth="1.28" /><g id="SVGRepo_iconCarrier"> <g id="Quotemarks-left"> <path d="M50.6292648,26.225668c-0.1288986-1.3934994-0.0303001-5.1816006,3.5985985-10.4492006 c0.2745018-0.3975,0.2247009-0.9335995-0.1161957-1.2743998c-1.4795036-1.4794998-2.395504-2.4131002-3.0379982-3.0663996 c-0.8448029-0.8614006-1.2305031-1.2539005-1.795002-1.7657003c-0.3769035-0.3388004-0.9472008-0.3446999-1.3281021-0.0125999 c-6.3251991,5.5038996-13.3505974,16.8768997-12.3339958,30.8105011 c0.5956955,8.1815987,6.5634956,14.1200981,14.1894951,14.1200981c7.8260994,0,14.1932983-6.3661995,14.1932983-14.1923981 C63.9993629,32.845768,58.0736694,26.6543674,50.6292648,26.225668z M49.8060646,52.5879669 c-6.5489006,0-11.6767998-5.1581993-12.1953011-12.2645988c0,0,0,0,0-0.0009995 c-1.1435966-15.6709003,8.1718025-25.8496017,10.9863014-28.5449009c0.2743988,0.2705002,0.5878983,0.5887995,1.0498009,1.0594997 c0.5565987,0.5664005,1.3183975,1.3417997,2.4706993,2.4981003c-4.4053001,6.7870998-3.5741997,11.6229992-3.2099991,12.3164005 c0.1728973,0.3290997,0.5273972,0.5508003,0.8984985,0.5508003c6.7236023,0,12.1932983,5.469698,12.1932983,12.1933002 C61.9993629,47.1182671,56.5296669,52.5879669,49.8060646,52.5879669z" /> <path d="M15.1136675,26.225668c-0.1299-1.3896008-0.0341997-5.1748009,3.5985994-10.4492006 c0.2735004-0.3975,0.2245998-0.9335995-0.1161995-1.2743998c-1.4766006-1.4765997-2.3915997-2.4091997-3.0332003-3.0625 c-0.8476-0.8633003-1.2343998-1.2568998-1.7987995-1.7695999c-0.3769999-0.3388004-0.9473-0.3437004-1.3281002-0.0136003 c-6.3251996,5.5039005-13.3515997,16.875-12.3369999,30.8115005v0.0009995 c0.5977,8.1805992,6.5664001,14.1190987,14.1924,14.1190987c7.8261995,0,14.1934004-6.3661995,14.1934004-14.1923981 C28.4847679,32.8448677,22.5589676,26.6524677,15.1136675,26.225668z M14.2913675,52.5879669 c-6.5478001,0-11.6786995-5.1581993-12.1982002-12.2655983v0.0009995 c-1.1406-15.6748009,8.1747999-25.8516006,10.9892006-28.5459003c0.2754002,0.2705002,0.5899,0.5908003,1.0528002,1.0625 c0.5555992,0.5663996,1.3163996,1.3408003,2.4667988,2.4951c-4.4052992,6.7880993-3.5741997,11.6229992-3.2099991,12.3153992 c0.1729002,0.3291016,0.5283003,0.5518017,0.8993998,0.5518017c6.7237005,0,12.1934004,5.469698,12.1934004,12.1933002 C26.4847679,47.1182671,21.0150681,52.5879669,14.2913675,52.5879669z" /> </g> </g></svg>

                </div>
                <p className="indent-9 leading-8 text-base text-[#5C727D] mb-[1.68rem] ">{props.feedback}</p>
            </div>

            <div id="icons" className="h-[3.75rem] flex gap-4">
                <div className="size-[3.75rem] "> <img className="size-[3.75rem] rounded-[50%]" src={props.image}></img></div>
                <div id="location" className="">
                    <div className="pt-[0.5rem]">
                        <h1 className="font-poppins font-medium">{props.name}</h1>
                        <h4 className="font-nunito_ExtraBold text-sm text-[#5C727D]">{props.role}</h4>
                    </div>
                </div>
            </div>

            {isHovered && (
                <div
                    className={`underline-animation bg-color-orange h-[2px] lg:h-[4px] absolute bottom-0 left-0 ${animationDirection === "left-to-right" ? "animate-left-to-right" : "animate-right-to-left"
                        }`}
                ></div>
            )}
        </div>
    );
};

export default Card;

{/* <img className="size-[3.75rem] rounded-[50%]" src="./images/2.jpg"></img> */}