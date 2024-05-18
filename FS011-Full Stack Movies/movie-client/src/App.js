import './App.css';
import api from './api/axiosConfig.js'
import {useState, useEffect} from "react";
import {Route, Routes} from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Header from "./components/Header";
import Trailer from "./components/Trailer";
import Reviews from "./components/Reviews";
import NotFound from "./components/NotFound";


function App() {
  const [movies, setMovies] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [movie, setMovie] = useState([])

  const getMovies = async () =>{
    try
    {
      const res = await api.get("/api/v1/movies")

      {/*// fixme : two requests while get in page, why??? */}
      console.log("res.data @ App.js : ", res.data)
      setMovies(res.data)
    }
    catch (err)
    {
      console.log(err)
    }
  }

  const getMovieData = async (movieId) => {
    try{
      const resp = await api.get(`/api/v1/movies/${movieId}`)
      const singleMovie = resp.data;
      console.log("resp.data @ App.js : ", singleMovie.reviewIds)
      setMovie(singleMovie)
      setReviews(singleMovie.reviewIds)
    } catch (err){

    }
  }

  useEffect(()=>{
    getMovies();
  }, [])

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home movies={movies}/>}></Route>
          <Route path="/Trailer/:ytTrailerId" element={<Trailer />}></Route>
          <Route path="/Reviews/:movieId" element={<Reviews getMovieData={getMovieData} movie={movie} reviews={reviews} setReviews={setReviews}/>}></Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
