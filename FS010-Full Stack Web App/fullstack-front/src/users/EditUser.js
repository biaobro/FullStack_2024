import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Link, useNavigate, useParams} from "react-router-dom";
import userEvent from "@testing-library/user-event";

function EditUser(props) {
    let navigate = useNavigate()

    const {id} = useParams();

    const [user, setUser] = useState({
        name:"",
        username:"",
        email:""
    })

    const {name, username, email} = user

    const onInputChange = (e) => {
        setUser({...user, [e.target.name]:e.target.value})
    }

    useEffect(() => {
        loadUser()
    }, [])

    const onClickSubmit = async (e)=>{
        // prevent the info showing on browser address
        e.preventDefault();

        await axios.put(`http://localhost:8080/user/${id}`, user);

        navigate("/");
    }

    const loadUser = async  () => {
        const res = await axios.get(`http://localhost:8080/user/${id}`)
        setUser(res.data)
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                    <h2 className="text-center m-4">Edit User</h2>
                    <form action="" onSubmit={(e)=>onClickSubmit(e)}>
                        <div className="mb-3">
                            <label htmlFor="Name" className="form-label">
                                Name
                            </label>
                            <input type="text" className="form-control" placeholder="Enter your name" name="name"
                                   value={name} onChange={(e) => onInputChange(e)}/>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="Username" className="form-label">
                                Username
                            </label>
                            <input type="text" className="form-control" placeholder="Enter your Username"
                                   name="username" value={username} onChange={(e) => onInputChange(e)}/>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="Email" className="form-label">
                                Email
                            </label>
                            <input type="text" className="form-control" placeholder="Enter your Email" name="email"
                                   value={email} onChange={(e) => onInputChange(e)}/>
                        </div>

                        <button className="btn btn-outline-primary" type="submit">Submit</button>
                        <Link className="btn btn-outline-danger mx-2" to="/">Cancel</Link>

                    </form>
                </div>
            </div>
        </div>
    );
}

export default EditUser;