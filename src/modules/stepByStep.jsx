import "../assets/css/step-by-step.css";

import { useEffect } from "react";
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
	});
  
  const Divider = () => (
    <div className="divider lg:py-8 p-4">
      <div className="lg:border-r-2 lg:border-r-white lg:h-full border-b-2 border-b-white w-full"></div>
    </div>
  );

  return (
    <>
      <div id="scrollContainer" className="container-steps bg-primary">
        <Sidebar />
        <div className="flex justify-center items-center bg-primary pt-10">
          <div className="flex flex-col lg:pl-20 lg:ml-10 md:pr-72 pr-0 sm:px-auto pt-14 gap-8 justify-center items-center text-white font-playfair">
            <p className="font-neue font-normal lg:text-2xl text-lg">A step-by-step how to make jamu</p>
            <h1 className="lg:text-9xl text-7xl">BERAS</h1>
            <h1 className="lg:text-9xl text-7xl lg:pl-64 md:pl-64 -mt-6">KENCUR</h1>
            <p className="font-neue font-bold lg:text-2xl text-lg tracking-wider mt-8">Scroll <span className="ornament"></span></p>
          </div>
        </div>
		<Divider />
          <div className="flex lg:flex-row flex-col lg:mt-0 bg-primary text-white font-neue">
            <div className="flex justify-center items-center lg:text-9xl text-7xl lg:ml-24 my-5 font-playfair">
              <h1 className="number">1</h1>
            </div>
            <div className="jamu-types flex text-primary">
              <div className="flex flex-col justify-center items-center">
                <img src={require("../assets/img/jamus-1.png")} alt="" className="img-step-odd rounded-xl w-3/4 lg:mb-0 mb-5 order-1" />
                <p className="font-neue text-odd lg:translate-y-[-200%] lg:-mt-60 lg tracking-widest font-light text-justify lg:text-2xl md:text-3xl text-xl lg:w-3/4 lg:my-auto my-15 px-10 text-white sm:translate-y-0">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente expedita quia animi doloremque? Ducimus, facilis.</p>
              </div>
            </div>
			</div>
          <Divider />
            <div className="flex lg:flex-row flex-col lg:mt-0 bg-primary text-white font-neue">
              <div className="flex justify-center items-center lg:text-9xl text-7xl lg:ml-24 my-5 font-playfair">
                <h1 className="number">2</h1>
              </div>
              <div className="jamu-types flex text-primary">
                <div className="flex flex-col lg:-mb-20 justify-center items-center">
                  <img src={require("../assets/img/jamus-1.png")} alt="" className="img-step-even rounded-xl w-3/4 lg:mb-0 mb-5" />
				  <p className="font-neue text-odd lg:translate-y-[-200%] lg:-mt-60 lg tracking-widest font-light text-justify lg:text-2xl md:text-3xl text-xl lg:w-3/4 lg:my-auto my-15 p-10 text-white sm:translate-y-0">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente expedita quia animi doloremque? Ducimus, facilis.</p>
				</div>
              </div>
            </div>
          <Divider />
          <div className="flex lg:flex-row flex-col lg:mt-0 bg-primary text-white font-neue">
            <div className="flex justify-center items-center lg:text-9xl text-7xl lg:ml-24 my-5 font-playfair">
              <h1 className="number">3</h1>
            </div>
            <div className="jamu-types flex text-primary">
              <div className="flex flex-col justify-center items-center">
                <img src={require("../assets/img/jamus-1.png")} alt="" className="img-step-odd rounded-xl w-3/4 lg:mb-0 mb-5 order-1" />
                <p className="font-neue text-odd lg:translate-y-[-200%] lg:-mt-60 lg tracking-widest font-light text-justify lg:text-2xl md:text-3xl text-xl lg:w-3/4 lg:my-auto my-15 px-10 text-white sm:translate-y-0">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente expedita quia animi doloremque? Ducimus, facilis.</p>
              </div>
            </div>
			</div>
          <Divider />
        </div>
    </>
  );
  
};