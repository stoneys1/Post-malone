import "./Footer.scss"
import Logo from "../../assets/logo.png";
import { 
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaYoutube,
    FaSpotify
 } from "react-icons/fa";
 import Aos from "aos";
 import "aos/dist/aos.css";
 import { useEffect } from "react";

const Footer = () => {
  useEffect(() => {
    Aos.init({ duration : 1000});
 });
  
  
  return <footer className="footer">
    <div className="footer__container wrapper" data-aos="fade-up">
      <div className="footer__col">
        <img src={Logo} alt="logo" />
        <p>
          Feito com carinho pelo Stoney🪐
          Fã Nº 1 do Post
        </p>
      </div>

      <div className="footer__col">
          <h3>Sobre</h3>
          <a href="#">Sobre mim</a>
          <a href="#">Colaborações</a>
          <a href="#">Novidades</a>
          <a href="#">Contato</a>
      </div>

      <div className="footer__col">
          <h3>Redes Sociais</h3>
          <div className="footer_icons">
            <a href="https://www.facebook.com/marcus.viniciusalvesbonacina/" className="footer_icons" target="_blank" ><FaFacebookF/></a>
            <a href="https://www.instagram.com/marcus_vini1/"className="footer_icons" target="_blank" ><FaInstagram/></a>
            <a href="https://x.com/StephStoneys"className="footer_icons" target="_blank" ><FaTwitter/></a>
            <a href="https://www.youtube.com/@stoney3079" className="footer_icons" target="_blank" ><FaYoutube/></a>
            <a href="https://open.spotify.com/user/12157093390?si=251ca677164e4484"className="footer_icons" target="_blank" ><FaSpotify/></a>
          </div>
      </div>
    </div>
  </footer>
}

export default Footer