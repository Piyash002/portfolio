import { useState } from "react";
import { HashLink } from "react-router-hash-link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", to: "/#home" },
    { name: "About", to: "/#about" },
    { name: "Skills", to: "/#skills" },
    { name: "Projects", to: "/#projects" },
    { name: "Blogs", to: "/#blogs" },
    { name: "Contact", to: "/#contact" },
  ];

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <HashLink
          smooth
          to="/#home"
          className="text-2xl font-bold text-teal-700"
          onClick={() => setIsOpen(false)}
        >
          Piyash.dev
        </HashLink>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <HashLink
              key={link.name}
              smooth
              to={link.to}
              className="text-gray-700 hover:text-teal-600 font-medium transition"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </HashLink>
          ))}
          <a
            href="/piyash's Cv.pdf"
            download
            className="px-4 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700 transition"
          >
            Download CV
          </a>
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          <svg
            className="w-6 h-6 text-gray-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          {navLinks.map((link) => (
            <HashLink
              key={link.name}
              smooth
              to={link.to}
              onClick={() => setIsOpen(false)}
              className="block text-gray-700 hover:text-teal-600"
            >
              {link.name}
            </HashLink>
          ))}
          <a
            href="/resume.pdf"
            download
            className="block text-white bg-teal-600 px-4 py-2 rounded-md text-center"
          >
            Download CV
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
