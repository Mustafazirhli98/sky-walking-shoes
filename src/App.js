import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Title from './components/content/Title';
import Introduction from './components/content/Introduction';
import Market from './components/content/Market';
import { useEffect } from 'react';
import gsap from 'gsap';
function App() {

  useEffect(() => {
    const t1 = gsap.timeline()
    t1.fromTo(".container", {
      y: -5,
      opacity: 0
    }, {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: "power3",
      delay: 1
    }

    );
  }, [])

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
//GSAP Scroll animasyonunu çöz
//GSAP ekle.
//route ekle
//Introduction oluştur (data ile oluştur).
//market oluştur.
//satın alma işlevi ve animasyonu ekle.