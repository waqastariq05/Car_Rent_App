import React, { useState } from 'react'
import style from './BookingForm.module.css'

const BookingForm = ({ setShowAlert }) => {
    const [bookingData, setBookingData] = useState({ carType: "", pickupLoc: "", dropLoc: "", pickupDate: "", pickupTime: "", dropDate: "", dropTime: "" })

    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem("Booking", JSON.stringify(bookingData))
        setShowAlert(true)
        setBookingData({ carType: "", pickupLoc: "", dropLoc: "", pickupDate: "", pickupTime: "", dropDate: "", dropTime: "" })
    }

    const handleChange = (e) => {
        setBookingData({ ...bookingData, [e.target.name]: e.target.value })
    }

    return (
        <div className={style.bookingBox} id='booking'>
            <h2>Book a car</h2>
            <h4>SAVE 15% if you prepay your booking</h4>
            <form onSubmit={handleSubmit}>
                <div className={style.formGroup}>
                    <label htmlFor="carType"><i className={`${style.icon} fa-solid fa-car-rear`}></i> Select Your Car Type</label>
                    <select id="carType" name="carType" required value={bookingData.carType} onChange={handleChange}>
                        <option value="default">Select your car type</option>
                        <option value="Mercedes 35">Mercedes 35</option>
                        <option value="Mercedes">Mercedes</option>
                        <option value="VW PassatCC">VW PassatCC</option>
                        <option value="BMW 320">BMW 320</option>
                        <option value="Audi A1 S">Audi A1 S</option>
                    </select>
                </div>
                <div className={style.formGroup}>
                    <label htmlFor="pickupLoc"><i className={`${style.icon} fa-solid fa-location-dot`}></i> Pick-up</label>
                    <select name="pickupLoc" id="pickupLoc" value={bookingData.pickupLoc} onChange={handleChange} required >
                        <option value="Santa Monica - 2012 Lincoln Blvd">Santa Monica - 2012 Lincoln Blvd</option>
                        <option value="Los Angles - 5711 W Century Blvd">Los Angles - 5711 W Century Blvd</option>
                        <option value="Los Angles - 6401 Centennial Centre Blvd">Los Angles - 6401 Centennial Centre Blvd</option>
                    </select>
                </div>
                <div className={style.formGroup}>
                    <label htmlFor="dropLoc"><i className={`${style.icon} fa-solid fa-location-dot`}></i> Drop-of</label>
                    <select name="dropLoc" id="dropLoc" required value={bookingData.dropLoc} onChange={handleChange}>
                        <option value="3669 Oliver Street Wedgwood Texas">3669 Oliver Street Wedgwood Texas</option>
                        <option value="330 Hornor Avenue Kiefer Oklahoma">330 Hornor Avenue Kiefer Oklahoma</option>
                        <option value="3240 Timbercrest Road SAN PEDRO California">3240 Timbercrest Road SAN PEDRO California</option>
                    </select>
                </div>
                <div className={style.formGroup}>
                    <label htmlFor="pickupDate"><i className={`${style.icon} fa-solid fa-calendar-days`}></i> Pick-up Date</label>
                    <div className={style.inputGroup}>
                        <input type="date" id='pickupDate' name='pickupDate' value={bookingData.pickupDate} required onChange={handleChange} />
                        <input type="time" id='pickTime' name='pickupTime' value={bookingData.pickupTime} required onChange={handleChange} />
                    </div>
                </div>
                <div className={style.formGroup}>
                    <label htmlFor="dropDate"><i className={`${style.icon} fa-solid fa-calendar-days`}></i> Drop-of Date</label>
                    <div className={style.inputGroup}>
                        <input type="date" id='dropDate' name='dropDate' value={bookingData.dropDate} onChange={handleChange} required />
                        <input type="time" id='dropTime' name='dropTime' value={bookingData.dropTime} onChange={handleChange} required />
                    </div>
                </div>
                <button type='submit' className={`btn ${style.formBtn}`}>Submit</button>
            </form>
        </div>
    )
}

export default BookingForm
