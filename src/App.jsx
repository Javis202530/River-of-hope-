import React from "react";
import "./App.css";

function App() {
  return (
    <div className="app">
      {/* Top Navigation */}
      <header className="header">
        <img src="/logo.png" alt="Foundation Logo" className="logo" />
        <nav>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#gallery">Gallery</a>
          <a href="#donate">Donate</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="hero">
        <h1>River of Hope Children's Foundation Uganda</h1>
        <p>Giving hope to the needy through education, care, and love ❤️</p>
      </section>

      {/* About Section */}
      <section id="about" className="section">
        <h2>About Us</h2>
        <p>
          River of Hope Children's Foundation Uganda was founded by 
          <strong> Javis Bboohonka</strong>, who was supported by a sponsor 
          from primary education up to university. Today, as a Clinical Officer, 
          he leads this foundation to give back by helping children access 
          <strong> education, clothing, and food</strong>.
        </p>
      </section>

      {/* Gallery */}
      <section id="gallery" className="section">
        <h2>Gallery</h2>
        <p>📸 Coming soon! (We’ll add photos here)</p>
      </section>

      {/* Donate Section */}
      <section id="donate" className="section donate">
        <h2>Support Our Mission</h2>
        <p>You can make a difference. Donate via:</p>
        <ul>
          <li>💳 Bank Card</li>
          <li>📲 Mobile Money</li>
          <li>🌍 PayPal</li>
        </ul>
        <button className="donate-btn">Donate Now</button>
      </section>

      <footer className="footer">
        <p>© 2025 River of Hope Children's Foundation Uganda</p>
      </footer>
    </div>
  );
}

export default App;
