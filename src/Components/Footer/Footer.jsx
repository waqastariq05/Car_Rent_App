import React from 'react'
import style from './Footer.module.css'

const Footer = () => {
    return (
        <footer>
            <div className={`pad-60 ${style.footer}`}>
                <div>
                    <h1 className={style.title}>Car <span>Rental</span></h1>
                    <p>Use securing confined his shutters. Delightful as he it acceptance an solicitude discretion.</p>
                    <ul>
                        <li><i className={`${style.icon} fa-solid fa-phone`}></i> (123) 498-4600</li>
                        <li><i className={`${style.icon} fa-solid fa-envelope`}></i> example@carrental.com</li>
                    </ul>
                </div>
                <div>
                    <h1 className={style.title}>Working Hours</h1>
                    <ul>
                        <li><span>Mon - Fri:</span> 09:00AM - 09:00PM</li>
                        <li><span>Sat:</span> 09:00AM - 07:00PM</li>
                        <li><span>Sun:</span> Closed</li>
                    </ul>
                </div>
                <div>
                    <h1 className={style.title}>Subscription</h1>
                    <p>Subscribe your Email address for latest news & updates.</p>
                    <input type="text" placeholder='Enter Email Address' required />
                    <button className='btn'>Submit</button>
                </div>
            </div>
            <div className={style.footerBottem}>
                <h4>©2020 <span>Car Rental</span>. All Rights Reserved</h4>
                <div className={style.social}>
                    <span><i className="fa-brands fa-facebook-f"></i></span>
                    <span><i className="fa-brands fa-twitter"></i></span>
                    <span><i className="fa-brands fa-youtube"></i></span>
                </div>
            </div>
        </footer>
    )
}

export default Footer
