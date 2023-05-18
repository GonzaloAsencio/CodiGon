import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Tutorial from '../TutorialPage/Tutorial';
import Main from '../Main/Main';
import Contact from '../Contact/Contact';

function App() {
  return (
  <Router>
    <Routes>
       <Route path='/' exact Component={Main}/>
       <Route path='/tutorial' exact Component={Tutorial}/>
       <Route path='/contact' exact Component={Contact}/>
       <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  </Router>
  );
}

export default App;
