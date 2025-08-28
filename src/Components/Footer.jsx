import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaXTwitter, FaPhone, FaEnvelope } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-6 mt-8">
      <div className="text-center">
        <p className="mb-4">© {new Date().getFullYear()} River of Hope Children's Foundation</p>
        
        {/* Contact Info */}
        <p className="flex justify-center items-center gap-2">
          <FaEnvelope /> riverofhopechildrensfoundation@gmail.com
        </p>
        <p className="flex justify-center items-center gap-2">
          <FaPhone /> +256701735887
        </p>

        {/* Social Media */}
        <div className="flex justify-center gap-6 mt-4 text-2xl">
          <a href="https://facebook.com" target="_blank" rel="noreferrer"><FaFacebook /></a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer"><FaInstagram /></a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer"><FaLinkedin /></a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer"><FaXTwitter /></a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
