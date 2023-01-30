import React, { useEffect, useState } from 'react'
import data from '../data';

function Rest() {

    const [data, setData] = useState([]);
   
    useEffect(() => {
        const url = "https://jsonplaceholder.typicode.com/comments";
        fetch(url).then((result) => {
            result.json().then((res) => {
                console.log("res", res)
                setData(res)
            })
        })

    }, [])

    // post API call
    const postPutEvent = () => {
        const data = {
            
            mobile: "24356473",
            desisgnation: "developer",
            pin: "23456"
        }
        const url = "https://jsonplaceholder.typicode.com/comments";
        fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }

        ).then((result) => {
            result.json().then((res) => {
                console.log("res", res)
                
            })
        })
    }

    return (
        <>
            <div>Rest</div>
            <button onClick={postPutEvent}>Submit</button>
            <table border="1px">
                <tbody>
                    <tr>
                        <td>id</td>
                        <td>post id</td>
                        <td>name</td>
                        <td>email</td>
                        <td>body</td>
                    </tr>
                    {
                        data.slice(1,10).map((item) =>
                            <tr>
                                <td>{item.id}</td>
                                <td>{item.postId}</td>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.body}</td>
                            </tr>
                        )
                    }

                </tbody>
            </table>


        </>

    )
}

export default Rest
