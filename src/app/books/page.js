import AuthorCard from "../components/authorCard";
import LatestNews from "../components/latestNews";
import Navigation from "../components/nav";
import Subscribe from "../components/subscribe";
import MobileNav from "../components/mobileNav";
import Footer from "../components/footer";

export const metadata = {
  title: "J. Moureau | Author of the Aster of Warhaven series",
  description:
    "Official author site of J. Moureau, author of the Aster of Warhaven Series.",
};

export default function Books() {
  return (
    <div className="main">
      <MobileNav />
      <div className="column">
        <AuthorCard />
        <Navigation />

        <LatestNews />
        {/* <UpcomingRelease /> */}
        <Subscribe />
      </div>
      <Footer />
    </div>
  );
}
