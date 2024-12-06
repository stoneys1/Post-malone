import "./Albuns.scss";
import { albumInfo } from "../../Data";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Albuns = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  });

  return (
    <section className="albuns">
      <h1 className="h1" data-aos="fade-up">Álbuns</h1>
      <div className="albuns__container wrapper" data-aos="fade-up">
        {albumInfo.map(({ name, img, description }) => (
          <div className="album-card" key={name}>
            <img src={img} alt={name} />
            <div className="album-info">
              <h3>{name}</h3>
              <p>{description}</p>  
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Albuns;
