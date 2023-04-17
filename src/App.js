import React from 'react';
import "./App.css";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Header from "./component/Header";
import Home from "./component/Home";
import Footer from "./component/Footer";
import Contact from './component/Contact';
import Services from './component/Services';
import img5 from "./assets/5.png";
import "./component/media.css"

const App = () => {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/contacts" element={<Contact/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/*" element={<img src={img5} alt="Error" />} />
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App


