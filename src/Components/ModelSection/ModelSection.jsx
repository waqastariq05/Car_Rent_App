import React from 'react'
import style from './ModelSection.module.css'
import TopHeading from '../TopHeading/TopHeading'

// Importing Images
import car1 from "../../assets/cars/c1.png"
import car2 from "../../assets/cars/c2.png"
import car3 from "../../assets/cars/c3.png"
import car4 from "../../assets/cars/c4.png"
import CarsSection from '../CarsSection/CarsSection'

const ModelSection = () => {

    const handleNext = () => {
        let carousel = document.querySelector(".carousel")
        let width = 1120;
        carousel.scrollLeft = carousel.scrollLeft + width;
    }

    const handlePrev = () => {
        let carousel = document.querySelector(".carousel")
        let width = 1120;
        carousel.scrollLeft = carousel.scrollLeft - width;
    }

    return (
        <div className={`pad-60 ${style.model}`} id='model'>
            <TopHeading title="Our rental fleet" text="Vehicle Models" />
            <div className={style.ModelBox}>
                <div className={`carousel ${style.slider}`}>
                    <CarsSection name="Mercedes 35" image={car1} price="35.40" carDetail={{
                        model: "Sedan",
                        doors: 4,
                        seats: 5,
                        luggage: "2 Suitcases / 2 Bags",
                        transmission: "Automatic"
                    }} />
                    <CarsSection name="Mercedes" image={car2} price="30.20" carDetail={[
                        "Model: Sedan",
                        "Doors: 4",
                        "Seats: 5",
                        "Luggage: 3 Suitcases / 4 Bags",
                        "Transmission: Automatic"
                    ]} />
                    <CarsSection name="BMW 320" image={car3} price="40.00" carDetail={[
                        "Model: Sedan",
                        "Doors: 4",
                        "Seats: 5",
                        "Luggage: 1 Suitcases / 2 Bags",
                        "Transmission: Automatic"
                    ]} />
                    <CarsSection name="Audi A1 S" image={car4} price="45.70" carDetail={[
                        "Model: Sedan",
                        "Doors: 4",
                        "Seats: 8",
                        "Luggage: 2 Bags",
                        "Transmission: Automatic"
                    ]} />
                </div>
                <div className={style.navigate}>
                    <span onClick={handlePrev}><i className="fa-solid fa-angle-left"></i></span>
                    <span onClick={handleNext}><i className="fa-solid fa-angle-right"></i></span>
                </div>
            </div>
        </div>
    )
}

export default ModelSection
