'use client'

import React from 'react';
import Link from "next/link";
import nav from "@/app/data/nav";
import {useEffect, useState} from "react";
import './nav.css'


function Nav(props) {
    const [scroll, setScroll] = useState(0)
    const [navList, setNavList] = useState(nav)

    const handleOpenSearchForm = () => {
        document.body.classList.remove('box-collapse-closed')
        document.body.classList.add('box-collapse-open')
    }

    useEffect(()=>{
        window.addEventListener('scroll', ()=>{
            setScroll(window.scrollY)
        })
        return () => {
            window.removeEventListener('scroll', ()=>{
                setScroll(window.scrollY)
            })
        }
    }, [scroll])

    const handleNavOnClick = id => {
        const newNavList = navList.map(nav => {
            nav.active = nav.id === id;
            return nav
        })
        setNavList(newNavList)
    }

    return (
        <nav className={`navbar navbar-default navbar-expand-lg fixed-top ${scroll > 100 ? 'navbar-reduce' : 'navbar-trans'}`}>
            <div className="container">
                <button
                    className="navbar-toggler collapsed"
                    type="button"
                    data-bs-toggle="collapsed"
                    data-bs-target="#navbarDefault"
                    aria-controls="navbarDefault"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                <a href="/" className="navbar-brand text-brand">
                    Estate <span className="color-b">Agency</span>
                </a>

                <div className="navbar-collapse collapse justify-content-center" id="navbarDefault">
                    <ul className="navbar-nav">
                        {
                            navList.map(item => (
                                <li className="nav-item" key={item.id}>
                                    <Link
                                        className={`nav-link ${item.active ? 'active' : undefined}`}
                                        href={item.link}
                                        onClick={()=> handleNavOnClick(item.id)}
                                    >
                                        {item.name === 'Home' ? (<i className="bi bi-house-door-fill"></i>):(item.name)}
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                </div>

                <button
                    type="button"
                    className="btn btn-b-n navbar-toggle-box navbar-toggle-box-collapse"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarToggleDemo01"
                    onClick={handleOpenSearchForm}
                >
                    <i className="bi bi-search"></i>
                </button>

            </div>
        </nav>
    );
}

export default Nav;