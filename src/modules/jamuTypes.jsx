import "../assets/css/jamu-types.css";

import { useEffect } from "react";
import { Sidebar } from "../components/sidebar";
import { Link } from 'react-router-dom';
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
          <h1 className="text-9xl pr-3 pl-4 text-center font-medium">DIVE INTO JAMU</h1>
        </div>
        <Divider />
        <div className="flex md:flex-row flex-col w-fit">
          {/* Jenis Jamu: Beras Kencur */}
          <Link to={`/jamu/beras-kencur/recipe`} className="jamu-types text-primary">
            <div className="flex md:flex-col flex-col-reverse px-12 md:pt-20 pt-5 md:-mb-16 gap-12">
              <h1 data-aos="fade-down" data-aos-duration="1500" className="font-playfair text-6xl font-medium">BERAS<br /> KENCUR</h1>
              <p className="font-neue font-normal text-justify md:text-2xl text-xl mb-16 mt-10 lg:w-3/4 w-full">
                Menyegarkan dan memberikan energi dengan kombinasi unik beras dan kencur.
              </p>
              <img data-aos="fade-up" data-aos-duration="1500" src={require("../assets/img/jamus-1.png")} alt="" className="rounded-xl mb-0" />
            </div>
          </Link>
          <Divider />

          {/* Jenis Jamu: Kunyit Asam */}
          <Link to={`/jamu/kunyit-asam/recipe`} className="jamu-types text-primary">
            <div className="flex flex-col px-12 md:-mt-64 gap-12">
              <img data-aos="fade-down" data-aos-duration="1500" src={require("../assets/img/jamus-1.png")} alt="" className="rounded-xl mb-0" />
              <p className="font-neue font-normal text-justify md:text-2xl text-xl md:mt-16 md:mb-10 lg:w-3/4 w-full">
                Kombinasi kunyit dan asam membawa manfaat antioksidan dan meningkatkan pencernaan.
              </p>
              <h1 data-aos="fade-up" data-aos-duration="1500" className="font-playfair text-6xl font-medium">KUNYIT<br /> ASAM</h1>
            </div>
          </Link>
          <Divider />

          {/* Jenis Jamu: Temulawak */}
          <Link to={`/jamu/temulawak/recipe`} className="jamu-types text-primary">
            <div className="flex md:flex-col flex-col-reverse px-12 md:pt-20 pt-5 md:-mb-16 gap-12">
              <h1 data-aos="fade-down" data-aos-duration="1500" className="font-playfair text-6xl font-medium">TEMULAWAK</h1>
              <p className="font-neue font-normal text-justify md:text-2xl text-xl mb-16 mt-10 lg:w-3/4 w-full">
                Rasakan manfaat temulawak dengan khasiatnya untuk kesehatan pencernaan dan imunitas.
              </p>
              <img data-aos="fade-up" data-aos-duration="1500" src={require("../assets/img/jamus-1.png")} alt="" className="rounded-xl mb-0" />
            </div>
          </Link>
          <Divider />

          {/* Jenis Jamu: Brotowali */}
          <Link to={`/jamu/brotowali/recipe`} className="jamu-types text-primary">
            <div className="flex flex-col px-12 md:-mt-64 gap-12">
              <img data-aos="fade-down" data-aos-duration="1500" src={require("../assets/img/jamus-1.png")} alt="" className="rounded-xl mb-0" />
              <p className="font-neue font-normal text-justify md:text-2xl text-xl md:mt-16 md:mb-10 lg:w-3/4 w-full">
                Rasakan manfaat brotowali untuk kesehatan ginjal dan menjaga keseimbangan tubuh.
              </p>
              <h1 data-aos="fade-up" data-aos-duration="1500" className="font-playfair text-6xl font-medium">BROTOWALI</h1>
            </div>
          </Link>
          <Divider />

          {/* Jenis Jamu: Empon-Empon */}
          <Link to={`/jamu/empon-empon/recipe`} className="jamu-types text-primary">
            <div className="flex md:flex-col flex-col-reverse px-12 md:pt-20 pt-5 md:-mb-16 gap-12">
              <h1 data-aos="fade-down" data-aos-duration="1500" className="font-playfair text-6xl font-medium">EMPON-EMPON</h1>
              <p className="font-neue font-normal text-justify md:text-2xl text-xl mb-16 mt-10 lg:w-3/4 w-full">
                Kombinasi rempah-rempah tradisional untuk memberikan kehangatan dan kesejahteraan.
              </p>
              <img data-aos="fade-up" data-aos-duration="1500" src={require("../assets/img/jamus-1.png")} alt="" className="rounded-xl mb-0" />
            </div>
          </Link>
          <Divider />
        </div>
      </div>
    </>
  );
};
