import React from 'react'
import style from './Banner.module.css'
import banner_car from '../../assets/banner_car.png'

const Banner = () => {
    return (
        <div className={style.banner}>
            <div className={style.leftSide}>
                <h4>Plan your trip now</h4>
                <h2>Save <span>big</span> with our car rental</h2>
                <p>To contribute to positive change and achieve our sustainability goals with many extraordinary</p>
                <div className={style.btnGroup}>
                    <a href='#booking' className='btn'>Book Ride</a>
                    <a href='#about' className={style.learnBtn}>Learn More</a>
                </div>
            </div>
            <div className={style.rightSide}>
                <img src={banner_car} alt="banner_car" />
            </div>
        </div>
    )
}

export default Banner
