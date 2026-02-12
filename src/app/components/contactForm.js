export default function ContactForm() {
  return (
    <div className="card">
      <form>
        <input className="width-quarter" placeholder="Your Name..." />
        <input className="width-half" placeholder="your email address..." />
        <textarea placeholder="your message..." />

        <div className="row">
          <input type="checkbox" value="yes" />
          <div className="sub-head">
            subscribe me to the mailing list, please
          </div>
        </div>
        <button className="button">Send It!</button>
      </form>
    </div>
  );
}
