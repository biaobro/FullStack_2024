import React, {useEffect, useState} from 'react';
import productService from "../service/product.service";
import {Link} from "react-router-dom";

const Home = () => {
    const [productList, setProductList] = useState([])
    const [msg, setMsg] = useState()


    useEffect(()=>{
        init()
    },[])

    const init=()=>{
        productService
            .getAllProduct()
            .then((res)=>{
                setProductList(res.data)
            })
            .catch((err)=>{
                console.log(err)
            })
    }

    const deleteProduct=(id)=>{
        productService
            .deleteProduct(id)
            .then((res)=>{
                setMsg("Delete Successfully")
                init()
            })
            .catch((err)=>{
                console.log(err)
            })
    }

    return (
        <>
            <div className="container mt-3">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">

                            <div className="card-header fs-3 text-center">
                                All Product List
                                {
                                    msg &&
                                    <p className="fs-4 text-center text-success">{msg}</p>
                                }
                            </div>

                            <div className="card-body">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">NO#</th>
                                            <th scope="col">Product Name</th>
                                            <th scope="col">Description</th>
                                            <th scope="col">Price</th>
                                            <th scope="col">Status</th>
                                            <th scope="col">Action</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                    {
                                        productList.map((p,num)=> (
                                            <tr>
                                                <td>{num+1}</td>
                                                <td>{p.productName}</td>
                                                <td>{p.description}</td>
                                                <td>{p.price}</td>
                                                <td>{p.status}</td>
                                                <td>
                                                    <Link to={'editProduct/'+p.id} className="btn btn-sm btn-primary">Edit</Link>
                                                    <button onClick={()=>deleteProduct(p.id)} className="btn btn-sm btn-danger ms-1">Delete</button>
                                                </td>
                                            </tr>
                                        ))
                                    }

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;