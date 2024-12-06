import "./Most.scss"
import { musicInfo } from "../../Data";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Most = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []); 

  return (
    <section className="mosted">
      <h2 data-aos="fade-up">Mais Ouvidas</h2>
      <div className="mosted__container wrapper"  data-aos="fade-up">
        {musicInfo.map(({ Image, name, description, audio, id }) => ( 
          <div key={id} className="mosted__card"> {}
            <img src={Image} alt={name} />
            <h3>{name}</h3>
            <span>{description}</span>
            <audio controls>
              <source src={audio} type="audio/mpeg" />
            </audio>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Most;
