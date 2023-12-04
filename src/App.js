import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Components/Home';
import About from './Components/About';
import Search from './Components/Search';
import "./App.css"

const App = () => {
  return (
    <Router>
      <div className="app-wrapper">
        <div className="content">
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/search' element={<Search />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};


export default App;
