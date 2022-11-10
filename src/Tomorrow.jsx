import React from 'react'
import { NavLink } from "react-router-dom";
import data from "./data";
import Card from './card';
function Tomorrow() {
  return (
    <>
    <div className='container'>
                <h1>SEE YOUR DAILY HOROSCOPE</h1>
                <div className='section'>
                    <NavLink to="/yesterday">Yesterday</NavLink>
                    <NavLink to="/">Today</NavLink>
                    <NavLink to="/tomorrow">Tomorrow</NavLink>
                </div>
                <p className='para'>Here is a quick way to check what stars are bringing to you today.
                    Myastroguruji brings the daily horoscope section for you that will serve as a guiding light in your day to day lives.
                    If you are an astrology lover or love to read about your zodiacs then we are sure you will not miss to read your daily predictions that are done by our expert Tarot readers, especially for you. Each day reading is done as per your zodiac sign. Our planets influence our life through number of ways and if we will know the things well in advance, it will help us to plan our day and safeguard oneself from uncertainties. </p>
            </div>
            <h3 className='head3'>Tomorrow's Horoscope</h3>
            <div className='card_container'>
                {data.map((value) => {
                    return <Card title={value.title} date={value.date} para={value.para} />
                })}
            </div>
</>
  )
}

export default Tomorrow