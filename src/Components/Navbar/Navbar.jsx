import React, { useState } from 'react'
import logo from '../../assets/logo.png'
import style from './Navbar.module.css'

const Navbar = () => {
    const [activeLink, setActiveLink] = useState(0);

    const handleLinkClick = (index) => {
        setActiveLink(index);
    };

    return (
        <div className={style.navbar}>
            <div className={style.logo}>
                <a href="/">
                    <img src={logo} alt="logo" />
                </a>
            </div>
            <nav>
                <a href="#top" className={activeLink === 0 ? style.active : ""} onClick={() => handleLinkClick(0)}>Home</a>
                <a href="#service" className={activeLink === 1 ? style.active : ""} onClick={() => handleLinkClick(1)} >Services</a>
                <a href="#model" className={activeLink === 2 ? style.active : ""} onClick={() => handleLinkClick(2)}>Models</a>
                <a href="#about" className={activeLink === 3 ? style.active : ""} onClick={() => handleLinkClick(3)}>About</a>
                <a href="#contact" className={activeLink === 4 ? style.active : ""} onClick={() => handleLinkClick(4)}>Contact</a>
            </nav>
            <a href='#booking' className={`btn ${style.navBtn}`}>Booking</a>
        </div>
    )
}

export default Navbar
