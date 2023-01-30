import React, { useState } from 'react'
import { useEffect, } from "react";
import data from '../data';
function API() {
    // useEffect(() => {
    //     fetch("https://api.myastroguruji.com/v1/api/customer/fetch-horoscope").then((result) => {
    //         result.json().then((res) => { console.log("res", res) })
    //     })

    // }, [])
    //GET
    const [item, setItem] = useState([])
    useEffect(() => {
        fetch("https://reqres.in/api/users?page=2")
            .then(response => {
                if (response.ok) {
                    console.log("Get Request Succesfull")
                }
                else {
                    console.log("Not successFull")
                }
                return response
            })
            .then((response) => {
                response.json()
                    .then((data) => {
                        console.log("data is", data)
                        setItem(data)
                    })
            })
            .catch((error) => { console.log("Error is", error) })
    }, [])

    //POST
    // fetch("https://reqres.in/api/users",
    //     {
    //         method: 'POST',
    //         headers: {
    //             "Content-type": 'application/json'
    //         },
    //         body: JSON.stringify(
    //             {
    //                 "name": "morpheus",
    //                 "job": "leader"
    //             }
    //         )
    //     }
    // ).then(response => {
    //     if (response.ok) {
    //         console.log("POST Request Succesfull")
    //     }
    //     else {
    //         console.log("Not successFull")
    //     }
    //     return response
    // })
    //     .then((res) => res.json())
    //     .then((data) => {
    //         console.log("data1", data)

    //     })

    //PUT
    // fetch("https://reqres.in/api/users/2",
    //     {
    //         method: 'PUT',
    //         headers: {
    //             "Content-type": 'application/json'
    //         },
    //         body: JSON.stringify(
    //             {
    //                 "name": "Sunny",
    //                 "job": "Developer"
    //             }
    //         )
    //     }
    // ).then(response => {
    //     if (response.ok) {
    //         console.log("PUT Request Succesfull")
    //     }
    //     else {
    //         console.log("Not successFull")
    //     }
    //     return response
    // })
    //     .then((res) => res.json())
    //     .then((data) => { console.log("data2", data) })

    //DELETE
    // fetch("https://reqres.in/api/users/2",
    //     {
    //         method: 'DELETE',
    //         headers: {
    //             "Content-type": 'application/json'
    //         },

    //     }
    // ).then(response => {
    //     if (response.ok) {
    //         console.log("Delete Request Succesfull")
    //     }
    //     else {
    //         console.log("Not successFull")
    //     }
    //     return response
    // })
    //     .then((res) => console.log(res))
    // .then((data) => { console.log("data2", data) })
      

    return (
        <>
           {item.page}
           
        </>
    )
}

export default API