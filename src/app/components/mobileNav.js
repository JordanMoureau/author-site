import { HiOutlineMenu } from "react-icons/hi";
import { FaInstagram } from "react-icons/fa";
import { AiOutlineHome } from "react-icons/ai";

export default function MobileNav() {
  return (
    <>
      <div className="mobile-nav">
        <button className="button" aria-label="Open menu">
          <HiOutlineMenu size={28} />
        </button>

        <div className="hidden">
          <a className="button" href="/">
            <AiOutlineHome />
          </a>

          <a className="button" href="/about-the-author">
            about the author
          </a>

          <a className="button" href="/books">
            books
          </a>

          <a className="button" href="/blog">
            blog
          </a>
          <a className="button" href="/contact">
            contact
          </a>
          <a
            className="button"
            href="https://instagram.com/authorjmoureau"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </>
  );
}
