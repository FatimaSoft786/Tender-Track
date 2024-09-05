import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from './components/Navbar';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Footer from "./components/Footer"
import Services from './pages/Services';
import Partners from './pages/Partners';

class App extends Component {
  render() {
    return (
  <Router>
    <NavBar/>
    <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route exact path='/contact' element={<Contact/>}/>
      <Route exact path='/services' element={<Services/>}/>
      <Route exact path='/partners' element={<Partners/>}/>
    </Routes>
    <Footer/>
  </Router>
    );
  }
}

export default App;
