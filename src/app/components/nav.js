import { FaInstagram } from "react-icons/fa";
import { AiOutlineHome } from "react-icons/ai";

export default function Navigation() {
  return (
    <div className="nav">
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
  );
}
