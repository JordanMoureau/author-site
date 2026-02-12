import { posts } from "../blog/posts";
import Link from "next/link";

export default function AllPosts() {
  return (
    <div className="scroll">
      {posts.map((post) => (
        <div className="card" key={post.slug}>
          <div className="post-preview">
            <h2>
              <Link href={`/blog/${post.slug}`}>{post.title}</Link>
            </h2>
            <p>{post.excerpt}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
