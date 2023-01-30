import React, { useEffect, useState } from 'react'
import axios from 'axios'
import "./Axios.css";
const API = "https://jsonplaceholder.typicode.com";
function Axios() {
    const [data, setData] = useState([]);
    const [isError, setError] = useState("");

    useEffect(() => {
        // axios.get('https://jsonplaceholder.typicode.com/posts')
        //     .then((response) => { setData(response.data) })
        //     .catch((error) => { setError(error.message) })
        getApiData(`${API}/posts`)

    }, [])
    const getApiData = async (url) => {
        try {
            const res = await axios.get(url);
            setData(res.data);
        }
        catch (error) {
            setError(error.message);
        }


    }

    return (
        <>
            <div>Axios</div>
            <h2>{isError}</h2>
            <div className='grid'>
                {
                    data.slice(0, 12).map((post) => {
                        const { id, title, body } = post;
                        return <div className='card-container'>
                            <h2>{title.slice(0, 10).toUpperCase()}</h2>
                            <p>{body.slice(0, 100)}</p>

                        </div>
                    })
                }
            </div>
        </>
    )
}

export default Axios