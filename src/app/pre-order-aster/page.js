"use client";

import { useState } from "react";
import Subscribe from "../components/subscribe";

export default function PreOrderAster() {
  const [showSubscribe, setShowSubscribe] = useState(false);
  return (
    <div className="social-column">
      {" "}
      <img className="avatar" src="/profile.JPG" />
      <h2>@authorjmoureau</h2>
      <div className="social">
        <a href="https://www.amazon.com/dp/B0GQ9CKKGN?ref=sp_email">
          ✨ Pre-Order Aster of Warhaven on Kindle ✨
        </a>
      </div>
      {!showSubscribe && (
        <div className="social">
          <a onClick={() => setShowSubscribe(true)}>
            ✨ Paperback Releasing March 7th | Get Notified ✨
          </a>
        </div>
      )}
      {showSubscribe && (
        <div className={`subscribe-wrapper ${showSubscribe ? "open" : ""}`}>
          <Subscribe />
        </div>
      )}
      <div className="social">
        <a href="/about-the-author">✨ About the Author ✨ </a>
      </div>
    </div>
  );
}
