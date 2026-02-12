import { books } from "../books/books";

export default function LatestNews() {
  const latest = books[0];
  if (!latest) return null;

  return (
    <div className="card">
      <div className="row"></div>
      <h2>Coming Soon</h2>

      <p>{latest.excerpt}</p>

      <a className="inline-link" href={`/books/${latest.slug}`}>
        <h4>{latest.cta}</h4>
      </a>
    </div>
  );
}
