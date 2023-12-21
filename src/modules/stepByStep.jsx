import "../assets/css/step-by-step.css";

import { useEffect } from "react";
import { Sidebar } from "../components/sidebar";
import AOS from 'aos';
import 'aos/dist/aos.css';

export const StepByStep = () => {

	useEffect(() => {
        AOS.init();
        AOS.refresh();
        
        const handleScroll = (event) => {
            event.preventDefault();
      
            const horizontalScrollDistance = 400;
            const scrollAmount = event.deltaY > 0 ? horizontalScrollDistance  : -horizontalScrollDistance;
    
            window.scrollBy({
              left: scrollAmount,
              behavior: "smooth",
            });
          };
      
          window.addEventListener("wheel", handleScroll, { passive: false });
      
          return () => {
            window.removeEventListener("wheel", handleScroll);
          };
        }, []);
  
  const Divider = () => (
    <div className="divider md:py-8 p-4">
      <div className="md:border-r-2 md:border-r-white md:h-full border-b-2 border-b-white w-full"></div>
    </div>
  );

  return (
    <>
      <div id="scrollContainer" className="container-steps bg-primary flex md:flex-row flex-col">
      <Sidebar />
        <div className="title-steps flex justify-center items-center bg-primary pt-10 lg:w-1/5 w-full">
          <div className="flex flex-col md:pl-20 md:ml-10 md:pr-72 pr-0 sm:px-auto pt-14 gap-8 justify-center items-center text-white font-playfair">
            <p data-aos="fade-right" data-aos-duration="1000" className="font-neue font-normal lg:text-2xl text-lg">A step<span className="font-playfair">-</span>by<span className="font-playfair">-</span>  step how to make jamu</p>
            <h1 data-aos="fade-up" data-aos-duration="1500" data-aos-delay="300" className="lg:text-9xl text-7xl">BERAS</h1>
            <h1 data-aos="fade-up" data-aos-duration="1500" data-aos-delay="500" className="lg:text-9xl text-7xl lg:pl-64 md:pl-64 -mt-6">KENCUR</h1>
            <p data-aos="fade-left" data-aos-duration="1000" className="font-neue font-bold lg:text-2xl text-lg tracking-wider mt-8">Scroll <span className="ornament"></span></p>
          </div>
        </div>
		    <Divider />
        
        <div className="flex md:flex-row flex-col w-full text-white">
        <div className="jamu-steps mx-auto flex flex-col font-playfair justify-center px-10">
              <h1 data-aos="fade-right" data-aos-duration="1000" className="text-5xl">INGREDIENTS</h1>
              <ol data-aos="fade-up" data-aos-duration="1500" data-aos-delay="300" className="list-decimal mt-8 text-4xl text-left md:px-20">
                <li>hehe</li>
                <li>haha</li>
                <li>hihi</li>
              </ol>
            </div>
            <Divider />
          <div className="jamu-steps mx-auto flex md:flex-row flex-col">
              <div className="flex justify-center items-center lg:text-9xl text-7xl font-playfair">
                <h1 data-aos="fade-down" data-aos-duration="1000" data-aos-delay="300" className="number md:ml-5 md:mr-3 ml-0 mb-5">1</h1>
              </div>
              <div className="flex flex-col px-12 lg:-mt-64 gap-12">
                <img data-aos="fade-down" data-aos-duration="1500" src={require("../assets/img/jamus-1.png")} alt="" className="rounded-xl mb-0" />
                  <p className="font-neue font-normal text-justify lg:text-2xl text-xl lg:mt-16 lg:mb-10 lg:w-3/4 w-full">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente expedita quia animi doloremque? Ducimus, facilis.</p>
              </div>
            </div>
            <Divider />
          <div className="jamu-steps mx-auto flex md:flex-row flex-col">
                <div className="flex justify-center items-center lg:text-9xl text-7xl font-playfair">
                    <h1 data-aos="fade-down" data-aos-duration="1000" data-aos-delay="300" className="number md:ml-5 md:mr-3 ml-0 mb-5">2</h1>
                </div>
              <div className="flex md:flex-col flex-col-reverse px-12 lg:pt-20 pt-5 lg:-mb-16 gap-12">
                  <p className="font-neue font-normal text-justify lg:text-2xl text-xl md:mb-16 md:mt-10 lg:w-3/4 w-full">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente expedita quia animi doloremque? Ducimus, facilis.</p>
                  <img data-aos="fade-up" data-aos-duration="1500" src={require("../assets/img/jamus-1.png")} alt="" className="rounded-xl mb-0" />
              </div>
          </div>
            <Divider />
            <div className="jamu-steps mx-auto flex md:flex-row flex-col">
              <div className="flex justify-center items-center lg:text-9xl text-7xl font-playfair">
                    <h1 data-aos="fade-down" data-aos-duration="1000" data-aos-delay="300" className="number md:ml-5 md:mr-3 ml-0 mb-5">3</h1>
              </div>
              <div className="flex flex-col px-12 lg:-mt-64 gap-12">
                  <img data-aos="fade-down" data-aos-duration="1500" src={require("../assets/img/jamus-1.png")} alt="" className="rounded-xl mb-0" />
                  <p className="font-neue font-normal text-justify lg:text-2xl text-xl lg:mt-16 lg:mb-10 lg:w-3/4 w-full">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente expedita quia animi doloremque? Ducimus, facilis.</p>
              </div>
            </div>
            <Divider />
            <div className="jamu-steps mx-auto flex md:flex-row flex-col">
              <div className="flex justify-center items-center lg:text-9xl text-7xl font-playfair">
                    <h1 data-aos="fade-down" data-aos-duration="1000" data-aos-delay="300" className="number md:ml-5 md:mr-3 ml-0 mb-5">4</h1>
              </div>
              <div className="flex md:flex-col flex-col-reverse px-12 lg:pt-20 pt-5 lg:-mb-16 gap-12">
                  <p className="font-neue font-normal text-justify lg:text-2xl text-xl md:mb-16 md:mt-10 lg:w-3/4 w-full">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente expedita quia animi doloremque? Ducimus, facilis.</p>
                  <img data-aos="fade-up" data-aos-duration="1500" src={require("../assets/img/jamus-1.png")} alt="" className="rounded-xl mb-0" />
              </div>
           </div>
            <Divider />
        </div>
      </div>
    </>
  );
  
};