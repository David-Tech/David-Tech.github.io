import {BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import './App.css';
import Home from './pages/home';
import About from './pages/about';
import Projects from './pages/projects';
import RootLayout from './layouts/rootLayout';

function App() {
  return (
    
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RootLayout />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
          </Route>
        </Routes>
      </BrowserRouter>
    
  );
}

export default App;
