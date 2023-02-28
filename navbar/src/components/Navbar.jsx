import { FaBars, FaTimes } from "react-icons/fa";
import { useRef } from "react";
import './main.css'
const Navbar = () => {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };
  return (
    <header>
      <nav ref={navRef}>
        <a href="/#">Home</a>
        <a href="/#">Projects</a>
        <a href="/#">Skill</a>
        <a href="/#">Experience</a>
        <a href="/#">Contact</a>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
};

export default Navbar;
