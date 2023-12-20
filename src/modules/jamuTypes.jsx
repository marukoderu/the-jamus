import "../assets/css/jamu-types.css";
import { gsap } from "gsap";

import { useEffect } from "react";
import { Sidebar } from "../components/sidebar";


export const JamuTypes = () => {
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
  let tlodd = gsap.timeline({
    scrollTrigger: {
      trigger: ".types-title",
      start: "70% 80%",
      end: () => "top bottom",
      toggleActions: "restart pause resume none",
    },
  });

  tlodd.to([".title-step h1", ".title-step p"], {
    y: -270,
    duration: 5,
  });

  tlodd.to(
    ".jamu-types img",
    {
      y: 20,
      duration: 3,
    },
    0
  );
});

  const Divider = () => (
    <div className="xl:py-8 px-8 my-10">
      <div className="xl:border-r-2 xl:border-r-primary xl:h-full border-b-2 border-b-primary w-full"></div>
    </div>
  );

  function JamusTypes1() {
    return (
        <div className="jamu-types text-primary">
            <div className="flex xl:flex-col flex-col-reverse px-12 xl:pt-20 pt-5 xl:-mb-16 gap-12">
                <h1 className="font-playfair text-6xl font-medium">BERAS<br /> KENCUR</h1>
                <p className="font-neue font-normal mb-16 mt-10 w-3/4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente expedita quia animi doloremque? Ducimus, facilis.</p>
                <img src={require("../assets/img/jamus-1.png")} alt="" className="rounded-xl mb-0" />
            </div>
        </div>
    )
  }

  function JamusTypes2() {
    return (
        <div className="jamu-types text-primary">
            <div className="flex flex-col px-12 xl:-mt-64 gap-12">
                <img src={require("../assets/img/jamus-1.png")} alt="" className="rounded-xl mb-0" />
                <p className="font-neue font-normal mt-16 mb-10 w-3/4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente expedita quia animi doloremque? Ducimus, facilis.</p>
                <h1 className="font-playfair text-6xl font-medium">BERAS<br /> KENCUR</h1>
            </div>
        </div>
    )
  }

  return (
    <>

      <div id="scrollContainer" className="main-container">
      <Sidebar />
        <div className="types-title font-playfair text-primary py-1 flex flex-nowrap">
            <h1 className="text-9xl pr-3 pl-4 font-medium">DIVE INTO JAMU</h1>
        </div>
        <Divider />
        <div className="flex xl:flex-row flex-col">
            <JamusTypes1 />
            <Divider />
            <JamusTypes2 />
            <Divider />
            <JamusTypes1 />
            <Divider />
            <JamusTypes2 />
            <Divider />
        </div>
      </div>
    </>
  );
};
