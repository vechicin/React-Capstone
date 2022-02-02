import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Details from './components/Details/Details';
import Navbar from './components/Navbar';
import Detailstwo from './components/Details/Detailstwo';
import Detailsthree from './components/Details/Detailsthree';
import Detailsfour from './components/Details/Detailsfour';
import Detailsfive from './components/Details/Detailsfive';

const App = () => (
  <BrowserRouter>
    <div className="container">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="details/2021-09-25" element={<Details />} />
        <Route path="details/2020-09-26" element={<Detailstwo />} />
        <Route path="details/2019-09-28" element={<Detailsthree />} />
        <Route path="details/2018-09-29" element={<Detailsfour />} />
        <Route path="details/2017-09-30" element={<Detailsfive />} />
      </Routes>
    </div>
  </BrowserRouter>
);

export default App;
