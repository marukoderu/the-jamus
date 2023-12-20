import "../assets/css/step-by-step.css";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
import { Sidebar } from "../components/sidebar";

gsap.registerPlugin(ScrollTrigger);

export const StepByStep = () => {

	useEffect(() => {
		const verticalScrollDistance = 300; // Typical vertical scroll distance
		const horizontalScrollDistance = verticalScrollDistance; // Adjust to match vertical scroll speed
	
		const handleScroll = (event) => {
		  event.preventDefault();
		  if (event.deltaY !== 0) {
			const scrollAmount =
			  event.deltaY > 0
				? horizontalScrollDistance
				: -horizontalScrollDistance;
			window.scrollBy({
			  left: scrollAmount,
			  behavior: "smooth", // Add smooth scrolling if desired
			});
		  }
		};
	
		window.addEventListener("wheel", handleScroll, { passive: false });
	
		return () => {
		  window.removeEventListener("wheel", handleScroll);
		};
	  }, []);

    useEffect(() => {

      ScrollTrigger.defaults({
        scroller: "body"
      });
  
      gsap.fromTo(
        [".title-step h1", ".title-step p"],
        {
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 5,
          ease: 'power2.out',
        }
      );

      let tlo = gsap.timeline({
        scrollTrigger: {
          trigger: ".img-step-odd",
          start: "70% 80%",
          end: () => "+=" + document.querySelector(".img-step-odd").offsetWidth,
          toggleActions: "restart pause resume none",
        },
      });
    
      tlo.to(".img-step-odd", {
        y: -170,
        duration: 3,
      });

      tlo.to(
        ".text-odd",
        {
          y: 250,
          duration: 3,
        },
        0
      );

      let tle = gsap.timeline({
        scrollTrigger: {
          trigger: ".img-step-even",
          start: "70% 80%",
          end: () => "+=" + document.querySelector(".img-step-even").offsetWidth,
          toggleActions: "restart pause resume none",
        },
      });

      tle.to(".img-step-even", {
        y: 380,
        duration: 3,
      });

      tle.to(
        ".text-even",
        {
          y: -100,
          duration: 3,
        },
        0
      );

      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".number",
          start: "70% 80%",
          end: () => "+=" + document.querySelector(".number").offsetWidth,
          toggleActions: "restart pause resume none",
        },
      });

      tl.to(".number", {
        y: -100,
        duration: 5,
      });
    }, []);
  
  
  const Divider = () => (
    <div className="divider lg:py-8 p-8">
      <div className="lg:border-r-2 lg:border-r-white lg:h-full border-b-2 border-b-white w-full"></div>
    </div>
  );

  const Step = ({ number, content, imageSrc, text, image, margin, marginTop }) => (
    <div className="flex lg:flex-row flex-col lg:mt-0 relative">
      <div className={`flex justify-center items-center lg:text-9xl text-7xl lg:ml-24 my-5 font-playfair`}>
        <h1 className="number">{number}</h1>
      </div>
      <div className={`jamu-types flex ${margin ? `${margin}` : ""} text-primary relative z-10`}>
        <div className={`flex flex-col ${marginTop ? `${marginTop}` : ""} justify-center items-center lg:relative z-10`}>
          <img src={imageSrc} alt="" className={`${image ? `${image}` : ""} rounded-xl w-3/4 lg:mb-0 mb-5 ${number % 2 === 0 ? 'order-1' : ''} z-20`} />
          <p className={`font-neue ${text ? `${text}` : ""} lg:relative tracking-widest font-light text-justify lg:text-2xl md:text-3xl text-xl lg:w-3/4 lg:my-auto my-15 w-full px-10 text-white z-10 sm:translate-y-0`}>{content}</p>
        </div>
      </div>
    </div>
  );
  

  return (
    <>
      <div id="scrollContainer" className="container-steps bg-primary">
        <Sidebar />
        <div className="title-step flex bg-primary py-10">
          <div className="flex flex-col lg:pl-20 pl-10 pr-72 gap-8 justify-center text-white font-playfair border-r-white border-r-2">
            <p className="font-neue font-normal lg:text-2xl text-lg">A step-by-step how to make jamu</p>
            <h1 className="lg:text-9xl text-7xl">BERAS</h1>
            <h1 className="lg:text-9xl text-7xl lg:ml-40 -mt-6">KENCUR</h1>
            <p className="font-neue font-bold lg:text-2xl md:text-3xl text-lg tracking-wider relative mt-8">Scroll <span className="ornament"></span></p>
          </div>
        </div>

        <div className="flex xl:flex-row flex-col bg-primary text-white font-neue">
          <Step number={1} content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente expedita quia animi doloremque? Ducimus, facilis." imageSrc={require("../assets/img/jamus-1.png")} image={'img-step-odd'} text={'text-odd lg:translate-y-[-200%] lg:-mt-60'} />
          <Divider />
          <Step number={2} content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente expedita quia animi doloremque? Ducimus, facilis." imageSrc={require("../assets/img/jamus-1.png")} marginTop={'lg:-mb-20'} image={'img-step-even'} text={'text-even lg:-mb-60'} />
          <Divider />
          <Step number={3} content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente expedita quia animi doloremque? Ducimus, facilis." imageSrc={require("../assets/img/jamus-1.png")} image={'img-step-odd'} text={'text-odd lg:translate-y-[-200%] lg:-mt-60'}/>
          <Divider />
        </div>
      </div>
    </>
  );
  
};