import React, { useState } from 'react'
import logo from '../../assets/logo.png'
import style from './Navbar.module.css'

const Navbar = () => {
    const [toggle, setToggle] = useState(false)

    console.log(toggle)

    const [activeLink, setActiveLink] = useState(0);

    const handleLinkClick = (index) => {
        setActiveLink(index);
        setToggle(false)
    };

    return (
        <div className={style.navbar}>
            <div className={style.logo}>
                <a href="/">
                    <img src={logo} alt="logo" />
                </a>
            </div>
            <div className={`${style.humBurger} ${toggle === true ? style.active : ""}`} onClick={() => toggle === false ? setToggle(true) : setToggle(false)}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div className={`${style.navbar_nav} ${toggle === true ? style.active : ""}`}>
                <nav>
                    <a href="#top" className={activeLink === 0 ? style.active : ""} onClick={() => handleLinkClick(0)}>Home</a>
                    <a href="#service" className={activeLink === 1 ? style.active : ""} onClick={() => handleLinkClick(1)} >Services</a>
                    <a href="#model" className={activeLink === 2 ? style.active : ""} onClick={() => handleLinkClick(2)}>Models</a>
                    <a href="#about" className={activeLink === 3 ? style.active : ""} onClick={() => handleLinkClick(3)}>About</a>
                    <a href="#contact" className={activeLink === 4 ? style.active : ""} onClick={() => handleLinkClick(4)}>Contact</a>
                </nav>
                <div className={style.navbar_btn}>
                    <a href='#booking' className={`btn ${style.navBtn}`}>Booking</a>
                </div>
            </div>
        </div>
    )
}

export default Navbar
