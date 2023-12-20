import "../assets/css/about-jamus.css";
import { useEffect, useRef } from "react";
import { Sidebar } from "../components/sidebar";
import { gsap } from "gsap";
import { TweenMax, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


export const AboutJamus = () => {
  let img_jamus_1 = useRef(null);
  let about_jamu_detail = useRef(null);
  let aboutManfaatRef = useRef(null);
  let img_jamus_2 = useRef(null);
  let img_jamus_3 = useRef(null);

  useEffect(() => {

  // Animation for img_jamus_1
  TweenMax.to(img_jamus_1,.8,{opacity:1,y:10,delay:0.5,ease:Power3.easeOut});
  TweenMax.to(img_jamus_2,.8,{opacity:1,y:10,delay:0.5,ease:Power3.easeOut});
  TweenMax.to(img_jamus_3,.8,{opacity:1,y:0,delay:1,ease:Power3.easeOut});

  // Animation for about_jamu_detail
  TweenMax.to(about_jamu_detail,.8,{opacity:1,y:10,ease:Power3.easeOut});

  // Animation for about_manfaat_jamu
  TweenMax.to(aboutManfaatRef,.8,{opacity:1,y:10,ease:Power3.easeOut});
  
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

  return (
      <div id="scrollContainer" className="main-container  ">
      <Sidebar />
        <div className="about-jamus">
          <div className="jamus-details">
            <div className="tittle">
              <h1>BERAS</h1>
              <h1>KENCUR</h1>
              <div className="scroll-container">
                <div className="text">
                  <p>Scroll</p>
                </div>
                <hr width="20%" size="1" style={{color: 'black'}} />
              </div>
            </div>
            <div className="jamus-desc" ref={el =>{about_jamu_detail = el}}>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Similique, inventore eligendi unde magni officiis quidem porro
                eum natus harum molestiae non! Expedita amet cum corporis
                tempore ducimus dolore non animi. Explicabo distinctio expedita
                numquam vitae possimus autem, repudiandae, voluptates odit eum,
                laudantium exercitationem. Illo quis nihil inventore porro,
                autem amet omnis in sint nesciunt, rem corporis tempore
                perferendis debitis fugiat? Asperiores, nesciunt eius natus
                molestias neque ex. Labore laudantium totam earum est porro
                consectetur, nisi impedit alias autem, ipsum dolores voluptatum
                natus ex quibusdam iure quisquam. Libero quia quasi similique.
              </p>
            </div>
          </div>
          <div className="jamus-img" ref={el =>{img_jamus_1 = el}}>
            <img src={require("../assets/img/jamus-1.png")} alt="" />
          </div>
        </div>
        <div className="manfaat-jamus">
          <div className="jamus-details">
            <div className="tittle">
              <h1>MANFAAT</h1>
            </div>
            <div className="jamus-desc" ref={el =>{aboutManfaatRef = el}}>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Similique, inventore eligendi unde magni officiis quidem porro
                eum natus harum molestiae non! Expedita amet cum corporis
                tempore ducimus dolore non animi. Explicabo distinctio expedita
                numquam vitae possimus autem, repudiandae, voluptates odit eum,
                laudantium exercitationem. Illo quis nihil inventore porro,
                autem amet omnis in sint nesciunt, rem corporis tempore
                perferendis debitis fugiat? Asperiores, nesciunt eius natus
                molestias neque ex. Labore laudantium totam earum est porro
                consectetur, nisi impedit alias autem, ipsum dolores voluptatum
                natus ex quibusdam iure quisquam. Libero quia quasi similique.
                <br />
                <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Similique, inventore eligendi unde magni officiis quidem porro
                eum natus harum molestiae non! Expedita amet cum corporis
                tempore ducimus dolore non animi. Explicabo distinctio expedita
                numquam vitae possimus autem, repudiandae, voluptates odit eum,
                laudantium exercitationem. Illo quis nihil inventore porro,
                autem amet omnis in sint nesciunt, rem corporis tempore
                perferendis debitis fugiat? Asperiores, nesciunt eius natus
                molestias neque ex. Labore laudantium totam earum est porro
                consectetur, nisi impedit alias autem, ipsum dolores voluptatum
                natus ex quibusdam iure quisquam. Libero quia quasi similique.
              </p>
            </div>
          </div>
          <div className="jamus-img">
            <div className="img-jamus-1" ref={el =>{img_jamus_2 = el}}>
              <img
                id="img-jamus-1"
                src={require("../assets/img/jamus-2.png")}
                alt=""
              />
            </div>
            <div className="img-jamus-2" ref={el =>{img_jamus_3 = el}}>
              <img
                id="img-jamus-2"
                src={require("../assets/img/jamus-1.png")}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
  );
};
