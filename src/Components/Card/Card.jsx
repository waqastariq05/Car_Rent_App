import React from 'react'
import style from "./Card.module.css"

const CarsSection = ({ name, image, price, carDetail }) => {
    return (
        <>
            <div className={style.card}>
                <div className={style.image}>
                    <img src={image} alt="car1" />
                </div>
                <div className={style.cardBody}>
                    <h2 className={style.title}>{name}</h2>
                    <ul>
                        <li><i className={`${style.icon} fa-solid fa-check`}></i> {carDetail.model}</li>
                        <li><i className={`${style.icon} fa-solid fa-check`}></i> {carDetail.ac}</li>
                        <li><i className={`${style.icon} fa-solid fa-check`}></i> {carDetail.seats}</li>
                        <li><i className={`${style.icon} fa-solid fa-check`}></i> {carDetail.transmission}</li>
                        <li><i className={`${style.icon} fa-solid fa-check`}></i> {carDetail.doors}</li>
                        <li><i className={`${style.icon} fa-solid fa-check`}></i> {carDetail.luggage}</li>
                    </ul>
                    <div className={style.top}>
                        <h2>$ {price}</h2>
                        <h5> / per day</h5>
                        <a href="#booking" className='btn'>Book Ride</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CarsSection
