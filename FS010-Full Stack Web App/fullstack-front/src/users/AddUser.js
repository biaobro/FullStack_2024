import React from 'react';

function AddUser(props) {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                    <h2 className="text-center m-4">Register User</h2>
                    <div className="mb-3">
                        <label htmlFor="Name" className="form-label">
                            Name
                        </label>
                        <input type="text" className="form-control" placeholder="Enter your name" name="name"/>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="Username" className="form-label">
                            Username
                        </label>
                        <input type="text" className="form-control" placeholder="Enter your Username" name="username"/>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="Email" className="form-label">
                            Email
                        </label>
                        <input type="text" className="form-control" placeholder="Enter your Email" name="email"/>
                    </div>

                    <button className="btn btn-outline-primary" type="submit">Submit</button>
                    <button className="btn btn-outline-danger mx-2" type="submit">Cancel</button>


                </div>
            </div>
        </div>
    );
}

export default AddUser;