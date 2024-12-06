import "./Favorite.scss"
import { stoney } from "../../Data";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";


const Favorite = () => {
  useEffect(() => {
    Aos.init({ duration: 1000});
  });
  


  return <section className="favorite">
    <h2 data-aos="fade-up">Favoritas do Stoney⭐</h2>
    <div className="favorite__container wrapper"  data-aos="fade-up">
        {
             stoney.map(({Image,name,description,audio}) => (
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

export default Favorite