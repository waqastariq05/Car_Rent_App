import React from 'react'
import style from './AboutSection.module.css'

// Importing Images
import img from '../../assets/about_image.jpg'
import t1 from '../../assets/icons/1.png'
import t2 from '../../assets/icons/2.png'
import t3 from '../../assets/icons/3.png'
import AboutBanner from '../AboutBanner/AboutBanner'

const AboutSection = () => {
    return (
        <>
            <div className={`pad-60 ${style.about}`} id='about'>
                <div className={style.image}>
                    <img src={img} alt="about_image" />
                </div>
                <div className={style.content}>
                    <h4>About Company</h4>
                    <h2>You start the engine and your adventure begins</h2>
                    <p>Certain but she but shyness why cottage. Guy the put instrument sir entreaties affronting. Pretended exquisite see cordially the you. Weeks quiet do vexed or whose. Motionless if no to affronting imprudence no precaution. My indulged as disposal strongly attended.</p>
                    <div className={style.section}>
                        <div>
                            <img src={t1} alt="img1" />
                            <div className={style.text}>
                                <h2>20</h2>
                                <span>Car Types</span>
                            </div>
                        </div>
                        <div>
                            <img src={t2} alt="img2" />
                            <div className={style.text}>
                                <h2>85</h2>
                                <span>Rental Outlets</span>
                            </div>
                        </div>
                        <div>
                            <img src={t3} alt="img3" />
                            <div className={style.text}>
                                <h2>75</h2>
                                <span>Repair Shops</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <AboutBanner />
        </>
    )
}

export default AboutSection
