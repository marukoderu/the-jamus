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
  <div className="divider lg:py-8 p-4">
    <div className="lg:border-r-2 lg:border-r-primary lg:h-full border-b-2 border-b-primary w-full"></div>
  </div>
);

  function JamusTypes1() {
    return (
        <div className="jamu-types text-primary">
            <div className="flex lg:flex-col flex-col-reverse px-12 lg:pt-20 pt-5 lg:-mb-16 gap-12">
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
            <div className="flex flex-col px-12 lg:-mt-64 gap-12">
                <img src={require("../assets/img/jamus-1.png")} alt="" className="rounded-xl mb-0" />
                <p className="font-neue font-normal mt-16 mb-10 w-3/4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente expedita quia animi doloremque? Ducimus, facilis.</p>
                <h1 className="font-playfair text-6xl font-medium">BERAS<br /> KENCUR</h1>
            </div>
        </div>
    )
  }

  return (
    <>
      <Sidebar />
      <div id="scrollContainer" className="container-types flex lg:flex-row flex-col">
        <div className="types-title font-playfair text-primary py-1 flex flex-nowrap lg:ml-36">
            <h1 className="text-9xl pr-3 pl-4 font-medium">DIVE INTO JAMU</h1>
        </div>
        <Divider />
        <div className="flex lg:flex-row flex-col">
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
