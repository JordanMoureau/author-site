export default function AuthorCard() {
  return (
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
  );
}
