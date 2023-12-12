import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Title from './components/content/Title';
import Introduction from './components/content/Introduction';
import Market from './components/content/Market';
import { useEffect } from 'react';
import gsap from 'gsap';
function App() {

  return (
    <div className="container">
      <Navbar />
      <Title />
      <Introduction />
      <Market />
    </div>
  );
}

export default App;


//TODO:
//Introduction oluştur (data ile oluştur).
//market oluştur.
//satın alma işlevi ve animasyonu ekle.