import './App.css';
import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Statements from './components/Statements';
import { fetchData } from './redux/home/home';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  return (
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
};

export default App;
