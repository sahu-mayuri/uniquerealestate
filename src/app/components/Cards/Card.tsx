interface CardProps{
    url:string;
    location:string;
    text:string;
    date:string;
}
const Card = (props:CardProps) => {
    return (
      <div id="card-container" className="w-full bg-white">
          <div id="image-container" className="w-full h-[13.5rem] md:h-[18rem] overflow-hidden ">
              <img className=" w-full h-full object-cover hover:scale-110  hover:text-color-orange hover:cursor-pointer transition ease-in-out" src={props.url} alt="" />
          </div>
          <div id="dets-container" className="w-full p-4">
              <div id="icons" className="p-2 flex gap-4 mt-2">
                  <div id="admin" className="flex items-center">
                      <div className="icon">
                          <svg className="text-color-orange text-[0.75rem] me-2" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M313.6 304c-28.7 0-42.5 16-89.6 16-47.1 0-60.8-16-89.6-16C60.2 304 0 364.2 0 438.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-25.6c0-74.2-60.2-134.4-134.4-134.4zM400 464H48v-25.6c0-47.6 38.8-86.4 86.4-86.4 14.6 0 38.3 16 89.6 16 51.7 0 74.9-16 89.6-16 47.6 0 86.4 38.8 86.4 86.4V464zM224 288c79.5 0 144-64.5 144-144S303.5 0 224 0 80 64.5 80 144s64.5 144 144 144zm0-240c52.9 0 96 43.1 96 96s-43.1 96-96 96-96-43.1-96-96 43.1-96 96-96z"></path></svg>
                      </div>
                      <div id="text">
                          <h1 className="font-nunito_SemiBold text-gray-500 text-[75%] md:text-[85%] lg:text-[85%] hover:text-color-orange hover:cursor-pointer">By:Admin</h1>
                      </div>
                  </div>
                  <div id="location" className="flex items-center">
                      <div className="icon">
                          <svg className="text-color-orange text-[0.75rem] me-2" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 640 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M497.941 225.941L286.059 14.059A48 48 0 0 0 252.118 0H48C21.49 0 0 21.49 0 48v204.118a48 48 0 0 0 14.059 33.941l211.882 211.882c18.744 18.745 49.136 18.746 67.882 0l204.118-204.118c18.745-18.745 18.745-49.137 0-67.882zM112 160c-26.51 0-48-21.49-48-48s21.49-48 48-48 48 21.49 48 48-21.49 48-48 48zm513.941 133.823L421.823 497.941c-18.745 18.745-49.137 18.745-67.882 0l-.36-.36L527.64 323.522c16.999-16.999 26.36-39.6 26.36-63.64s-9.362-46.641-26.36-63.64L331.397 0h48.721a48 48 0 0 1 33.941 14.059l211.882 211.882c18.745 18.745 18.745 49.137 0 67.882z"></path></svg>
                      </div>
                      <div id="text">
                          <h1 className="font-nunito_SemiBold text-gray-500 text-[75%] md:text-[85%] lg:text-[85%] hover:text-color-orange hover:cursor-pointer">{props.location}</h1>
                      </div>
                  </div>
              </div>  
              <div id="dets" className="w-full">
                  <h1 className="font-poppins p-2 text-[100%] font-semibold md:text-[115%] lg:text-[115%] lg:font-bold hover:text-color-orange hover:cursor-pointer">{props.text}</h1>
              </div>
              {/* HORIZONTAL LINE!! */}
              <hr className="text-gray-400 my-3 ml-2 w-[94%] self-center" />
              <div id="icons" className="p-2 flex justify-between gap-4">
                  <div id="admin" className="flex gap-2">
                      <div className="icon size-4">
                          <svg className="me-2 text-color-orange" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M148 288h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm108-12v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 96v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm192 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96-260v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h48V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h128V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h48c26.5 0 48 21.5 48 48zm-48 346V160H48v298c0 3.3 2.7 6 6 6h340c3.3 0 6-2.7 6-6z"></path></svg>
                      </div>
                      <div id="text">
                          <h1 className="font-nunito_SemiBold text-gray-500 text-[75%] md:text-[85%] lg:text-[85%]">{props.date}</h1>
                      </div>
                  </div>
                  <div id="location" className="flex">
                      <div id="text">
                          <h1 className="font-nunito_SemiBold text-[75%] md:text-[85%] lg:text-[85%] font-semibold text-color-orange hover:cursor-pointer">READ MORE</h1>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    );
  };
  
  export default Card;
  