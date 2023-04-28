
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from '../SharedComponents/Header/Header';
import Tutorial from '../TutorialPage/Tutorial'
import Main from '../Main/Main';
import Footer from '../SharedComponents/Footer/index';




function App() {
  return (
  <Router>
    <Header/>
    <Routes>
       <Route path='/' exact Component={Main}/>
       <Route path='/home' exact Component={Main}/>
       <Route path='/tutorial' exact Component={Tutorial}/>
       <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
    <Footer/>
  </Router>
  );
}

export default App;
