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
//bir üründen kaç tane eklendiğini ürün kartında göster ve eksiltme özelliği gelsin.
//Satın almak için kart bilgilerinin girildiği bir component oluştur.(Confirm ile o sayfaya yönlendirilecek)
//satın alma butonu ile satın alma işlevi ve animasyonu ekle.
//Responsive
// Şimdi al kısmı kenardan uçarak gelecek(animatecss de deneyebilirsin).
//refactoring.
//Videosunu çekip md dosyasına aktar.
//Proje sonu commitini yap.
//Projeyi yayınla.