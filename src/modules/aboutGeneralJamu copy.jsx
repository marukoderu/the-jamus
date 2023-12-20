import "../assets/css/aboutGeneralJamu.css";
import { useEffect, useRef } from "react";
import { Sidebar } from "../components/sidebar";
import { TweenMax, Power3 } from "gsap";

export const AboutGeneralJamus = () => {
  let img_jamus_1 = useRef(null);
  let about_jamu_detail = useRef(null);
  let title = useRef(null);
  let title2 = useRef(null);
  let img_jamus_2 = useRef(null);

  useEffect(() => {
    // Animation for img_jamus_1
    TweenMax.to(img_jamus_1, 0.8, {
      opacity: 1,
      y: 10,
      delay: 0.5,
      ease: Power3.easeOut,
    });
    TweenMax.to(img_jamus_2, 0.8, {
      opacity: 1,
      y: 10,
      delay: 0.5,
      ease: Power3.easeOut,
    });

    // Animation for about_jamu_detail
    TweenMax.to(about_jamu_detail, 0.8, {
      opacity: 1,
      y: 10,
      ease: Power3.easeOut,
    });

    // Animation for about_manfaat_jamu
    TweenMax.to(title, 0.8, { opacity: 1, y: 0, ease: Power3.easeOut });
    TweenMax.to(title2, 0.8, { opacity: 1, y: 0, ease: Power3.easeOut });

    const handleScroll = (event) => {
      event.preventDefault();

      const horizontalScrollDistance = 400;
      const scrollAmount =
        event.deltaY > 0 ? horizontalScrollDistance : -horizontalScrollDistance;

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

  return (
    <div id="scrollContainer" className="mainContainer  ">
      <Sidebar />
      <div className="w-screen h-screen flex flex-col pt-10 ml-32">
        <div className="jamu-img flex gap-3 flex-1">
          <div
            className="img-1 w-full border-solid border-2 border-black  p-2 rounded-2xl translate-y-40 opacity-0"
            ref={(el) => {
              img_jamus_1 = el;
            }}
          >
            <img
              className="w-full h-full"
              src={require("../assets/img/jamus-3.png")}
              alt=""
            />
          </div>
          <div
            className="img-2 w-full border-solid border-2 border-black  p-2 rounded-2xl rotate-180 translate-y-40 opacity-0"
            ref={(el) => {
              img_jamus_2 = el;
            }}
          >
            <img
              className="w-full h-full"
              src={require("../assets/img/jamus-3.png")}
              alt=""
            />
          </div>
        </div>
        <div className="flex flex-1" style={{ width: "270vw" }}>
          <div
            className="jamu-title w-1/2 text-9xl font-playfair flex items-end translate-y-40 opacity-0"
            ref={(el) => {
              title = el;
            }}
          >
            <h1>EXPLORE THE AUTHENTIC DRINK</h1>
          </div>
          <div className="desc flex flex-col  gap-5">
            <div className=" flex-1 w-4/6 flex items-end">
              <p className=" w-3/4 text-justify ">
                Indonesian traditional herbal drink that turun temurun from
                nenek moyang
              </p>
            </div>
            <div className="flex gap-4 items-center flex-1">
              <p>Scroll</p>
              <hr width="50%" size="1" style={{ color: "black" }} />
            </div>
          </div>
          <div
            className="jamu-title w-1/2  text-9xl font-playfair flex items-end translate-y-40 opacity-0"
            ref={(el) => {
              title2 = el;
            }}
          >
            <h1>ORIGINAL FROM NATURE</h1>
          </div>
          <div className="img w-full">
            <img src={require("../assets/img/jamus-4.png")} alt="" />
          </div>
        </div>
      </div>
      <div className="w-screen flex">
        <div className="jamuDesc-1 p-32 text-justify">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum magnam
          similique incidunt facilis placeat adipisci fuga voluptate nemo
          sapiente reprehenderit, alias expedita reiciendis veritatis? Id
          similique asperiores deserunt natus vero. Lorem ipsum, dolor sit amet
          consectetur adipisicing elit. Illum magnam similique incidunt facilis
          placeat adipisci fuga voluptate nemo sapiente reprehenderit, alias
          expedita reiciendis veritatis? Id similique asperiores deserunt natus
          vero. Illum magnam similique incidunt facilis placeat adipisci fuga
          voluptate nemo sapiente reprehenderit, alias expedita reiciendis
          veritatis? Id similique asperiores deserunt natus vero.
        </div>
        <div className=" jamuDesc-2  flex flex-col justify-between">
          <div className="text-justify p-32">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum
            magnam similique incidunt facilis placeat adipisci fuga voluptate
            nemo sapiente reprehenderit, alias expedita reiciendis veritatis? Id
            similique asperiores deserunt natus vero. Lorem ipsum, dolor sit
            amet consectetur adipisicing elit. Illum magnam similique incidunt
            facilis placeat adipisci fuga voluptate nemo sapiente reprehenderit,
            alias expedita reiciendis veritatis? Id similique asperiores
            deserunt natus vero. Illum magnam similique incidunt facilis placeat
            adipisci fuga voluptate nemo sapiente reprehenderit, alias expedita
            reiciendis veritatis? Id similique asperiores deserunt natus vero.
          </div>
        </div>
      </div>
    </div>
  );
};
