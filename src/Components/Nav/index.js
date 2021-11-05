import React from "react";

function Nav() {
  return (
    <div className="nav-container">
      <img
        id="logo"
        alt="genshin tools logo"
        src="https://i.pinimg.com/736x/86/40/a7/8640a76a2ab3a76024d631247c16733b.jpg"
      />
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/Teams">Teams</a>
        </li>
        <li>
          <a href="/Dailies">Dailies</a>
        </li>
        <li>
          <a href="/">Community</a>
        </li>
        <img
          alt="user pfp"
          src="https://64.media.tumblr.com/e7411ddc436fd30456a5231a463f97a9/8f1f9638722e1c09-e7/s400x600/c385c6c9951577eac4f0e4a9f37ceec80f55cb6b.jpg"
        />
      </ul>
    </div>
  );
}

export default Nav;
