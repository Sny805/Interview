import React, { useEffect, useState } from 'react';
function Api_Form() {
    let [data, setData] = useState([]);
    const [name, setName] = useState("");
    const [username, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [userid, setId] = useState("");


    useEffect(() => {

        getlist();
    }, [])
    // console.log(data)

    //Get request method
    function getlist() {
        fetch("https://jsonplaceholder.typicode.com/users").then((result) => {
            result.json().then((resp) => {
                console.log("result", resp);
                setData(resp);
                setName(resp[0].name)
                setUserName(resp[0].username)
                setEmail(resp[0].email)
                setId(resp[0].id)

            })
        })
    }
    // POST method

    function saveUser() {
        // console.log("saved user is", name, username, email);
        let data = { name, username, email }
        fetch('https://jsonplaceholder.typicode.com/users',
            {
                method: "POST",
                headers:
                {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)

            }
        ).then((res) => res.json().then((result) => { console.log("Post method", result) }));

    }
    // DELETE request method 
    function deleteUser(id) {

        fetch(`https://jsonplaceholder.typicode.com/users/${id}`,
            {
                method: 'DELETE'
            }).then((result) => result.json().then((res) => {
                    console.log(`id ${id} is deleted`, res);
                    getlist();
                })
            )
    }
    //prefield Form
    function selectUser(id) {
        console.log(data[id - 1]);
        let item = (data[id - 1]);
        setName(item.name)
        setUserName(item.username)
        setEmail(item.email)
        setId(item.id)
    }
    // Update data using put method
    function UpdateUser() {
        let item = { name, username, email, userid }
        console.log(item);
        fetch(`https://jsonplaceholder.typicode.com/users/ ${userid}`, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(item)
        }).then((result) => {
            result.json((res) => {
                console.log("Put Method is", res);
                getlist();
            })
        })
    }
    // Update data using PATCH method
    function UpdateUserPatch()
    {
        let item = { name, username, email, userid }
        console.log(item);
        fetch(`https://jsonplaceholder.typicode.com/users/ ${userid}`, {
            method: 'PATCH',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(item)
        }).then((result) => {
            result.json((res) => {
                console.log("Patch Mthod is", res);
                getlist();
            })
        })
    }


    return (
        <div>
            <h1>GET API</h1>
            <table border="1px">
                <tbody>
                    <tr>
                        <td>Id</td>
                        <td>Name</td>
                        <td>UserName</td>
                        <td>Email</td>
                        <td>Phone</td>
                        <td>Website</td>
                        <td>Deletion</td>
                    </tr>
                    {
                        data.map((item) =>
                            <tr>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.username}</td>
                                <td>{item.email}</td>
                                <td>{item.phone}</td>
                                <td>{item.website}</td>
                                <td><button onClick={() => deleteUser(item.id)}>Delete</button></td>
                                <td><button onClick={() => selectUser(item.id)}>Update User</button></td>
                            </tr>

                        )
                    }
                </tbody>
            </table>
            <input type="text" value={name} onChange={(e) => { setName(e.target.value) }} /> <br></br><br></br>
            <input type="text" value={username} onChange={(e) => { setUserName(e.target.value) }} /> <br></br><br></br>
            <input type="text" value={email} onChange={(e) => { setEmail(e.target.value) }} /> <br></br><br></br>
            <button onClick={UpdateUser}>Update User</button>
            <button onClick={UpdateUserPatch}>Update User Patch</button>
            <button onClick={saveUser}>Save User</button>

        </div>


    )
}
export default Api_Form;