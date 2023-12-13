import { Route, Routes } from 'react-router-dom';
import './App.css';
import Basket from './components/content/Basket';
import { PATHS } from './routes/Routes';
import MainComponent from './components/MainComponent';
import Navbar from './components/Navbar';
import { useState } from 'react';

function App() {
  const [basket, setBasket] = useState([])

  return (
    <div className="container">
      <Navbar />
      <Routes>
        <Route path={PATHS.DEFAULT} element={<MainComponent basket={basket} setBasket={setBasket} />} />
        <Route path={PATHS.BASKET} element={<Basket />} basket={basket} setBasket={setBasket} />
      </Routes>
    </div>
  );
}

export default App;


//TODO:
//Market ekranına ürün yerleştir.Satın alınabilir yap, alınca sepete eklensin (sepetin üstünde ürün sayısı belirsin.).
//satın alma işlevi ve animasyonu ekle.
//Introduction oluştur (data ile oluştur).