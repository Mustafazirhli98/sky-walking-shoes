import { Route, Routes } from 'react-router-dom';
import './App.css';
import Basket from './components/content/Basket';
import { PATHS } from './routes/Routes';
import MainComponent from './components/MainComponent';
import Navbar from './components/Navbar';
import MarketPlace from './components/content/MarketPlace';


function App() {

  return (
    <div className="container">
      <Navbar />
      <Routes>
        <Route path={PATHS.DEFAULT} element={<MainComponent />} />
        <Route path={PATHS.BASKET} element={<Basket />} />
        <Route path={PATHS.MARKET_PLACE} element={<MarketPlace />} />
      </Routes>

    </div>
  );
}

export default App;


//TODO:

// Şimdi al kısmı kenardan uçarak gelecek,
// fontsize gibi ufak detaylar tamamlanacak
//Responsive
//satın alma işlevi ve animasyonu ekle.
//refactoring
//bir üründen kaç tane eklendiğini ürün kartında göster ve eksiltme özelliği gelsin.
//Introduction oluştur (data ile oluştur).