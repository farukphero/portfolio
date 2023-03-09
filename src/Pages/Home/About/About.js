import React from "react";
import AnimatedText from "react-animated-text-content";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { AiFillGithub } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";
import { Fade } from "react-reveal";
import { TypeAnimation } from "react-type-animation";
import image from "../../../images/1670691376056.jpeg";

const About = () => {
  return (
    <section 
    data-aos="fade-up"
    data-aos-easing="linear"
    data-aos-duration="2000" className="lg:mt-28 mb-20" id="about">
      <div className="mx-auto max-w-xl md:max-w-full lg:max-w-screen-xl  lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="lg:pr-10 px-4">
            <p href="/" aria-label="Go Home" className="inline-block mb-5">
              <div className="flex">
                <div className="flex items-center justify-center w-12 h-12 rounded-full mr-3">
                  <svg
                    className="w-10 h-10 "
                    stroke="currentColor"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    />
                  </svg>
                </div>
                <p className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white to-indigo-400">
                  About me
                </p>
              </div>
            </p>
            <h5 className="mb-4 text-4xl md:text-5xl font-semibold">
              <AnimatedText
                type="bounce" // animate words or chars
                animation={{
                  x: "-10px",
                  y: "-200px",
                  scale: 1.1,
                  ease: "ease-in-out",
                }}
                animationType="string"
                interval={0.06}
                duration={0.8}
                tag="p"
                // className="animated-paragraph"
                includeWhiteSpaces
                threshold={0.1}
                rootMargin="20%"
              >
                Md. Omar Faruk, a
              </AnimatedText>

              <TypeAnimation
                className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-orange-600"
                sequence={[
                  "mern web developer.", // Types 'One'
                  2000, // Waits 1s
                  "react developer.", // Deletes 'One' and types 'Two'
                  2000, // Waits 2s
                  "javaScript developer.",
                  2000, // Types 'Three' without deleting 'Two'
                  () => {
                     // Place optional callbacks anywhere in the array
                  },
                ]}
                wrapper="div"
                cursor={true}
                repeat={Infinity}
                style={{ fontSize: "1em" }}
              />
            </h5>
            <div>
              <AnimationOnScroll animateIn="animate__fadeInLeftBig">
                <p className="mb-6text-black lg:text-white text-lg ">
                  I am a full-stack web developer. I am passionate about
                  full-stack web development and use technologies of web
                  development such as (HTML, CSS, Bootstrap, TailwindCSS,
                  JavaScript, React, Express JS, Node JS, Firebase, MongoDB,
                  Stripe, and SSLCommerz). Recently my team and I made
                  FITLESSIAN where I was the <span   className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400 font-bold">team leader</span> and my team took the
                  top place. And I also maintained a scrum as a <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400 font-bold">scrum leader</span> for 2 month.
                </p>
              </AnimationOnScroll>
            </div>

            <hr className="mb-5 border-black mt-2 lg:border-gray-300" />
            <div className="flex items-center space-x-4">
              <a
                href="https://github.com/farukphero"
                className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
              >
                <AiFillGithub className="h-9 w-9 text-white" />
              </a>
              <a
                href="https://www.linkedin.com/in/omarfaruk-238764240/"
                className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
              >
                <BsLinkedin className="h-9 w-9 text-white" />
              </a>
            </div>
          </div>
          <div>
            <Fade right>
              <img className="object-cover w-full rounded" src={image} alt="" />
            </Fade>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
