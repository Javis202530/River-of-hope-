import React from "react";

function App() {
  return (
    <div className="font-sans text-gray-800">
      {/* Header */}
      <header className="bg-blue-600 text-white p-6 text-center shadow-md">
        <h1 className="text-4xl font-bold">River of Hope Children's Foundation Uganda</h1>
        <p className="text-lg mt-2">
          Giving hope to needy children through education, food, and clothing.
        </p>
      </header>

      {/* Navigation */}
      <nav className="bg-gray-100 p-4 flex justify-center gap-6 shadow-sm sticky top-0">
        <a href="#about" className="hover:text-blue-600">About</a>
        <a href="#gallery" className="hover:text-blue-600">Gallery</a>
        <a href="#aims" className="hover:text-blue-600">Aims</a>
        <a href="#donate" className="hover:text-blue-600">Donate</a>
        <a href="#store" className="hover:text-blue-600">Store</a>
      </nav>

      {/* About Section */}
      <section id="about" className="p-8 max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-blue-600">About Us</h2>
        <p>
          River of Hope Children's Foundation Uganda was founded by{" "}
          <strong>Javis Bbombokka</strong>, who himself was supported by a sponsor
          from primary school to university. Today, as a medical clinical officer,
          he is giving back by helping needy children access school fees, clothing, and food.
        </p>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="p-8 bg-gray-50">
        <h2 className="text-2xl font-bold mb-4 text-blue-600 text-center">Gallery</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div className="bg-gray-200 h-40 flex items-center justify-center">Image 1</div>
          <div className="bg-gray-200 h-40 flex items-center justify-center">Image 2</div>
          <div className="bg-gray-200 h-40 flex items-center justify-center">Image 3</div>
        </div>
      </section>

      {/* Aims Section */}
      <section id="aims" className="p-8 max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-blue-600">Our Aims</h2>
        <ul className="list-disc ml-6 space-y-2">
          <li>Provide access to quality education through school fees support.</li>
          <li>Supply food and clothing to needy children.</li>
          <li>Create opportunities for children to share their talents and crafts.</li>
          <li>Empower the next generation with hope and dignity.</li>
        </ul>
      </section>

      {/* Donate Section */}
      <section id="donate" className="p-8 bg-gray-50 text-center">
        <h2 className="text-2xl font-bold mb-4 text-blue-600">Support Us</h2>
        <p className="mb-6">Your donation helps transform lives of needy children.</p>
        
        <div className="space-y-4">
          {/* PayPal */}
          <a
            href="https://www.paypal.com/donate"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700"
          >
            Donate with PayPal
          </a>

          {/* Card Payment (Stripe placeholder) */}
          <a
            href="https://checkout.stripe.com/pay"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 text-white px-6 py-3 rounded-lg shadow hover:bg-green-700 block"
          >
            Donate with Bank Card
          </a>
        </div>
      </section>

      {/* Store Section */}
      <section id="store" className="p-8 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-blue-600 text-center">Children's Creations Store</h2>
        <p className="text-center mb-6">
          All proceeds go directly to school fees and support for the children.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border p-4 rounded-lg shadow">
            <div className="bg-gray-200 h-40 flex items-center justify-center">Art Piece 1</div>
            <h3 className="font-bold mt-2">Handmade Drawing</h3>
            <p>$10</p>
            <button className="bg-blue-600 text-white px-4 py-2 mt-2 rounded hover:bg-blue-700">
              Buy Now
            </button>
          </div>
          <div className="border p-4 rounded-lg shadow">
            <div className="bg-gray-200 h-40 flex items-center justify-center">Art Piece 2</div>
            <h3 className="font-bold mt-2">Craft Bracelet</h3>
            <p>$15</p>
            <button className="bg-blue-600 text-white px-4 py-2 mt-2 rounded hover:bg-blue-700">
              Buy Now
            </button>
          </div>
          <div className="border p-4 rounded-lg shadow">
            <div className="bg-gray-200 h-40 flex items-center justify-center">Art Piece 3</div>
            <h3 className="font-bold mt-2">Painting</h3>
            <p>$20</p>
            <button className="bg-blue-600 text-white px-4 py-2 mt-2 rounded hover:bg-blue-700">
              Buy Now
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-600 text-white text-center p-4 mt-8">
        <p>© {new Date().getFullYear()} River of Hope Children's Foundation Uganda</p>
      </footer>
    </div>
  );
}

export default App;
