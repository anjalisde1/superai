"use client"
import React, { useState } from "react";
import Image from "next/image";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header
      className="new-nav bg-transparent fixed top-0 left-0 w-full z-50"
      style={{ willChange: "background" }}
    >
      <div className="navigation-container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between py-4">
        {/* Logo */}
        <div className="navigation-logo-container">
          <a href="#" className="logo-container block">
            <Image
              src="/logo.png"
              alt="Spur Logo"
              width={70}
              height={70}
              className="navigation-logo"
            />
          </a>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          {/* <a
            href="https://app.spurtest.com/homepage"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-blue-600 transition font-medium"
          >
            Link
          </a> */}
          <a
            href="https://app.spurtest.com/homepage"
            target="_blank"
            rel="noopener noreferrer"
            className="button bg-blue-600 text-white py-2 px-4 rounded-md  transition"
          >
            Sign In
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div
          className="mobile-hamburger-menu-container md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div className="icon w-icon-nav-menu">
            <span className="block w-6 h-0.5 bg-gray-700 mb-1"></span>
            <span className="block w-6 h-0.5 bg-gray-700 mb-1"></span>
            <span className="block w-6 h-0.5 bg-gray-700"></span>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav className="mobile-navigation-menu bg-white shadow-md md:hidden">
          <div className="space-y-4 p-4">
            <a
              href="https://app.spurtest.com/homepage"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-gray-700 hover:text-blue-600 transition font-medium"
            >
              Link
            </a>
            <a
              href="https://app.spurtest.com/homepage"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-blue-600 text-white text-center py-2 rounded-md hover:bg-blue-700 transition"
            >
              Sign In
            </a>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
