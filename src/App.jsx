import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

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
        <nav className="bg-blue-700 p-4 text-white flex gap-4">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/about" className="hover:underline">About</Link>
          <Link to="/blog" className="hover:underline">Blog</Link>
          <Link to="/artisticwork" className="hover:underline">Artistic Work</Link>
          <Link to="/bangles" className="hover:underline">Bangles</Link>
          <Link to="/crafts" className="hover:underline">Crafts</Link>
          <Link to="/tshirts" className="hover:underline">T-shirts</Link>
          <Link to="/capes" className="hover:underline">Caps</Link>
          <Link to="/contact" className="hover:underline">Contact</Link>
        </nav>

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
        <footer className="bg-gray-800 text-white text-center p-4">
          © {new Date().getFullYear()} River of Hope Children’s Foundation
        </footer>
      </div>
    </Router>
  );
}

export default App;
