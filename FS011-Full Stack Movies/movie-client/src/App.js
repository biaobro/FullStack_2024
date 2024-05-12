import './App.css';
import api from './api/axiosConfig.js'
import {useState, useEffect} from "react";
import {Route, Routes} from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Header from "./components/Header";
import Trailer from "./components/Trailer";


function App() {
  const [movies, setMovies] = useState([]);

  const getMovies = async () =>{
    try
    {
      const res = await api.get("/api/v1/movies")
      console.log(res.data)
      setMovies(res.data)
    }
    catch (err)
    {
      console.log(err)
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
        </Route>
      </Routes>
    </div>
  );
}

export default App;
