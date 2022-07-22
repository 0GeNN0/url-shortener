import React, { useState } from "react";

const ShortedLink = ({ fullLink, shortedLink }) => {
  const [copied, setCopied] = useState(false);

  return (
    <div className="single-shorted-link">
      <p className="full-link">{fullLink}</p>
      <div className="to-right">
        <p className="shorted-link">{shortedLink}</p>
        <button
          className={`btn ${copied ? 'copy copied' : 'copy'}`}
          onClick={() => {
            setCopied(true);
            navigator.clipboard.writeText(shortedLink);
          }}
        >
          {copied ? 'copied!' : 'copy'}
        </button>
      </div>
    </div>
  );
};

export default ShortedLink;