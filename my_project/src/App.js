import React from 'react';
import MainView from './components/MainView.jsx';
import NavBar from './components/NavBar';
import {Routes, Route} from 'react-router-dom';
import Catalog from './components/CatalogComp.jsx';
import Prices from './components/CompanyPrices.jsx';
import Contacts from './components/Contacts.jsx';
import {BrowserRouter} from 'react-router-dom';
import './components/css/adaptive_strike.css';



function App() {
  return(

    <>
    <BrowserRouter>
      <NavBar/>
      <Routes>
          <Route path='' element={<MainView/>}/>
          <Route path='/main' element={<MainView/>}/>
          <Route path='/newpage' element={<Catalog/>}/>
          <Route path='/prices' element={<Prices/>}/>
          <Route path='/contacts' element={<Contacts/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
