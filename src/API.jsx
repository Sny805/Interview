import React from 'react'
import { useEffect, } from "react";
function API() {
 useEffect(()=>{
    fetch("https://api.myastroguruji.com/v1/api/customer/fetch-horoscope").then((result)=>{
        result.json().then((res)=>{console.log("res",res)})
    })

 },[])
    return (
        <div>API</div>
    )
}

export default API