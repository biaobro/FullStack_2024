import 'bootstrap/dist/css/bootstrap.min.css'

// import swiper styles
import 'swiper/css'


import './App.css';
import Header from "./pages/Header";
import Banner from "./pages/Banner";
import Main from "./pages/Main";
import Footer from "./pages/Footer";
import BackToTopBtn from "./components/BackToTopBtn";
import {useEffect, useState} from "react";

function App() {
    // the scroll position of window
    const [scroll, setScroll] = useState(0)

    // constantly listen to the scroll position
    useEffect(() => {
        window.addEventListener('scroll', () => {
            setScroll(window.scrollY)
        })
        return () => {
            window.removeEventListener('scroll', () => {
                setScroll(window.scrollY)
            })
        }
    }, [scroll])

    return (
      <>
          <Header scroll={scroll}/>
          <Banner/>
          <Main />
          {/* put Footer here doesn't work, move it inside of Main*/}
          {/*<Footer/>*/}
          <BackToTopBtn scroll={scroll}/>
      </>
    );
}

export default App;
