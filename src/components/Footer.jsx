import React from "react";

const Footer = () => (
  <footer className="bg-gray-50 sm:pt-14 pt-3 pb-7">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between sm:gap-10 px-4">
      {/* Logo and slogan */}
      <div>
<img src="/logo.png" alt="" className="w-30" />
        <div className="mb-20 text-gray-500 text-lg">An AI-Personalized Mentor </div>
        
      </div>
      {/* Link columns */}
      <div className="grid grid-cols-3 gap-x-12 gap-y-1 w-full md:w-auto">
        <div className="flex flex-col gap-2">
          <a href="#" className="!text-gray-700 hover:text-blue-700">About</a>
          <a href="#" className="!text-gray-700 hover:text-blue-700">Features</a>
          <a href="#" className="!text-gray-700 hover:text-blue-700">Pricing</a>
          <a href="#" className="!text-gray-700 hover:text-blue-700">Contact</a>
          <a href="#" className="!text-gray-700 hover:text-blue-700">Blog</a>
        </div>
        <div className="flex flex-col gap-2">
          <a href="#" className="!text-gray-700 hover:text-blue-700">Documentation</a>
          <a href="#" className="!text-gray-700 hover:text-blue-700">FAQ</a>
          <a href="#" className="!text-gray-700 hover:text-blue-700">Support</a>
        </div>
        <div className="flex flex-col gap-2">
          <a href="#" className="!text-gray-700 hover:text-blue-700">X (Twitter)</a>
          <a href="#" className="!text-gray-700 hover:text-blue-700">LinkedIn</a>
          <a href="#" className="!text-gray-700 hover:text-blue-700">YouTube</a>
        </div>
      </div>
    </div>
    {/* Bottom bar */}
    <div className="border-t border-gray-200 mt-12 sm:pt-5 pt-1 flex flex-col md:flex-row md:justify-between items-center text-gray-500 text-sm max-w-7xl mx-auto px-4">
      <span>&copy; 2025 Akiro. All rights reserved</span>
      <div className="flex gap-8 mt-2 md:mt-0">
        <a href="#" className="hover:text-blue-700">Privacy Policy</a>
        <a href="#" className="hover:text-blue-700">Terms of Use</a>
      </div>
    </div>
  </footer>
);

export default Footer;
