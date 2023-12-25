


import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import SubNavbar from './components/SubNavbar';
import Registration from './components/Registration';



function App() {
  
  return (
    <Router>
      <>
        <Navbar />
        <SubNavbar />
        <Registration/>
       
      </>
    </Router>
  );
}

export default App;
