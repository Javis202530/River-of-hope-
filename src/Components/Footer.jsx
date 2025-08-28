import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white text-center p-4">
      <p>© {new Date().getFullYear()} River of Hope Children’s Foundation</p>
      <p className="mt-2 text-sm">
        Built with ❤️ to support our mission
      </p>
    </footer>
  );
}

export default Footer;
