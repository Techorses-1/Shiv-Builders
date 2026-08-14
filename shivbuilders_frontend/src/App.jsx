import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";


import "./App.css";
import Footer from "./Components/Footer/Footer";
import About from "./Pages/About/About";
import Residential from "./Pages/Residential/Residential";
import Contact from "./Pages/Contact/Contact";
import ScrollToTop from "./Components/GoToTop/ScrollToTop";

const App = () => {
  return (
    <Router>
      <ScrollToTop />
    
      <Navbar />

      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<About />} />
        <Route path="/project" element={<Residential />} />
        <Route path="/contact" element={<Contact />} />
        
      </Routes>
      <Footer/> 
    </Router>
  );
};

export default App;
