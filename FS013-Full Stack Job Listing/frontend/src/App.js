import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Create from "./pages/Create";
import Feed from "./pages/Feed";

function App() {
  return (
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/employer" >
                <Route path="/employer/dashboard" element={<Dashboard />}/>
                <Route path="/employer/create" element={<Create />}/>
            </Route>
            <Route path="/employee/feed" element={<Feed />}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
