"use client";
import { MdMenu, MdMenuOpen } from "react-icons/md";
import React, { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full sticky top-0 z-50">
      <nav className="bg-blue-800 text-white p-4 shadow-lg">
        <div className="flex items-center justify-between ml-auto mr-auto px-8">
          <a href="#" className="text-2xl font-bold">
            El Kursus
          </a>
          <button
            className="block text-block cursor-pointer md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <MdMenuOpen className="text-3xl" />
            ) : (
              <MdMenu className="text-3xl" />
            )}
          </button>
          <ul
            className={`md:flex md:space-x-6 absolute md:items-center md:static top-16 left-0 w-full bg-gradient-to-b from-blue-800 to-blue-600 md:w-auto md:bg-transparent md:flex-row transition-all duration-100 ease-in-out ${
              isOpen ? "h-[200px]" : "h-[0px]"
            } `}
          >
            <li>
              <a
                href="#"
                className={`block ${
                  isOpen ? "" : "max-md:hidden"
                } transition-all duration-300 ease-in-out px-6 py-3 hover:text-blue-300`}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`block ${
                  isOpen ? "" : "max-md:hidden"
                } transition-all duration-300 ease-in-out px-6 py-3 hover:text-blue-300`}
              >
                Tentang
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`block ${
                  isOpen ? "" : "max-md:hidden"
                } transition-all duration-300 ease-in-out px-6 py-3 hover:text-blue-300`}
              >
                Course
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`block ${
                  isOpen ? "" : "max-md:hidden"
                } transition-all duration-300 ease-in-out px-6 py-3 hover:text-blue-300`}
              >
                Kontak
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
