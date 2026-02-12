import AuthorCard from "../components/authorCard";
import Navigation from "../components/nav";
import ContactForm from "../components/contactForm";

export const metadata = {
  title: "J. Moureau | Author of the Aster of Warhaven series",
  description:
    "Official author site of J. Moureau, author of the Aster of Warhaven Series.",
};

export default function Contact() {
  return (
    <div className="main">
      <div className="column">
        <AuthorCard />
        <Navigation />
        <ContactForm />
      </div>

      <div className="column-align">
        <div className="card">
          <h2>A note from the author</h2>
          <p>
            As of now, I respond to all letters and DMs personally. I am
            absolutely tickled pink to hear your thoughts about Aster and her
            adventures. If you're debating about sending a message, please do.{" "}
            {":)"}
          </p>
        </div>
      </div>
    </div>
  );
}
