import "../assets/css/about-jamus.css";
import { useEffect } from "react";
import { Sidebar } from "../components/sidebar";

export const AboutJamus = () => {
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

  return (
    <>

      <div id="scrollContainer" className="main-container">
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
                <hr width="20%" size="1" />
              </div>
            </div>
            <div className="jamus-desc">
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
          <div className="jamus-img">
            <img src={require("../assets/img/jamus-1.png")} alt="" />
          </div>
        </div>
        <div className="manfaat-jamus">
          <div className="jamus-details">
            <div className="tittle">
              <h1>MANFAAT</h1>
            </div>
            <div className="jamus-desc">
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
            <div className="img-jamus-1">
              <img
                id="img-jamus-1"
                src={require("../assets/img/jamus-2.png")}
                alt=""
              />
            </div>
            <div className="img-jamus-2">
              <img
                id="img-jamus-2"
                src={require("../assets/img/jamus-1.png")}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
