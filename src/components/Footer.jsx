import React from "react";
import { Link } from "react-router-dom";
import { Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";
import logo from "../assests/logo.png";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-green-900 via-green-800 to-amber-800 text-white mt-16">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          
          {/* Company Info */}
          <div className="flex flex-col items-start space-y-4">
            <div className="flex items-center space-x-3">
              <img src={logo} alt="GRPS Logo" className="w-14 h-14 rounded-md shadow-md" />
              <h3 className="text-2xl font-bold text-amber-400">
                GRPS <br /> Plywood & Laminates
              </h3>
            </div>
            <p className="text-green-100 leading-relaxed">
              At GRPS, we deliver top-quality plywood, laminates, and interior solutions.
              With decades of trust and craftsmanship, we’re proud to serve clients
              across Delhi NCR and India with durability and elegance.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-4 text-amber-400">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-green-100 hover:text-white transition">Home</Link></li>
              <li><Link to="/about" className="text-green-100 hover:text-white transition">About</Link></li>
              <li><Link to="/products" className="text-green-100 hover:text-white transition">Products</Link></li>
              <li><Link to="/project" className="text-green-100 hover:text-white transition">Project</Link></li>
              <li><Link to="/contact" className="text-green-100 hover:text-white transition">Contact</Link></li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-xl font-semibold mb-4 text-amber-400">Our Products</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-green-100 hover:text-white transition">Marine Plywood</a></li>
              <li><a href="#" className="text-green-100 hover:text-white transition">Commercial Plywood</a></li>
              <li><a href="#" className="text-green-100 hover:text-white transition">Decorative Laminates</a></li>
              <li><a href="#" className="text-green-100 hover:text-white transition">Blockboards</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-semibold mb-4 text-amber-400">Contact Info</h4>
            <ul className="space-y-3 text-green-100">
              <li className="flex items-center">
                <MapPin className="w-5 h-5 mr-3 text-amber-400" />
                A-1/22, Marble Market, Kirti Nagar, New Delhi - 110018
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-amber-400" />
                <a href="mailto:grps0872@gmail.com" className="hover:text-white">grps0872@gmail.com</a>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-amber-400" />
                <a href="tel:+919811060872" className="hover:text-white">+91 98110 60872</a>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-amber-400" />
                <a href="tel:+917827060872" className="hover:text-white">+91 78270 60872</a>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-amber-400" />
                <a href="tel:01145721543" className="hover:text-white">011-4572 1543</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Links */}
        <div className="mt-10 flex justify-center space-x-8">
          <a
            href="https://www.instagram.com/grps_interiors?igsh=anY4NTRvM2tobW1t&utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform duration-300"
          >
            <Instagram className="w-7 h-7 text-amber-400 hover:text-white" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform duration-300"
          >
            <Twitter className="w-7 h-7 text-amber-400 hover:text-white" />
          </a>
        </div>

        {/* Copyright */}
        <div className="border-t border-green-700 mt-10 pt-6 text-center">
          <p className="text-green-100 text-sm">
            © {new Date().getFullYear()} GRPS Plywood & Laminates. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
