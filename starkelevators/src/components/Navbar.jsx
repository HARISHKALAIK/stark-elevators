
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, ArrowUpRight } from "lucide-react";
import logo from "../assets/logo.jpg";
import { FaWhatsapp } from "react-icons/fa";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Products", path: "/products" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-500 ${
        scrolled ? "px-4 pt-3 md:px-8" : "px-0 pt-0"
      }`}
    >
      <nav
        className={`relative mx-auto flex items-center justify-between bg-white px-4 shadow-lg transition-all duration-500 md:px-8 lg:px-10 ${
          scrolled
            ? "max-w-7xl rounded-2xl py-3 shadow-black/10"
            : "w-full rounded-none py-4 md:py-5"
        }`}
      >
        {/* Logo */}
        <NavLink
          to="/"
          aria-label="STARK Nextgen Elevators home"
          className="group flex shrink-0 items-center"
        >
          <img
            src={logo}
            alt="STARK Nextgen Elevators"
            className={`w-auto object-contain transition-all duration-500 group-hover:scale-105 ${
              scrolled
                ? "h-16 max-w-[220px] md:h-20 md:max-w-[260px]"
                : "h-20 max-w-[240px] md:h-24 md:max-w-[300px]"
            }`}
          />
        </NavLink>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-2 md:flex lg:gap-5">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              end={link.path === "/"}
              className={({ isActive }) =>
                `group relative overflow-hidden px-3 py-3 text-sm font-bold transition-all duration-300 lg:px-4 lg:text-base ${
                  isActive
                    ? "translate-y-0 text-red-600"
                    : "text-blue-950 hover:-translate-y-1 hover:text-red-600"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {/* Navigation Text */}
                  <span className="relative z-10 inline-flex items-center gap-1">
                    {link.name}

                    <ArrowUpRight
                      size={14}
                      className="opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
                    />
                  </span>

                  {/* Animated Underline */}
                  <span
                    className={`absolute bottom-1 left-1/2 h-[3px] -translate-x-1/2 rounded-full bg-red-600 transition-all duration-300 ease-out ${
                      isActive
                        ? "w-3/4"
                        : "w-0 group-hover:w-3/4"
                    }`}
                  />

                  {/* Subtle Hover Background */}
                  <span className="absolute inset-0 -z-0 rounded-lg bg-red-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </>
              )}
            </NavLink>
          ))}
          
{/* WhatsApp Navigation Link */}
{/* <a
  href="https://wa.me/919876543210"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Chat with us on WhatsApp"
  className="group relative ml-2 inline-flex items-center justify-center rounded-lg border-1 border-green-600 px-3 py-3 text-green-700 transition-all duration-300 hover:-translate-y-1 hover:border-green-700 hover:text-green-700 lg:px-4"
>
  WhatsApp
  <FaWhatsapp
    size={23}
    className="transition-transform duration-300 group-hover:scale-110"
  />

  <span className="absolute bottom-1 left-1/2 h-[3px] w-0 -translate-x-1/2 rounded-full bg-red-600 transition-all duration-300 group-hover:w-3/4" />
</a> */}


        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((prev) => !prev)}
          className="rounded-xl bg-blue-950 p-3 text-white transition-all duration-300 hover:scale-105 hover:bg-red-600 active:scale-95 md:hidden"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation */}
        <div
          className={`absolute left-3 right-3 top-full mt-3 overflow-hidden rounded-2xl bg-white shadow-xl ring-1 ring-black/5 transition-all duration-300 md:hidden ${
            menuOpen
              ? "visible max-h-96 translate-y-0 opacity-100"
              : "invisible max-h-0 -translate-y-2 opacity-0"
          }`}
        >
          <div className="space-y-1 p-3">
            {navLinks.map((link, index) => (
              <NavLink
                key={link.name}
                to={link.path}
                end={link.path === "/"}
                onClick={() => setMenuOpen(false)}
                style={{
                  transitionDelay: menuOpen ? `${index * 50}ms` : "0ms",
                }}
                className={({ isActive }) =>
                  `group flex items-center justify-between rounded-xl px-4 py-3 font-bold transition-all duration-300 hover:translate-x-1 hover:bg-red-50 hover:text-red-600 ${
                    isActive
                      ? "bg-red-50 text-red-600"
                      : "text-blue-950"
                  }`
                }
              >
                {link.name}

                <ArrowUpRight
                  size={18}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </NavLink>
            ))}

            <NavLink
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-center gap-2 rounded-xl bg-red-600 px-4 py-3 font-bold text-white transition-all duration-300 hover:bg-blue-950 active:scale-95"
            >
              Get a Quote
              <ArrowUpRight size={18} />
            </NavLink>
          </div>
        </div>
      </nav>
    </header>
  );
}

