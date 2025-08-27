import React from "react";

function App() {
  return (
    <div className="font-sans text-gray-800">
      {/* Header */}
      <header className="bg-blue-600 text-white p-6 text-center">
        <h1 className="text-3xl font-bold">River of Hope Children's Foundation Uganda</h1>
        <p className="text-lg mt-2">Giving every child a chance through education, food, and love</p>
      </header>

      {/* Navigation */}
      <nav className="bg-gray-100 p-4 flex justify-center space-x-6">
        <a href="#about" className="hover:text-blue-600">About</a>
        <a href="#gallery" className="hover:text-blue-600">Gallery</a>
        <a href="#aims" className="hover:text-blue-600">Aims</a>
        <a href="#donate" className="hover:text-blue-600">Donate</a>
        <a href="#store" className="hover:text-blue-600">Store</a>
      </nav>

      {/* About Section */}
      <section id="about" className="p-8 bg-gray-50">
        <h2 className="text-2xl font-bold mb-4">About Us</h2>
        <p>
          Founded by <strong>Javis Bbombokka</strong>, who was supported through education
          from primary to university, River of Hope Children’s Foundation is dedicated
          to helping needy children access school fees, clothing, food, and education.
        </p>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="p-8">
        <h2 className="text-2xl font-bold mb-4">Gallery</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <img src="https://placehold.co/300x200" alt="Child 1" className="rounded-lg shadow" />
          <img src="https://placehold.co/300x200" alt="Child 2" className="rounded-lg shadow" />
          <img src="https://placehold.co/300x200" alt="Child 3" className="rounded-lg shadow" />
        </div>
      </section>

      {/* Aims Section */}
      <section id="aims" className="p-8 bg-gray-50">
        <h2 className="text-2xl font-bold mb-4">Our Aims</h2>
        <ul className="list-disc list-inside">
          <li>Provide school fees and learning materials.</li>
          <li>Offer nutritious meals to children in need.</li>
          <li>Clothe children with dignity.</li>
          <li>Support children’s creativity and talents.</li>
        </ul>
      </section>

      {/* Donations Section */}
      <section id="donate" className="p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Donate</h2>
        <p className="mb-4">Support our mission by donating through PayPal or bank card.</p>
        <a href="https://www.paypal.com/donate" 
           className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700">
          Donate Now
        </a>
      </section>

      {/* Store Section */}
      <section id="store" className="p-8 bg-gray-50">
        <h2 className="text-2xl font-bold mb-4">Children’s Creations Store</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div className="p-4 border rounded-lg shadow">
            <img src="https://placehold.co/200x150" alt="Craft 1" className="mb-2 rounded" />
            <p className="font-bold">Handmade Bracelet</p>
            <p className="text-sm">UGX 10,000</p>
            <button className="bg-green-600 text-white mt-2 px-4 py-2 rounded hover:bg-green-700">
              Buy Now
            </button>
          </div>
          <div className="p-4 border rounded-lg shadow">
            <img src="https://placehold.co/200x150" alt="Craft 2" className="mb-2 rounded" />
            <p className="font-bold">Drawing</p>
            <p className="text-sm">UGX 5,000</p>
            <button className="bg-green-600 text-white mt-2 px-4 py-2 rounded hover:bg-green-700">
              Buy Now
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-600 text-white text-center p-4 mt-8">
        <p>© {new Date().getFullYear()} River of Hope Children’s Foundation Uganda</p>
      </footer>
    </div>
  );
}

export default App;
