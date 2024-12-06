import "./Navbar.scss";
import Logo from "../../assets/logo.png";
import {IoMenu} from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";

const Navbar = () => {

    const [showNav, setShowNav] = useState(true);

  return (
    <header className="navbar">
        <nav className="navbar__container wrapper">
            <a href="#" className="navbar__logo" onClick={() => setShowNav(false)}>
                <img src={Logo} alt="logo" />
            </a>

            <ul className={`${showNav ? "show" :""}`}>
                <li onClick={() => setShowNav(false)}><a href="#">Home</a>
                </li>
                <li onClick={() => setShowNav(false)}><a href="#">Shop</a>
                </li>
                <li onClick={() => setShowNav(false)}><a href="#">Music</a>
                </li>
                <li onClick={() => setShowNav(false)}><a href="#">Albuns</a>
                </li>
                <li onClick={() => setShowNav(false)}><a href="#">Shows</a>
                </li>
            </ul>

            <div className="navbar__btns">
                <a href="#">Login</a>
                <a href="#" className="btn">
                    Registrar
                </a>
            </div>

           <div className="navbar__menu" onClick={() => setShowNav(!showNav)}>
                {showNav ? <IoMdClose /> : <IoMenu />}
           </div>
        </nav>
    </header>
  )
}

export default Navbar