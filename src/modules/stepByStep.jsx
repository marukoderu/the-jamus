import React, { useEffect } from "react";
import "../assets/css/step-by-step.css";
import { Sidebar } from "../components/sidebar";

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

  const Divider = () => (
    <div className="py-8">
      <div className="border-r-2 border-r-white h-full"></div>
    </div>
  );

  const Step = ({ number, content, imageSrc, marginTop }) => (
    <div className="flex mt-0 px-12">
      <div className={`flex justify-center items-center text-8xl font-playfair`}>
        <h1>{number}</h1>
      </div>
      <div className="jamu-types text-primary">
        <div className={`flex flex-col px-12 ${marginTop ? `${marginTop}` : ""} gap-12 mx-auto`}>
          <img src={imageSrc} alt="" className={`rounded-xl w-3/4 mx-auto mb-0 ${number % 2 === 0 ? 'order-1' : ''}`}	 />
          <p className="font-neue font-normal text-xl my-32 w-3/4 text-white mx-auto">{content}</p>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <div id="scrollContainer" className="main_container">
        <Sidebar />
        <div className="title-step flex bg-primary py-10 ml-20">
          <div className="flex flex-col pl-20 pr-72 gap-8 justify-center text-white font-playfair border-r-white border-r-2">
            <p className="font-neue font-normal text-lg">A step-by-step how to make jamu</p>
            <h1 className="text-9xl">BERAS</h1>
            <h1 className="text-9xl md:ml-40 -mt-6">KENCUR</h1>
            <p className="font-neue font-bold tracking-wider relative mt-8">Scroll <span className="ornament"></span></p>
          </div>
        </div>

        <div className="flex bg-primary text-white font-neue">
          <Step number={1} content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente expedita quia animi doloremque? Ducimus, facilis." imageSrc={require("../assets/img/jamus-1.png")} marginTop={'-mt-32'} />
          <Divider />

          <Step number={2} content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente expedita quia animi doloremque? Ducimus, facilis." imageSrc={require("../assets/img/jamus-1.png")} marginTop={'pt-28'} />
          <Divider />

          <Step number={3} content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente expedita quia animi doloremque? Ducimus, facilis." imageSrc={require("../assets/img/jamus-1.png")} marginTop={'-mt-32'} />
          <Divider />
        </div>
      </div>
    </>
  );
};
