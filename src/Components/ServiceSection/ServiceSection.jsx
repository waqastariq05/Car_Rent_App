import React from 'react'
import style from './ServiceSection.module.css'
import TopHeading from '../TopHeading/TopHeading'
import ser1 from '../../assets/service/s1.png'
import ser2 from '../../assets/service/s2.png'
import ser3 from '../../assets/service/s3.png'

const ServiceSection = () => {
    return (
        <div className={`pad-60 ${style.service}`} id='service'>
            <TopHeading title="Quick & easy car rental" text="Plan your trip now" />
            <div className={style.serviceCards}>
                <div className={style.card}>
                    <img src={ser1} alt="Ser1 pic" />
                    <div className={style.cardContent}>
                        <h2>Select Car</h2>
                        <p>To contribute to positive change and achieve our sustainability goals with many extraordinary </p>
                    </div>
                </div>
                <div className={style.card}>
                    <img src={ser2} alt="Ser2 pic" />
                    <div className={style.cardContent}>
                        <h2>Contact Operator</h2>
                        <p>To contribute to positive change and achieve our sustainability goals with many extraordinary </p>
                    </div>
                </div>
                <div className={style.card}>
                    <img src={ser3} alt="Ser3 pic" />
                    <div className={style.cardContent}>
                        <h2>Let's Drive</h2>
                        <p>To contribute to positive change and achieve our sustainability goals with many extraordinary </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServiceSection
