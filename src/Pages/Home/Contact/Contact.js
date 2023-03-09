import React from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";

const Contact = () => {
  return (
    <div
      id="contact"
      data-aos="fade-up"
      data-aos-easing="linear"
      data-aos-duration="2000"
      className="mt-24"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 border w-10/12 mx-auto border-green-500 py-2">
        <div className="mt-16">
          <h2 className="text-3xl lg:text-4xl text-all-green font-semibold text-center pt-10">
            Get In Touch
          </h2>

          <p className="text-white text-start w-9/12 mx-auto hidden lg:flex">
            Great genius takes shape by contact with another great genius,
            <span className="flex lg:hidden">
              but, less by assimilation than by friction.
            </span>
          </p>
        </div>
        <div className="  rounded shadow-2xl p-5">
          <form
            action="https://formsubmit.co/ba9318ad6dee827448251bded85926af"
            method="POST"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <AnimationOnScroll animateIn="animate__fadeInUpBig">
                <div className="mb-1 sm:mb-2">
                  <label className="flex justify-start mb-3 font-medium">
                    Name
                  </label>
                  <input
                    placeholder=" Name *"
                    required
                    type="text"
                    className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                    name="name"
                  />
                </div>
              </AnimationOnScroll>

              <AnimationOnScroll animateIn="animate__fadeInDownBig">
                <div className="mb-1 sm:mb-2">
                  <label className="flex justify-start mb-3 font-medium">
                    E-mail
                  </label>
                  <input
                    placeholder="Your Email *"
                    required
                    type="email"
                    className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                    name="email"
                  />
                </div>
              </AnimationOnScroll>
            </div>
            <AnimationOnScroll animateIn="animate__fadeInRightBig">
              <div className="mb-1 sm:mb-2">
                <label className="flex justify-start mb-3 font-medium">
                  Subject
                </label>
                <input
                  placeholder="Subject *"
                  required
                  type="text"
                  className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                  name="subject"
                />
              </div>
            </AnimationOnScroll>
            <div>
              <label className="flex justify-start mb-3 font-medium">
                Message
              </label>
              <textarea
                className="textarea text-black textarea-bordered w-full"
                placeholder=" Message *"
              ></textarea>
            </div>
            <AnimationOnScroll animateIn="animate__fadeInLeftBig">
              <div className="mt-4 mb-2 sm:mb-4">
                <input
                  className="btn btn-primary w-full bg-gradient-to-r from-success to-warning"
                  type="submit"
                  value="Send"
                />
              </div>
            </AnimationOnScroll>
            <p className="text-xs text-center">
              I respect your message. Thank you.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
