import Link from "next/link";
import { posts } from "../blog/posts";

export default function LatestPost() {
  const latest = posts[0];

  if (!latest) return null;

  return (
    <div className="card">
      <h2 className="border-bottom">Latest Post</h2>

      <div className="post-row">
        <h3>{latest.title}</h3>
        <h4>{latest.date}</h4>
      </div>

      <p>{latest.excerpt}</p>

      {latest.img && (
        <img className="latest-blog-img" src={latest.img} alt={latest.title} />
      )}

      <Link className="inline-link" href={`/blog/${latest.slug}`}>
        Read More
      </Link>
    </div>
  );
}
