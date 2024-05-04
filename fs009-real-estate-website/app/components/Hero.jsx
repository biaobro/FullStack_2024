'use client'

import React, {useState, useEffect} from 'react';

// import swiper react components
import {Swiper, SwiperSlide} from 'swiper/react'

// import swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

// import required modules
import {Autoplay, Pagination} from "swiper/modules";

import HeroSlide from "@/app/components/HeroSlide";

// Better to keep the customized style file at the end
import './hero.css'

function Hero(props) {
    const [slides, setSlides] = useState([])

    // use built-in fetch function
    const fetchData = () =>{
        fetch('http://localhost:4000/slides')
            .then(res => res.json())
            .then(data => {
                setSlides(data)
            })
            .catch(e => console.log(e.message))
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <Swiper
            spaceBetween={0}
            autoplay={{
                delay:50000,
                disableOnInteraction:false
            }}
            pagination={{
                type:'bullets',
                clickable:true
            }}
            modules={[Autoplay, Pagination]}
            loop={true}
            className="intro intro-carousel swiper position-relative"
        >
            {
                slides &&
                slides.length > 0 &&
                slides.map(slide => (
                    <SwiperSlide key={slide.id}>
                        <HeroSlide slide={slide} />
                    </SwiperSlide>
                ))
            }
        </Swiper>
    );
}

export default Hero;