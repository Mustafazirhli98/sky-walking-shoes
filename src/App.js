import { Route, Routes } from 'react-router-dom';
import './App.css';
import Basket from './components/content/Basket';
import { PATHS } from './routes/Routes';
import MainComponent from './components/MainComponent';
import Navbar from './components/Navbar';
import { useState } from 'react';
import Market from './components/content/Market';

function App() {
  const [basket, setBasket] = useState([])

  return (
    <div className="container">
      <Navbar />
      <Routes>
        <Route path={PATHS.DEFAULT} element={<MainComponent />} />
        <Route path={PATHS.BASKET} element={<Basket />} />
        <Route path={PATHS.MARKET} element={<Market />} />
      </Routes>
    </div>
  );
}

export default App;


//TODO:
//Sepetten yönlendirileceğin market'i ayrı bir component ve path ile oluştur.
//Sayfada aşağı inerken beni yukarı çıkartacak bir button belirsin.
//satın alma işlevi ve animasyonu ekle.
//Introduction oluştur (data ile oluştur).