
import './App.css';


import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Values from './components/Values';
import Products from './components/Products';
import Features from './components/Features';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className='App'>
      <Navbar/>
      <Hero/>
      <About/>
      <Values/>
      <Products/>
      <Features/>
      <Contact/>
      <Footer/>
    </div>
  );
};


export default App;
