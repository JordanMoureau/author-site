import { notFound } from "next/navigation";
import MdxClient from "../../components/mdxClient";
import { posts } from "../posts";

export const metadata = {
  title: "J. Moureau | Author of the Aster of Warhaven series",
  description:
    "Official author site of J. Moureau, author of the Aster of Warhaven Series.",
};

export default async function BlogPostPage({ params }) {
  const post = posts.find((p) => p.slug === params.slug);
  if (!post) return notFound();

  let MDXContent;
  try {
    const mod = await import(`./content/${post.slug}.mdx`);
    MDXContent = mod.default;
  } catch {
    return notFound();
  }

  return (
    <main>
      <h1>{post.title}</h1>
      <p>{post.date}</p>
    </main>
  );
}
