import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Link} from "react-router-dom";

function Home(props) {
    const [users, setUsers] = useState([])

    useEffect(() => {
        loadUsers();
    }, [])

    const loadUsers = async () => {
        const res = await axios.get("http://localhost:8080/users")
        // 1st make sure data output normally in console
        // console.log(res.data)

        // 2nd put the data into Users
        setUsers(res.data)
    }
    return (
        <div className="container">
            <div className="py-4">
                <table className="table border shadow">
                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Username</th>
                        <th scope="col">Email</th>
                        <th scope="col">Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        users.map((user, index) => (
                            <tr>
                                <th scope="row" key={index}>{index+1}</th>
                                <td>{user.name}</td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td>
                                    <button className="btn btn-primary mx-2">View</button>
                                    <Link className="btn btn-outline-primary mx-2" to={`/edituser/${user.id}`}>Edit</Link>
                                    <button className="btn btn-danger mx-2">Delete</button>
                                </td>
                            </tr>
                        ))
                    }
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Home;