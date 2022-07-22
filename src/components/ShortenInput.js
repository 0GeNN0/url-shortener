import React, { useState } from "react";
import ShortedLink from "./ShortedLink";

const ShortenInput = () => {
  const [link, setLink] = useState('');
  const [error, setError] = useState(false);
  const [validLink, setValidLink] = useState(true);
  const [shortedLinks, setShortedLinks] = useState([]);

  const errorClass = error || !validLink ? 'error' : '';

  const handleChange = (e) => {
    if (e.target.value !== '') {
      setError(false);
      setValidLink(true);
    }

    setLink(e.target.value);
  };

  const handleClick = () => {
    if (link.trim() === '') {
      setError(true);
    } else if (link.match(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/)) {
      const shortLink = async () => {
        const data = await fetch(`https://api.shrtco.de/v2/shorten?url=${link}/very/long/link.html`);
        const res = await data.json();
        setLink('');

        setShortedLinks(prev => [...prev, {
          fullLink: res.result.original_link,
          shortedLink: res.result.full_short_link
        }]);
      };

      shortLink();
    } else {
      setValidLink(false);
    }
  };

  console.log();

  return (
    <div className="shorten-it container">
      <div className="shorten-input">
        <input
          type='text'
          placeholder="Shorten a link here..."
          className={errorClass}
          value={link}
          onChange={(e) => handleChange(e)}
        />
        <button
          className="btn shorten"
          onClick={handleClick}
        >
          Shorten It!
        </button>
        {error && <p className="error">Please add a link</p>}
        {!validLink && <p className="error">Please provide a valid link</p>}
      </div>
      <div className="shorted-links">
        {
          shortedLinks.map((shortedLink, i) =>
            <ShortedLink
              key={i}
              fullLink={shortedLink.fullLink}
              shortedLink={shortedLink.shortedLink}
            />
          )
        }
      </div>
    </div>
  );
};

export default ShortenInput;