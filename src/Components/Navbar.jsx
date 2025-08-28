import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-blue-700 p-4 text-white flex flex-wrap gap-4">
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
  );
}

export default Navbar;
