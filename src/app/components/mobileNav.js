"use client";

import { useState } from "react";
import { HiOutlineMenu } from "react-icons/hi";
import { FaInstagram } from "react-icons/fa";
import { AiOutlineHome } from "react-icons/ai";

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mobile-nav">
      <div className="mobile-button">
        <button
          className="button"
          aria-label="Toggle menu"
          onClick={() => setIsOpen(!isOpen)}
        >
          <HiOutlineMenu size={28} />
        </button>
      </div>

      <div className={`mobile-menu card ${isOpen ? "open" : ""}`}>
        <a className="button" href="/" onClick={() => setIsOpen(false)}>
          <AiOutlineHome />
        </a>

        <a
          className="button"
          href="/about-the-author"
          onClick={() => setIsOpen(false)}
        >
          about the author
        </a>

        <a className="button" href="/books" onClick={() => setIsOpen(false)}>
          books
        </a>

        <a className="button" href="/blog" onClick={() => setIsOpen(false)}>
          blog
        </a>

        <a className="button" href="/contact" onClick={() => setIsOpen(false)}>
          contact
        </a>

        <a
          className="button"
          href="https://instagram.com/authorjmoureau"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setIsOpen(false)}
        >
          <FaInstagram />
        </a>
      </div>
    </div>
  );
}
