import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/Scrolltotop';
// Pages
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Contact from './pages/Contact';
import PastProjects from './pages/PastProjects';


// Product Detail Pages
import Door from './pages/Door';
import Plywood from './pages/Plywood';
import Flexi from './pages/Flexi';
import Pvc from './pages/Pvc';
import Mdf from './pages/Mdf';
import Hdmr from './pages/Hdmr';
import Laminates from './pages/Laminates';
import VeneersTeak from './pages/VeneersTeak';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">

          <ScrollToTop />
      
        {/* Navbar */}
        <Navbar />

        {/* Main content */}
        <main className="flex-grow">
          <Routes>
            {/* Main pages */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/past-projects" element={<PastProjects />} />

            {/* Product category pages */}
            <Route path="/products/door" element={<Door />} />
            <Route path="/products/plywood" element={<Plywood />} />
            <Route path="/products/flexi" element={<Flexi />} />
            <Route path="/products/pvc" element={<Pvc />} />
            <Route path="/products/mdf" element={<Mdf />} />
            <Route path="/products/hdmr" element={<Hdmr />} />
            <Route path="/products/laminates" element={<Laminates />} />
            <Route path="/products/veneersteak" element={<VeneersTeak />} />

          </Routes>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
