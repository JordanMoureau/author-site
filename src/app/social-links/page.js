"use client";

import { useState } from "react";
import Subscribe from "../components/subscribe";

export default function SocialLinks() {
  const [showSubscribe, setShowSubscribe] = useState(false);
  return (
    <div className="social-column">
      {" "}
      <img className="avatar" src="/profile.JPG" />
      <h2>@authorjmoureau</h2>
      <div className="social">
        <a href="https://www.amazon.com/kindle-dbs/hz/subscribe/ku?ref=abpmku_24_4_us_psr_gs_r_mn_rbhab_rbw_rbw_aEcbqxOYNp_rbts&gad_campaignid=9816223125&gbraid=0AAAAADl6rKyW3HRXNr0E_UKUDyMD926JV&gclid=CjwKCAiAkvDMBhBMEiwAnUA9BS85EvqPCo9ldUrSWNsrw1tv0axi12NJ3-065XRjJnQ1sZVYN0fyzhoCilQQAvD_BwE">
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
