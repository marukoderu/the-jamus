import "../assets/css/jamu-types.css";

import { useEffect } from "react";
import { Sidebar } from "../components/sidebar";
import { a } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

export const JamuTypes = () => {
  
  useEffect(() => {
    AOS.init();

    const handleScroll = (event) => {
      event.preventDefault();

      const horizontalScrollDistance = 400;
      const scrollAmount = event.deltaY > 0 ? horizontalScrollDistance : -horizontalScrollDistance;

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
      <div className="md:border-r-2 md:border-r-primary md:h-full border-b-2 border-b-primary w-full"></div>
    </div>
  );

  return (
    <>
      <div id="scrollContainer" className="container-types flex md:flex-row flex-col w-full">
        <Sidebar />
        <div className="types-title font-playfair text-primary py-1 flex flex-nowrap md:ml-32 ml- md:pt-20">
          <h1 className="xl:text-6xl 2xl:text-7xl text-9xl pr-3 pl-4 text-center font-medium">DIVE INTO JAMU</h1>
        </div>
        <Divider />
        <div className="flex md:flex-row flex-col">
          {/* Jenis Jamu: Beras Kencur */}
          <a href={`/jamu/beras-kencur`} className="jamu-types text-primary">
            <div className="flex md:flex-col flex-col-reverse px-10 md:pt-12 pt-5 md:-mb-16 2xl:gap-12 xl:gap-4 gap-2">
              <h1 data-aos="fade-down" data-aos-duration="1500" className="font-playfair text-5xl font-medium">BERAS<br /> KENCUR</h1>
              <p className="font-neue font-normal text-justify 2xl:text-xl xl:text-base text-xl mb-10 mt-10 lg:w-3/4 w-full">
                Menyegarkan dan memberikan energi dengan kombinasi unik beras dan kencur.
              </p>
              <img data-aos="fade-up" data-aos-duration="1500" src={require("../assets/img/beras-kencur.png")} alt="" className="rounded-xl mb-0 2xl:min-w-[300px] xl:max-w-[350px] max-w-[500px]" />
            </div>
          </a>
          <Divider />

          {/* Jenis Jamu: Kunyit Asam */}
          <a href={`/jamu/jamu-kunyit`} className="jamu-types text-primary">
            <div className="flex flex-col px-10 md:-mt-20 2xl:gap-12 xl:gap-4">
              <img data-aos="fade-down" data-aos-duration="1500" src={require("../assets/img/ka-5.png")} alt="" className="rounded-xl mb-0 2xl:min-w-[300px] xl:max-w-[350px] max-w-[500px]" />
              <p className="font-neue font-normal text-justify 2xl:text-xl xl:text-base text-xl md:mt-10 2xl:mb-8 xl:mb-3 lg:w-3/4 w-full">
                Kombinasi kunyit dan asam membawa manfaat antioksidan dan meningkatkan pencernaan.
              </p>
              <h1 data-aos="fade-up" data-aos-duration="1500" className="font-playfair text-5xl font-medium">KUNYIT<br /> ASAM</h1>
            </div>
          </a>
          <Divider />

          {/* Jenis Jamu: Temulawak */}
          <a href={`/jamu/jamu-temulawak`} className="jamu-types text-primary">
            <div className="flex md:flex-col flex-col-reverse px-10 md:pt-16 pt-5 md:-mb-16 2xl:gap-12 xl:gap-2">
              <h1 data-aos="fade-down" data-aos-duration="1500" className="font-playfair text-5xl font-medium">TEMULAWAK</h1>
              <p className="font-neue font-normal text-justify 2xl:text-xl xl:text-base text-xl mb-10 mt-10 lg:w-3/4 w-full">
                Rasakan manfaat temulawak dengan khasiatnya untuk kesehatan pencernaan dan imunitas.
              </p>
              <img data-aos="fade-up" data-aos-duration="1500" src={require("../assets/img/te-5.png")} alt="" className="rounded-xl mb-0 2xl:min-w-[300px] xl:max-w-[350px] max-w-[500px]" />
            </div>
          </a>
          <Divider />

          {/* Jenis Jamu: Brotowali */}
          <a href={`/jamu/jamu-brotowali`} className="jamu-types text-primary">
            <div className="flex flex-col px-10 md:-mt-20 2xl:gap-12 xl:gap-4">
              <img data-aos="fade-down" data-aos-duration="1500" src={require("../assets/img/brontowali.png")} alt="" className="rounded-xl mb-0 2xl:min-w-[300px] xl:max-w-[350px] max-w-[500px]" />
              <p className="font-neue font-normal text-justify 2xl:text-xl xl:text-base text-xl md:mt-10 2xl:mb-8 xl:mb-3 lg:w-3/4 w-full">
                Rasakan manfaat brotowali untuk kesehatan ginjal dan menjaga keseimbangan tubuh.
              </p>
              <h1 data-aos="fade-up" data-aos-duration="1500" className="font-playfair text-5xl font-medium">BROTOWALI</h1>
            </div>
          </a>
          <Divider />

          {/* Jenis Jamu: Empon-Empon */}
          <a href={`/jamu/jamu-empon`} className="jamu-types text-primary">
            <div className="flex md:flex-col flex-col-reverse px-10 md:pt-20 pt-5 md:-mb-16 gap-12">
              <h1 data-aos="fade-down" data-aos-duration="1500" className="font-playfair text-5xl font-medium">EMPON-EMPON</h1>
              <p className="font-neue font-normal text-justify 2xl:text-xl xl:text-base text-xl mb-10 mt-10 lg:w-3/4 w-full">
                Kombinasi rempah-rempah tradisional untuk memberikan kehangatan dan kesejahteraan.
              </p>
              <img data-aos="fade-up" data-aos-duration="1500" src={require("../assets/img/mp-4.png")} alt="" className="rounded-xl mb-0 2xl:min-w-[300px] xl:max-w-[350px] max-w-[500px]" />
            </div>
          </a>
          <Divider />
        </div>
      </div>
    </>
  );
};
