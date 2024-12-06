import "./Hero.scss";
import Mob from "../../assets/f1aa.jpg";
import Aos from "aos";
import "aos/dist/aos.css"
import { useEffect } from "react";


const Hero = () => {
  useEffect(() =>{
    Aos.init({duration: 1000});
  })
  
  
  return <section className="hero" >
    <div className="hero__container wrapper">
        <div className="hero__left" data-aos="fade-right">
          <img src={Mob} alt="hero" />
        </div>

        <div className="hero__right" data-aos="zoom-in-up">
          <h1>Ouça o novo album</h1>
          <h2>O disco conta com parcerias com vários astros do gênero, como Tim McGraw, Morgan Wallen, Blake Shelton, Dolly Parton, Jelly Roll, Luke Combs e Chris Stapleton. </h2>
          <p>O lançamento do disco foi precedido pelos singles "I Had Some Help" (com Wallen), "Pour Me a Drink" (com Shelton) e "Guy for That" (com Combs). F-1 Trillion é o sucessor de Austin, lançado por Malone no ano passado.</p>
          <a href="#" className="btn">Ouça agora!</a>
        </div>
    </div>
  </section>
    
  
}

export default Hero
