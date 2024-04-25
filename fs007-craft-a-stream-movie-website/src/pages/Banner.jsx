import React, {useState, useEffect} from 'react';
import './banner.css';
import MovieContent from "../components/MovieContent";
import MovieDate from "../components/MovieDate";
import PlayBtn from "../components/PlayBtn";
import MovieSwiper from "../components/MovieSwiper";

function Banner(props) {
    const [movies, setMovies] = useState([])

    const fetchData = ()=> {
        fetch('http://localhost:3000/data/movieData.json')
            .then(res => res.json())
            .then(data => setMovies(data))
            .catch(e => console.log(e.message))
    }

    // [] means called once time
    // [data] means called every time data changed
    useEffect(()=>{
        fetchData()
    },[])


    const handleSlideChange = id => {
        const newMovies = movies.map(movie=>{
            movie.active = movie._id === id;
            return movie
        })
        setMovies(newMovies)
    }


    return (
        <div className="banner">
            {
                // eslint-disable-next-line array-callback-return
                movies && movies.length > 0 && movies.map(movie => (
                    <div className="movie">
                        <img src={movie.bgImg} alt="Background Image" className={`bgImg ${movie.active ? 'active' : undefined}`}/>
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-lg-6 col-md-12">
                                    <MovieContent movie={movie}/>
                                </div>
                                <div className="col-lg-6 col-md-12">
                                    <MovieDate movie={movie}/>
                                    <PlayBtn movie={movie}/>
                                </div>
                            </div>
                        </div>
                    </div>
                )
                )
            }


            {
                movies && movies.length > 0 && <MovieSwiper slides={movies} slideChange={handleSlideChange}/>
            }
        </div>
    );
}

export default Banner;