import React from 'react'
import style from './ContactSection.module.css'

const ContactSection = () => {
    return (
        <div className={`pad-60 ${style.contact}`} id='contact'>
            <div className={style.leftBox}>
                <h2>Need additional information?</h2>
                <p>A multifaceted professional skilled in multiple fields of research, development as well as a learning specialist. Over 15 years of experience.</p>
                <ul>
                    <li><i className={`${style.icon} fa-solid fa-phone`}></i> (562) 498-4600</li>
                    <li><i className={`${style.icon} fa-solid fa-envelope`}></i> xyz@carrental.com</li>
                    <li><i className={`${style.icon} fa-solid fa-home`}></i> Level 1, 121 King Street Melbourne, 3000, Australia</li>
                </ul>
            </div>
            <div className={style.rightBox}>
                <div className={style.formGroup}>
                    <label htmlFor="name">Full Name</label>
                    <input type="text" placeholder='Juan Carlos' id='name' required />
                </div>
                <div className={style.formGroup}>
                    <label htmlFor="email">Email Address</label>
                    <input type="email" placeholder='mail@example.com' id='email' required />
                </div>
                <div className={style.formGroup}>
                    <label htmlFor="msg">Tell me about it</label>
                    <textarea id="msg" cols="30" rows="10" placeholder='Write Here..' required></textarea>
                </div>
                <button className='btn'>Send Message</button>
            </div>
        </div>
    )
}

export default ContactSection
