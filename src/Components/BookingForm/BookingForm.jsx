import React from 'react'
import style from './BookingForm.module.css'

const BookingForm = () => {
    return (
        <div className={style.bookingBox} id='booking'>
            <h2>Book a car</h2>
            <h4>SAVE 15% if you prepay your booking</h4>
            <form>
                <div className={style.formGroup}>
                    <label htmlFor="carType"><i className={`${style.icon} fa-solid fa-car-rear`}></i> Select Your Car Type</label>
                    <select name="" id="carType" required>
                        <option value="">Select your car type</option>
                        <option value="">Mercedes 35</option>
                        <option value="">Mercedes</option>
                        <option value="">VW PassatCC</option>
                        <option value="">BMW 320</option>
                        <option value="">Audi A1 S</option>
                    </select>
                </div>
                <div className={style.formGroup}>
                    <label htmlFor="pickUp"><i className={`${style.icon} fa-solid fa-location-dot`}></i> Pick-up</label>
                    <select name="" id="pickUp" required >
                        <option value="">Santa Monica - 2012 Lincoln Blvd</option>
                        <option value="">Los Angles - 5711 W Century Blvd</option>
                        <option value="">Los Angles - 6401 Centennial Centre Blvd</option>
                    </select>
                </div>
                <div className={style.formGroup}>
                    <label htmlFor="dropOf"><i className={`${style.icon} fa-solid fa-location-dot`}></i> Drop-of</label>
                    <select name="" id="dropOf" required>
                        <option value="">3669 Oliver Street Wedgwood Texas</option>
                        <option value="">330 Hornor Avenue Kiefer Oklahoma</option>
                        <option value="">3240 Timbercrest Road SAN PEDRO California</option>
                    </select>
                </div>
                <div className={style.formGroup}>
                    <label htmlFor="pickDate"><i className={`${style.icon} fa-solid fa-calendar-days`}></i> Pick-up Date</label>
                    <div className={style.inputGroup}>
                        <input type="date" id='pickDate' required />
                        <input type="time" id='pickDate' required />
                    </div>
                </div>
                <div className={style.formGroup}>
                    <label htmlFor="dropDate"><i className={`${style.icon} fa-solid fa-calendar-days`}></i> Drop-of Date</label>
                    <div className={style.inputGroup}>
                        <input type="date" id='dropDate' required />
                        <input type="time" id='dropDate' required />
                    </div>
                </div>
                <button type='submit' className={`btn ${style.formBtn}`}>Submit</button>
            </form>
        </div>
    )
}

export default BookingForm
