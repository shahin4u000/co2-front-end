import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styles from './Container.module.css'


function Container() {
    const [co2, setCo2] = useState({});

    useEffect(() => {
        axios.get('https://boiling-ridge-29555.herokuapp.com/')
            .then(res => {
                setCo2(res.data);
            })
        setInterval(() => {
            axios.get('https://boiling-ridge-29555.herokuapp.com/')
                .then(res => {
                    setCo2(res.data);
                })
        }, 10000)

    }, [])

    return (
        <>
            <div className={styles.container}>
                {!co2.co2Value ? <h1> Loading ...</h1> :
                    <div className={`${styles.cart} ${styles[co2.level]}`}> Co2 Level: {co2.co2Value} </div>
                }
            </div>
        </>
    )
}

export default Container