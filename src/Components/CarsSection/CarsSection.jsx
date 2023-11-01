import React from 'react'
import style from "./CarsSection.module.css"

const CarsSection = ({ name, image, price, carDetail }) => {
    return (
        <>
            <div className={style.box}>
                <div className={style.image}>
                    <img src={image} alt="car1" />
                </div>
                <div className={style.content}>
                    <div className={style.top}>
                        <h2>$ {price}</h2>
                        <h5>rent per day</h5>
                    </div>
                    <h3>{name}</h3>
                    <ul>
                        <li><i className={`${style.icon} fa-solid fa-car`}></i> Model: {carDetail.model}</li>
                        <li><i className={`${style.icon} fa-solid fa-door-open`}></i> Doors: {carDetail.doors}</li>
                        <li><i className={`${style.icon} fa-solid fa-chair`}></i> Seats: {carDetail.seats}</li>
                        <li><i className={`${style.icon} fa-solid fa-suitcase`}></i> Luggage: {carDetail.luggage}</li>
                        <li><i className={`${style.icon} fa-solid fa-gauge-high`}></i> Transmission: {carDetail.transmission}</li>
                    </ul>
                    <div className={style.btnGroup}>
                        <a href="#booking" className='btn'>Book Ride</a>
                        <span href=""><i className={`${style.icon} fa-solid fa-phone`}></i> (562) 498-4600</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CarsSection
