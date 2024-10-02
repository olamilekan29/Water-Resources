import { useRef } from "react";
import {FaBars, FaTimes } from "react-icons/fa";
import "../style/index.css";
const Header = () => {
   
            const navRef = useRef();

const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
}
return(
    <>
    <header>
    <h1>LOGO</h1>
    <div className="qwert">
        <nav ref={navRef}>
            <a href="/#">About Us</a>
            <a href="/#">Our Services</a>
            <a href="/#">Gallery</a>
            <a href="/#">Testimonials</a>
            <a href="/#">FAQs</a>
            <button className="nav-btn nav-close-btn" onClick={showNavbar}>
               <FaTimes/>
            </button>
        </nav>
        <button className="nav-btn"  onClick={showNavbar}>
            <FaBars/>
        </button>
        </div>
    </header>
        </>
    )
}
export default Header