
import './App.css';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Values from './components/Values';
import Products from './components/Products';
import Features from './components/Features';

const App = () => {
  return (
    <div className='App'>
      <Navbar/>
      <Hero/>
      <About/>
      <Values/>
      <Products/>
      <Features/>
    </div>
  );
};


export default App;
