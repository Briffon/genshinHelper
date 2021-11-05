import React, { useEffect, useState } from "react";
const Landing = () => {
  const [characters, setCharacters] = useState("");
  useEffect(() => {
    async function fetchData() {
      const tempArr = [];
      const tempChars = await getInfo("https://api.genshin.dev/characters");
      tempChars.forEach((char) => {
        tempArr.push(char);
      });
      setCharacters(tempArr);
    }
    fetchData();
  }, []);
  const getInfo = (url) => {
    //try fetching from given url
    //https://api.genshin.dev/
    try {
      return fetch(url).then((res) => {
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
    <div className="landing-container">
      {characters
        ? characters.map((char, index) => {
            return <p key={index}>{char}</p>;
          })
        : null}
    </div>
  );
};

export default Landing;
