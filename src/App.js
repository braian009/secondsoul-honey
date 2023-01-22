
import './App.css';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import Products from './components/Products';

const App = () => {
  return (
    <div className='App'>
      <Navbar/>
      <Hero/>
      <About/>
      <Features/>
      <Products/>
    </div>
  );
};


export default App;
