import AboutJordan from "./components/aboutJordan";
import AuthorCard from "./components/authorCard";
import Footer from "./components/footer";
import LatestNews from "./components/latestNews";
import LatestPost from "./components/latestPost";
import Navigation from "./components/nav";
import Subscribe from "./components/subscribe";

export const metadata = {
  title: "J. Moureau | Author of the Aster of Warhaven series",
  description:
    "Official author site of J. Moureau, author of the Aster of Warhaven Series.",
};

export default function Home() {
  return (
    <div className="main">
      <div className="column">
        <AuthorCard />
        <Navigation />

        <LatestNews />

        <Subscribe />
        <LatestPost />
      </div>
    </div>
  );
}
