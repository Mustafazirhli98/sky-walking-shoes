import { Route, Routes } from 'react-router-dom';
import './App.css';
import Basket from './components/content/Basket';
import { PATHS } from './routes/Routes';
import MainComponent from './components/MainComponent';
import Navbar from './components/Navbar';
import MarketPlace from './components/content/MarketPlace';
import Confirm from './components/content/Confirm';
import { useContext } from 'react';
import { Context } from './Context';


function App() {

  const { orderState } = useContext(Context)

  return (
    <div className="container">
      <Navbar />
          <Routes>
            <Route path={PATHS.DEFAULT} element={<MainComponent />} />
            <Route path={PATHS.BASKET} element={<Basket />} />
            <Route path={PATHS.MARKET_PLACE} element={<MarketPlace />} />
            <Route path={PATHS.CONFIRM} element={<Confirm />} />
          </Routes>

    </div>
  );
}

export default App;


//TODO:
//refactoring.
