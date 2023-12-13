import { Route, Routes } from 'react-router-dom';
import './App.css';
import Basket from './components/content/Basket';
import { PATHS } from './routes/Routes';
import MainComponent from './components/MainComponent';
import Navbar from './components/Navbar';

function App() {

  return (
    <div className="container">
      <Navbar />
      <Routes>
        <Route path={PATHS.DEFAULT} element={<MainComponent />} />
        <Route path={PATHS.BASKET} element={<Basket />} />
      </Routes>
    </div>
  );
}

export default App;


//TODO:
//Basket oluştur.
//Market ekranına ürün yerleştir.Satın alınabilir yap, alınca sepete eklensin (sepetin üstünde ürün sayısı belirsin.).
//Sepet ikonuna tıklayınca sepete gitsin; sepet boşsa boş dursun, değilse ürünleri göstersin(conditional rendering).
//satın alma işlevi ve animasyonu ekle.
//Introduction oluştur (data ile oluştur).