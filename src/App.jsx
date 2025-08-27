import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Shop from "./pages/Shop";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        {/* Navbar */}
        <nav className="bg-blue-700 p-4 text-white flex justify-center space-x-6">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/about" className="hover:underline">About</Link>
          <Link to="/blog" className="hover:underline">Blog</Link>
          <Link to="/shop" className="hover:underline">Shop</Link>
          <Link to="/contact" className="hover:underline">Contact</Link>
        </nav>

        {/* Page Content */}
        <div className="p-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>

        {/* Footer */}
        <footer className="bg-gray-800 text-white text-center p-4 mt-8">
          © {new Date().getFullYear()} River of Hope Children’s Foundation. All rights reserved.
        </footer>
      </div>
    </Router>
  );
}

export default App;
