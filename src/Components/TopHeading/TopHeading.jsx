import React from 'react'
import style from './TopHeading.module.css'

const TopHeading = ({ title, text }) => {
    return (
        <div className={style.heading}>
            <h4>{text}</h4>
            <h2>{title}</h2>
        </div>
    )
}

export default TopHeading
