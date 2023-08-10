import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import Products from './pages/Products';
import Navbar from './components/Navbar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
  <Navbar/>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/products" element={<Products />} />
      </Routes>
  </Router> 
  );
