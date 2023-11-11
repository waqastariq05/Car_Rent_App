import React from 'react'
import style from './Alert.module.css'

const Alert = ({ msg, setShowAlert }) => {
    return (
        <>
            <div className={style.alert}>
                <h2>{msg}</h2>
                <button onClick={() => setShowAlert(false)} className='btn'>Okay</button>
            </div>
            <div className={style.overlay}></div>
        </>
    )
}

export default Alert
