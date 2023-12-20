import "../assets/css/jamu-types.css";

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

  function Divider() {
    return (           
        <div className="py-8">
            <div className="border-r-2 border-r-primary h-full"></div>
        </div>
    )
  }

  function JamusTypes1() {
    return (
        <div className="jamu-types text-primary">
            <div className="flex flex-col px-12 pt-20 -mb-16 gap-12">
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
            <div className="flex flex-col px-12 -mt-36 gap-12">
                <img src={require("../assets/img/jamus-1.png")} alt="" className="rounded-xl mb-0" />
                <p className="font-neue font-normal mt-16 mb-10 w-3/4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente expedita quia animi doloremque? Ducimus, facilis.</p>
                <h1 className="font-playfair text-6xl font-medium">BERAS<br /> KENCUR</h1>
            </div>
        </div>
    )
  }

  return (
    <>

      <div id="scrollContainer" className="main_container">
      <Sidebar />
        <div className="types-title font-playfair text-primary py-1 flex flex-nowrap ml-36">
            <h1 className="text-9xl pr-3 pl-4 font-medium">DIVE INTO JAMU</h1>
        </div>
        <Divider />
        <div className="flex">
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
