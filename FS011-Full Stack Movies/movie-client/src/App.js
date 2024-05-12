import './App.css';
import api from './api/axiosConfig.js'
import {useState, useEffect} from "react";


function App() {
  const [movies, setMovies] = useState();

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

    </div>
  );
}

export default App;
