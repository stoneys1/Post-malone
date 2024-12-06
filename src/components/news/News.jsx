import "./News.scss"
import {  musica } from "../../Data";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";


const News = () => {
  useEffect(() => {
    Aos.init({ duration: 1000});
  });
  


  return <section className="news">
    <h2 data-aos="fade-up">Novidades</h2>
    <div className="news__container wrapper"  data-aos="fade-up">
        {
             musica.map(({Image,name,description, audio}) => (
                <div className="news__card">
                    <img src={Image} alt={name} />
                    <h3>{name}</h3>
                    <span>{description}</span>
                    <audio controls>
                         <source src={audio} type="audio/mpeg" />
                    </audio>
                </div>
             ))
        }
    </div>
  </section>
    
  
}

export default News