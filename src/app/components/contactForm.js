"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [message, setMessage] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    setMessage("");

    const formData = new FormData(e.target);

    try {
      const res = await fetch("https://formspree.io/f/xojnrpab", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (res.ok) {
        setStatus("success");
        setMessage("Message sent! I’ll be in touch soon.");
        e.target.reset();
      } else {
        setStatus("error");
        setMessage("Something went wrong. Try again?");
      }
    } catch (err) {
      setStatus("error");
      setMessage("Network error. Try again in a minute.");
    }
  }

  return (
    <div className="card">
      <form onSubmit={handleSubmit}>
        <input
          className="width-quarter"
          name="name"
          placeholder="Your Name..."
          required
        />

        <input
          className="width-half"
          type="email"
          name="email"
          placeholder="your email address..."
          required
        />

        <textarea name="message" placeholder="your message..." required />

        <div className="row">
          <input type="checkbox" name="subscribe" value="yes" />
          <div className="sub-head">
            subscribe me to the mailing list, please
          </div>
        </div>

        <button
          type="submit"
          className="button"
          disabled={status === "sending"}
        >
          {status === "sending" ? "Sending..." : "Send It!"}
        </button>

        {message && <p style={{ marginTop: "0.75rem" }}>{message}</p>}
      </form>
    </div>
  );
}
