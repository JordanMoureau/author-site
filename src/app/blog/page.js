import AuthorCard from "../components/authorCard";
import LatestPost from "../components/latestPost";
import Navigation from "../components/nav";
import Subscribe from "../components/subscribe";
import AllPosts from "../components/allPosts";
import MobileNav from "../components/mobileNav";
import Footer from "../components/footer";

export const metadata = {
  title: "J. Moureau | Author of the Aster of Warhaven series",
  description:
    "Official author site of J. Moureau, author of the Aster of Warhaven Series.",
};

export default function Blog() {
  return (
    <div className="main">
      <MobileNav />
      <div className="column">
        <AuthorCard />
        <Navigation />
        <AllPosts />
      </div>
      <div className="column">
        <LatestPost />
        <Subscribe />
      </div>
      <Footer />
    </div>
  );
}
