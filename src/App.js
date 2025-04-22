import React from 'react';

const App = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-blue-600 p-4 text-white text-center">
        <h1 className="text-4xl">Mostafiz Clothing</h1>
        <p className="text-lg">Quality Clothing for Export</p>
      </header>

      <main className="p-8">
        <h2 className="text-2xl font-bold mb-4">About Us</h2>
        <p className="text-lg mb-4">
          Welcome to Mostafiz Clothing, your go-to brand for high-quality clothing exports. We offer a wide range of products tailored to international markets.
        </p>

        <h2 className="text-2xl font-bold mb-4">Our Products</h2>
        <p className="text-lg mb-4">
          We specialize in exporting stylish and durable clothing. Browse our collection to find the best designs for your business.
        </p>

        <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
        <p className="text-lg mb-4">
          Have any questions? Feel free to reach out using the form below or via email.
        </p>
      </main>

      <footer className="bg-blue-600 p-4 text-white text-center">
        <p>&copy; 2025 Mostafiz Clothing. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default App;
