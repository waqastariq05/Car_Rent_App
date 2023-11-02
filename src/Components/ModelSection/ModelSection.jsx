import React from 'react'
import style from './ModelSection.module.css'
import TopHeading from '../TopHeading/TopHeading'
import Card from '../Card/Card'


// Importing Images
import car1 from "../../assets/cars/c1.png"
import car2 from "../../assets/cars/c2.png"
import car3 from "../../assets/cars/c3.png"

const ModelSection = () => {
    return (
        <div className={`pad-60 ${style.model}`} id='model'>
            <TopHeading title="Our rental fleet" text="Vehicle Models" />
            <div className={style.ModelBox}>
                <Card name="Mercedes 35" image={car1} price="35.40" carDetail={{
                    model: "Sedan Model",
                    ac: "Chilled AC",
                    seats: "5 Seats",
                    doors: "5 Doors",
                    luggage: "2 Suitcases / 2 Bags",
                    transmission: "Automatic"
                }} />
                <Card name="Audi A1 S" image={car2} price="30.20" carDetail={{
                    model: "Sedan Model",
                    ac: "Chilled AC",
                    seats: "5 Seats",
                    doors: "5 Doors",
                    luggage: "3 Suitcases / 4 Bags",
                    transmission: "Automatic"
                }} />
                <Card name="BMW 320" image={car3} price="40.00" carDetail={{
                    model: "Sedan Model",
                    ac: "Chilled AC",
                    seats: "5 Seats",
                    doors: "5 Doors",
                    luggage: "1 Suitcases / 2 Bags",
                    transmission: "Automatic"
                }} />
            </div>
        </div>
    )
}

export default ModelSection
