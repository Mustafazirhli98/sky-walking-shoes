import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Title from './components/content/Title';
import Introduction from './components/content/Introduction';
import Market from './components/content/Market';
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
//Navbar oluştur.
//Introduction oluştur (data ile oluştur).
//indirim componentini oluştur.
//market oluştur.
//CSS ekle.
//GSAP ekle.
//route ekle
//satın alma işlevi ve animasyonu ekle.