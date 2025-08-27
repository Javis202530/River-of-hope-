import React from "react";

function App() {
  return (
    <div className="font-sans text-gray-800">
      {/* Header */}
      <header className="bg-blue-600 text-white p-6 text-center shadow-md">
        <h1 className="text-3xl font-bold">River of Hope Children's Foundation Uganda</h1>
        <p className="mt-2 text-lg">Giving hope to the needy through education, care and love.</p>
      </header>

      {/* Navigation */}
      <nav className="bg-gray-100 p-4 flex justify-center space-x-6 shadow-sm">
        <a href="#about" className="hover:text-blue-600">About</a>
        <a href="#gallery" className="hover:text-blue-600">Gallery</a>
        <a href="#aims" className="hover:text-blue-600">Aims</a>
        <a href="#donate" className="hover:text-blue-600">Donate</a>
        <a href="#store" className="hover:text-blue-600">Store</a>
      </nav>

      {/* About */}
      <section id="about" className="p-8 bg-gray-50">
        <h2 className="text-2xl font-bold mb-4 text-blue-600">About Us</h2>
        <p>
          River of Hope Children’s Foundation Uganda was founded by{" "}
          <strong>Javis Bbombokka</strong>, who was supported by a sponsor from
          primary education up to university. Today, as a Clinical Officer, he
          leads this foundation to give back by helping children access{" "}
          <strong>education, clothing, and food</strong>.
        </p>
      </section>

      {/* Gallery */}
      <section id="gallery" className="p-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-600">Gallery</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div className="bg-gray-200 h-40 flex items-center justify-center">Photo 1</div>
          <div className="bg-gray-200 h-40 flex items-center justify-center">Photo 2</div>
          <div className="bg-gray-200 h-40 flex items-center justify-center">Photo 3</div>
        </div>
      </section>

      {/* Aims */}
      <section id="aims" className="p-8 bg-gray-50">
        <h2 className="text-2xl font-bold mb-4 text-blue-600">Our Aims</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Provide school fees and educational materials to needy children.</li>
          <li>Offer food and clothing support for vulnerable families.</li>
          <li>Create opportunities for children to showcase their talents.</li>
          <li>Build a future of hope, dignity, and empowerment.</li>
        </ul>
      </section>

      {/* Donations */}
      <section id="donate" className="p-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-600">Donate</h2>
        <p className="mb-4">Support our mission by making a donation.</p>
        <div className="space-x-4">
          {/* PayPal */}
          <a
            href="https://www.paypal.com/donate"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700"
          >
            Donate with PayPal
          </a>

          {/* Card Payment (Stripe link placeholder) */}
          <a
            href="https://donate.stripe.com/test"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 text-white px-4 py-2 rounded shadow hover:bg-green-700"
          >
            Donate with Card
          </a>
        </div>
      </section>

      {/* Store */}
      <section id="store" className="p-8 bg-gray-50">
        <h2 className="text-2xl font-bold mb-4 text-blue-600">Children’s Creations Store</h2>
        <p className="mb-4">Buy handmade items created by children. All funds support school fees.</p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div className="border p-4 rounded shadow">
            <div className="h-32 bg-gray-200 mb-2 flex items-center justify-center">Item 1</div>
            <p className="font-bold">Handmade Craft</p>
            <p>$10</p>
            <button className="mt-2 bg-blue-600 text-white px-3 py-1 rounded">Buy</button>
          </div>
          <div className="border p-4 rounded shadow">
            <div className="h-32 bg-gray-200 mb-2 flex items-center justify-center">Item 2</div>
            <p className="font-bold">Painting</p>
            <p>$15</p>
            <button className="mt-2 bg-blue-600 text-white px-3 py-1 rounded">Buy</button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-600 text-white text-center p-4 mt-8">
        <p>&copy; {new Date().getFullYear()} River of Hope Children’s Foundation Uganda</p>
      </footer>
    </div>
  );
}

export default App;
