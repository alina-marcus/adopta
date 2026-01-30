// src/Navbar.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import InternalNavRescueOrg from "./InternalNavRescueOrg.jsx";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className="border-b border-[#fa6a02]"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo (left) */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center" aria-label="Adopta home">
              <span className="text-3xl text-[#fa6a02]">Adopta</span>
            </Link>
          </div>

          {/* Desktop Links (right) */}
          <div className="hidden md:flex md:items-center md:space-x-8 text-xl">
            <Link
              to="/hunde"
              className="text-[#4A2F1B] hover:text-[#fa6a02] transition"
            >
              Hunde zur Adoption
            </Link>
            <Link
              to="/tierschutzvereine"
              className="text-[#4A2F1B] hover:text-[#fa6a02] transition"
            >
              Für Tierschutzvereine
            </Link>
            <Link
              to="/ehrenamt-im-tierschutz"
              className="text-[#4A2F1B] hover:text-[#fa6a02] transition"
            >
              Für Vor- und Nachkontrolleur:innen
            </Link>

            {/* 🔥 Burger Menu */}
            <InternalNavRescueOrg />
          </div>

          {/* Mobile Bamburger */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              className="text-[#4A2F1B] hover:text-[#fa6a02] text-2xl focus:outline-none"
            >
              {isOpen ? "✖" : "☰"}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu (collapsible) */}
      {isOpen && (
        <div
          id="mobile-menu"
          className="md:hidden px-4 pb-4 bg-[#FFD8B3] space-y-2"
        >
          <Link
            to="/hunde"
            className="block text-[#4A2F1B] hover:text-[#fa6a02]"
          >
            Hunde
          </Link>
          <Link
            to="/tierschutzvereine"
            className="block text-[#4A2F1B] hover:text-[#fa6a02]"
          >
            Tierschutzvereine
          </Link>
          <Link
            to="/ehrenamt-im-tierschutz"
            className="block text-[#4A2F1B] hover:text-[#fa6a02]"
          >
            Vor- und Nachkontrolleur:innen
          </Link>
        </div>
      )}
    </nav>
  );
}
