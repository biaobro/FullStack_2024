import Header from "./components/Header/Header.jsx";
import css from './styles/app.module.scss'
import Hero from "./components/Hero/Hero.jsx";
import Expertises from "./components/Expertises/Expertises.jsx";
import Works from "./components/Works/Works.jsx";
import Portfolio from "./components/Portfolio/Portfolio.jsx";
import People from "./components/People/People.jsx";
import Footer from "./components/Footer/Footer.jsx";

const App = () => {
  //don't forget to add font link in index.html
  return <div className={`bg-primary ${css.container}`}>
    <Header/>
    <Hero/>
    <Expertises/>
    <Works/>
    <Portfolio/>
    <People/>
    <Footer/>
  </div> ;
};

export default App;
