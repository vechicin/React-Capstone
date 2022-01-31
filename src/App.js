import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Details from './components/Details';
import Navbar from './components/Navbar';

const App = () => (
  <BrowserRouter>
    <div className="container">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="details" element={<Details />} />
      </Routes>
    </div>
  </BrowserRouter>
);

export default App;
