import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import AOS from "aos";
import { Link } from "react-router-dom";
import { AnimationOnScroll } from "react-animation-on-scroll";

AOS.init();

// You can also pass an optional settings object
// below listed default settings
AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
  initClassName: "aos-init", // class applied after initialization
  animatedClassName: "aos-animate", // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: "ease", // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
});

const Project = ({ project }) => {
  const { _id, picture, name, about } = project;
  return (
    <div className="w-11/12 mx-auto bg-gradient-to-r from-success to-warning rounded p-7 hover:bg-gradient-to-r hover:from-warning hover:to-success">
      <div
        data-aos="flip-up"
        className="flex items-center justify-center mb-4  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
      >
        <PhotoProvider>
          <PhotoView src={picture}>
            <img className="h-64 w-full rounded" src={picture} alt="" />
          </PhotoView>
        </PhotoProvider>
      </div>
      <h6 className="mb-3 text-xl font-bold leading-5">{name}</h6>
      <AnimationOnScroll animateIn="animate__fadeInRightBig">
        <p className="mb-3">{about}</p>
      </AnimationOnScroll>

      <div className="flex justify-end">
        <AnimationOnScroll animateIn="animate__fadeInUpBig">
          <Link
            to={`/projectsDetails/${_id}`}
            aria-label=""
            className="text-lg bg-gradient-to-r from-success to-warning py-3 px-5 rounded-full"
          >
            Learn more
          </Link>
        </AnimationOnScroll>
      </div>
    </div>
  );
};

export default Project;
