import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Statements from './components/Statements';

const App = () => (
  <BrowserRouter>
    <div className="container">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details" element={<Statements />}>
          <Route path=":statementYear" element={<Statements />} />
        </Route>
      </Routes>
    </div>
  </BrowserRouter>
);

export default App;
