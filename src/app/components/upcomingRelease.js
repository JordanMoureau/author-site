import { books } from "../books/books";

export default function UpcomingRelease() {
  const latest = books[1];
  if (!latest) return null;

  return (
    <div className="card">
      <div className="row"></div>
      <h2>Upcoming release</h2>

      <p>{latest.excerpt}</p>

      <a className="inline-link" href={`/books/${latest.slug}`}>
        <h4>{latest.cta}</h4>
      </a>
    </div>
  );
}
