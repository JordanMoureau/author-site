import Footer from "./components/footer";
import Navigation from "./components/nav";

export const metadata = {
  title: "J. Moureau | Author of the Aster of Warhaven series",
  description:
    "Official author site of J. Moureau, author of the Aster of Warhaven Series.",
};

export default function Home() {
  return (
    <>
      <div className="card">
        <div className="hero">
          <img className="avatar" src="/profile.JPG" />
          <div className="hero-column">
            <div className=" status ">
              <span className="dot" />
              Currently Editing
            </div>
            <div className="header-text">
              <h1>J. Moureau</h1>
              <div className="sub-head">
                Author of the aster of warhaven series
              </div>
            </div>
          </div>
        </div>
      </div>
      <Navigation />

      <div className="card">
        <h2 className="border-bottom">Coming Soon</h2>

        <h3>Aster of Warhaven</h3>
        <p>
          In Aster's family, war is their love language. So when her mom leaves
          her newborn at the doorstep of the most notorious band of mercenaries
          then disappears without a trace, no on ebats an eye.
          <br />
          <br />
          Sixteen years later, Aster is a bit salty. Deep in the throes of teen
          rebellion, she heads out on her first real job as an ordained
          mercenary. She's got the wind in her brigandine and she's not looking
          back...
        </p>

        <a className="inline-link" href="/">
          Read Aster
        </a>
      </div>

      <div className="card">
        <div className="row">
          <div className="column">
            <h2>Subscribe To..</h2>
            <p>
              ...be the first to hear about release dates, see new covers, get
              exclusive character art, author events, workshops & more...
            </p>
          </div>
          <input placeholder="email address..." />
        </div>
      </div>
    </>
  );
}
