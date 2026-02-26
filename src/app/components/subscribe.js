"use client";

import { useState } from "react";
import { TbSend2 } from "react-icons/tb";

export default function Subscribe() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [message, setMessage] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    setMessage("");

    try {
      const res = await fetch("https://formspree.io/f/meelnpjn", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await res.json().catch(() => ({}));

      if (res.ok) {
        setStatus("success");
        setMessage(
          "You’re in! Check your inbox if a confirmation email is required."
        );
        setEmail("");
      } else {
        setStatus("error");
        setMessage(
          data?.errors?.[0]?.message ||
            "Something went wrong. Double-check the email and try again."
        );
      }
    } catch (err) {
      setStatus("error");
      setMessage("Network error. Try again in a minute.");
    }
  }

  return (
    <div className="card">
      <form onSubmit={handleSubmit} className="row">
        <div className="column">
          <h2>Subscribe To..</h2>
          <p>
            Be the first to hear about release dates, see new covers, get
            exclusive character art, author events, workshops & more...
          </p>
        </div>

        <div className="subscribe">
          <input
            name="email"
            type="email"
            placeholder="email address..."
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            aria-label="Email address"
          />

          <button className="subscribe-button" type="submit">
            <TbSend2 />
          </button>
        </div>

        {message ? (
          <p role="status" style={{ marginTop: "0.75rem" }} aria-live="polite">
            {message}
          </p>
        ) : null}
      </form>
    </div>
  );
}
