export const metadata = {
  title: "Jordan Moureau | Author (Coming Soon)",
  description: "Official author site for Jordan Moureau. Coming soon.",
};

export default function Home() {
  return (
    <main className="page">
      <div className="container">
        <header className="hero">
          <div className="heroText">
            <div className="badge">
              <span className="dot" aria-hidden="true" />
              Coming soon
            </div>

            <h1 className="title">Jordan Moureau</h1>

            <p className="lede">
              I’m a Young Adult fantasy author currently working on finding a
              home for my debut novel. This site will grow as things progress.
            </p>
          </div>
          <div className="avatarWrap" aria-hidden="true">
            <img className="avatarImg" src="/profile.JPG" alt="" />
          </div>
        </header>
        <section className="card">
          <h2 className="cardTitle">Status</h2>
          <p className="callout status">
            Probably writing a pain-in-the-ass heroine and mouthing off at the
            nearest authority figure.
          </p>
        </section>

        <section className="card">
          <h2 className="cardTitle">What’s coming</h2>

          <ul className="list">
            <li>Updates on current and future projects</li>
            <li>Book announcements</li>
            <li>Newsletter signup (eventually)</li>
          </ul>

          <div className="callout">
            <p className="calloutText">
              For now, the best place to follow along is Instagram.
            </p>

            <a
              className="button"
              href="https://instagram.com/writermoureau"
              target="_blank"
              rel="noopener noreferrer"
            >
              @writermoureau
            </a>
          </div>
        </section>

        <div className="divider" aria-hidden="true">
          <span className="dividerLine" />
          <span className="dividerEmoji">♥️🗡️ 🌞</span>
          <span className="dividerLine" />
        </div>

        <footer className="footer">
          © {new Date().getFullYear()} Jordan Moureau
        </footer>
      </div>
    </main>
  );
}
