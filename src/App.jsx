import React from "react";
import Home from "./Home";
import About from "./About";
import Services from "./Services";
import Contact from "./Contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import AppProvider from "./Context";
import JsonServer from "./JsonServer";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <AppProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/jsonserver" element={<JsonServer />} />
        </Routes>
      </AppProvider>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
