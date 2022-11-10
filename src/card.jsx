import React, { useState } from 'react'
import "./style.css";
import { useEffect, } from "react";


function Card({ title, date, para }) {

    const[name,setName]=useState();
    useEffect(() => {
        fetch("https://api.myastroguruji.com/v1/api/customer/fetch-horoscope").then((result) => {
            result.json().then((res) => { 
                // console.log("res", res.data) 
                setName(res);
            })
        })

    }, [])

    return (


        <div className='card'>
            <h3>{title}</h3>
            <p>{date}</p>
            <p>{para}</p>
            <button>Read More</button>
        </div>

    )
}

export default Card