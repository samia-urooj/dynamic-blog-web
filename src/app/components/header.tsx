"use client";

import React from "react";

const Header = () => {
  const toggleMenu = () => {
    const menu = document.getElementById("mobileMenu");
    if (menu) {
      menu.classList.toggle("hidden");
    }
  };

  return (
    <header className="bg-pink-600 text-white">
      <div className="container mx-auto flex items-center justify-between p-4">
        
        <div className="text-2xl font-bold">Blog Care!</div>
      
        <nav>
          <ul className="hidden md:flex space-x-6 font-medium">
            <li>
              <a
                href="/"
                className="hover:text-purple-300 transition-colors"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/blogpage"
                className="hover:text-purple-300 transition-colors"
              >
                Blog
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="hover:text-purple-300 transition-colors"
              >
                About
              </a>
            </li>
        
            <li>
              <a
                href="/contact"
                className="hover:text-purple-300 transition-colors"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <button
            id="menuButton"
            className="text-white focus:outline-none"
            onClick={toggleMenu}
          >
            ☰
          </button>
        </div>
      </div>
      {/* Mobile Navigation */}
      <div id="mobileMenu" className="md:hidden hidden bg-pink-700">
        <ul className="flex flex-col space-y-2 p-4">
          <li>
            <a
              href="/"
              className="hover:text-purple-300 transition-colors"
            >
              Home
            </a>
          </li>

    <li>
            <a
              href="/blogpage"
              className="hover:text-purple-300 transition-colors"
            >
              Blog
            </a>
          </li>
       
          

          <li>
            <a
              href="/about"
              className="hover:text-purple-300 transition-colors"
            >
              About
              </a>
          </li>
      <li>
            <a
              href="/contact"
              className="hover:text-purple-300 transition-colors"
            >
              Contact Us
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;



