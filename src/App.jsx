import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Artisticwork from "./pages/Artisticwork";
import Bangles from "./pages/Bangles";
import Crafts from "./pages/Crafts";
import Tshirts from "./pages/Tshirts";
import Capes from "./pages/Capes";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 flex flex-col">
        {/* Navbar */}
        <Navbar />

        {/* Page Content */}
        <div className="p-6 flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/artisticwork" element={<Artisticwork />} />
            <Route path="/bangles" element={<Bangles />} />
            <Route path="/crafts" element={<Crafts />} />
            <Route path="/tshirts" element={<Tshirts />} />
            <Route path="/capes" element={<Capes />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
