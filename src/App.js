
import './App.css';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';

const App = () => {
  return (
    <div className='App'>
      <Navbar/>
      <Hero/>
      <About/>
      <Features/>
    </div>
  );
};


export default App;
