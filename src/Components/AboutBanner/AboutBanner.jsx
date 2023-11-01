import React from 'react'
import style from './AboutBanner.module.css'

const AboutBanner = () => {
    return (
        <div className={style.banner}>
            <div className={style.box}>
                <div>
                    <h2>Save big with our cheap car rental!</h2>
                    <p>Top Airports. Local Suppliers. 24/7 Support.</p>
                </div>
                <a href="#booking" className='btn'>Book Ride</a>
            </div>
        </div>
    )
}

export default AboutBanner
