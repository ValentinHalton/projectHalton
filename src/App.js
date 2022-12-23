import React, { Component } from 'react'
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Navbar from './components/navindex'
import Marvel from './featuresMarvel'
import UV from './featuresUV';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
                    <Route exact path="/" element={<Marvel />} />
                    <Route exact path="/UV" element={<UV />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App