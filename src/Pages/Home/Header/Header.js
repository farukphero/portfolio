import React from "react";
import TextAnimation from "react-text-animations";
import pdf from "../../../images/resume.pdf";

const Header = () => {
  return (
    <div id="header"
    
    data-aos="fade-up"
    data-aos-easing="linear"
    data-aos-duration="2000" className="relative lg:h-[600px] flex justify-center items-center ">
      <div className="relative">
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="relative">
            <div className="text-[40px] lg:text-9xl mb-12 lg:mb-0 lg:h-52 text-center text-base-200">
              {/* <h1 animate-bounce animation-delay-3000'></h1> */}
              {/* <TextAnim
              name=""
              type="bounceone"
              count="infinite"
              duration={7}
            /> */}
              <TextAnimation.Slide
                animation={{
                  duration: 2000,
                  delay: 3000,
                  timingFunction: "ease-out",
                }}
                target="create a modern"
                text={["Let's create a modern", "innovative  website."]}
              >
                create a modern
              </TextAnimation.Slide>
            </div>
            <a
              href={pdf}
              aria-label="Scroll down"
              className="flex items-center justify-center w-4 h-4 mx-auto text-white duration-300 transform border border-gray-400 rounded-full hover:text-teal-accent-400 hover:border-teal-accent-400 hover:shadow hover:scale-110 animate-ping"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="6"
                height="6"
                viewBox="0 0 12 12"
                fill="currentColor"
              >
                <path d="M10.293,3.293,6,7.586,1.707,3.293A1,1,0,0,0,.293,4.707l5,5a1,1,0,0,0,1.414,0l5-5a1,1,0,1,0-1.414-1.414Z" />
              </svg>
            </a>
            <a
              className="flex items-center justify-center w-40 mt-3 mx-auto text-white"
              href={pdf}
            >
              <button className="btn bg-gradient-to-r from-success to-warning">
                
                See Resume
              </button>
            </a>
          </div>
        </div>
      </div>
      {/* <img
        className="absolute left-5 top-75 h-20 w-32 origin-top-left rotate-12"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTd0YgZ9_o3mnIY4O3DLfdyQhm_1Uhn5mHWlckjCTUQtjUuGU_t7W_yLh3wcRkYFYGj6o&usqp=CAU"
        alt=""
      /> */}
    </div>
  );
};

export default Header;
