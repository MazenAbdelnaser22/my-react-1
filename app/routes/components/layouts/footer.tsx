// src/components/Footer.jsx
import React from "react";
import { Link } from "react-router";


const Footer = () => {
  return (
    <>
      
    <footer className="bg-orange-50">
    {/* CTA */}
      <div className="bg-orange-500 gap-3 m-auto lg:w-200  flex justify-around text-white py-3   text-center">
        <h2 className="text-2xl font-semibold">Ready to get started?</h2>
      
             <button className=" border border-gray-300 hover:text-gray-700 text-white px-4 py-1.5 rounded-lg shadow-sm hover:bg-gray-100 transition">
              Contact Us
            </button>
      </div>

      {/* Footer Content */}
      <div className="container mx-auto grid md:grid-cols-4 gap-6 py-12 px-6">
        <div>
          <h3 className="text-lg font-bold text-orange-600">BrandBuzz</h3>
          <div className="flex gap-3 mt-3">
            <a href="#">🌐</a>
            <a href="#">📷</a>
            <a href="#">🐦</a>
          </div>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Company</h4>
          <ul className="space-y-2">
            <li><a href="#Services">Services</a></li>
            <li><a href="#Solutions">Solutions</a></li>
            <li><a href="#Agency">Agency</a></li>
            <li><a href="#Testimonials">Testimonials</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Designs</h4>
          <ul className="space-y-2">
            <li><a href="#">Design Contests</a></li>
            <li><a href="#">1-to-1 Projects</a></li>
            <li><a href="#">Find a Designer</a></li>
            <li><a href="#">Pricing</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Resources</h4>
          <ul className="space-y-2">
            <li><a href="#">Blog</a></li>
            <li><a href="#">FAQs</a></li>
            <li><a href="#">Affiliates</a></li>
          </ul>
        </div>
      </div>

      <div className="bg-orange-600 text-center text-white py-3">
        © All rights reserved 2025
      </div>
    </footer>
    </>
  );
};

export default Footer;
