import React, { useState, useEffect } from "react";

function Build() {
  const [orientation, setOrientation] = useState("");
  const [chars, setChars] = useState([]);
  useEffect(() => {
    setOrientation(localStorage.getItem("build-state"));
    switch (orientation) {
      case "":
        break;
      case "characters":
        break;
      case "weapons":
        localStorage.setItem("build-state", "weapons");
        setOrientation("weapons");
        break;
      default:
        break;
    }

    async function getChars() {
      const chars = await getInfo("characters");
      const tempArr = [];
      chars.forEach((char) => {
        tempArr.push(char);
      });

      setChars(tempArr);
    }
    getChars();
  }, [orientation]);

  const getInfo = (url) => {
    //try fetching from given url
    //https://api.genshin.dev/
    try {
      return fetch(`https://api.genshin.dev/${url}`).then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          return "error";
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="web-page build-container">
      <h1>Build</h1>

      <div className="build-containerButtons">
        <a href="/BuildCharacters">Characters</a>
        <a href="/BuildWeapons">Weapons</a>
      </div>
      {/* {orientation === "weapons" ? <Weapons /> : null}
      {orientation === "characters" ? <Characters chars={chars} /> : null} */}
    </div>
  );
}

export default Build;
