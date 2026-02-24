import AuthorCard from "../components/authorCard";
import Navigation from "../components/nav";
import Subscribe from "../components/subscribe";
import AboutJordan from "../components/aboutJordan";
import AboutCallout from "../components/aboutCallout";
import MobileNav from "../components/mobileNav";
import Footer from "../components/footer";

export const metadata = {
  title: "J. Moureau | Author of the Aster of Warhaven series",
  description:
    "Official author site of J. Moureau, author of the Aster of Warhaven Series.",
};

export default function About() {
  return (
    <div className="main">
      <MobileNav />
      <div className="column">
        <AuthorCard />
        <Navigation />

        <div className="author-image">
          <img src={"/jordan-author.jpg"} />
        </div>
        <div className="hide-on-mobile">
          <Subscribe />
        </div>
      </div>

      <div className="column">
        <AboutJordan />
        <AboutCallout />
        <div className="hide-on-full">
          <Subscribe />
        </div>
      </div>
      <Footer />
    </div>
  );
}
