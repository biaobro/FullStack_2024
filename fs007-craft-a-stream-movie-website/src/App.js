import 'bootstrap/dist/css/bootstrap.min.css'

// import swiper styles
import 'swiper/css'


import './App.css';
import Header from "./pages/Header";
import Banner from "./pages/Banner";
import Main from "./pages/Main";
import Footer from "./pages/Footer";

function App() {
  return (
      <>
          <Header/>
          <Banner/>
          <Main />
          {/* put Footer here doesn't work, move it inside of Main*/}
          {/*<Footer/>*/}
      </>
  );
}

export default App;
