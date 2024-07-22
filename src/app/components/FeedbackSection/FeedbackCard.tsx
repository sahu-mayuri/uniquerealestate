const Card = (props: any) => {
    return (
        <div id="card-container" className="w-full bg-white rounded-xl group relative ">
            <div id="image-container" className="w-full flex items-start overflow-hidden pt-[1.875rem] pl-[2.188rem] pr-[2.188rem] ">
            <img src="./images/left-quote.svg" className="size-[1.8rem]"></img>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam modi vel inventore, adipisci expedita consequatur voluptas totam provident dicta excepturi incidunt officia cum dolor illo iure similique. Quidem, beatae fugiat?
                </p>
                {/* <p className=""> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam modi vel inventore, adipisci expedita consequatur voluptas totam provident dicta excepturi incidunt officia cum dolor illo iure similique. Quidem, beatae fugiat?</p> */}
            </div>
            <div id="dets-container" className="w-full p-4">
                <div id="icons" className="p-2 flex gap-4 mt-2">
                    <div className="size-[4.688rem] "><img className="size-[3.75rem] rounded-[50%]" src="./images/2.jpg"></img></div>
                    <div id="location" className="">
                        <div className="pt-[0.5rem]">
                            <h1 className="font-bold">Jacob William</h1>
                            <h4 className="font-light text-sm">SELLING AGENT</h4>
                        </div>
                    </div>
                </div>
                <div className="absolute inset-x-0 bottom-0 h-1 bg-color-orange transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 ease-in-out"></div>

            </div>

        </div>
    );
};

export default Card;
