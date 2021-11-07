import React, { useState, useEffect } from "react";
import Card from "../../Card";
import CharacterModify from "../../CharacterModify";
import CharacterList from "../../JSONS/characters.json";

function BuildCharacters() {
  const [phase, setPhase] = useState("");
  const [character, setCharacter] = useState({});

  useEffect(() => {
    setPhase(
      localStorage.getItem("phase") ? localStorage.getItem("phase") : "start"
    );
    setCharacter(
      localStorage.getItem("char")
        ? JSON.parse(localStorage.getItem("char"))
        : ""
    );
  }, [phase]);

  const onClick = (e, char) => {
    e.stopPropagation();
    localStorage.setItem("phase", "charSelected");
    localStorage.setItem("char", JSON.stringify(char));
    setCharacter(char);
    setPhase("charSelected");
  };

  const clear = () => {
    localStorage.setItem("phase", "start");
    localStorage.removeItem("char");
    window.location.reload(false);
  };
  return (
    <div className="web-page build-characters-container">
      <h1>Build Characters</h1>
      {phase === "start"
        ? CharacterList.characters.map((char, index) => {
            if (index <= 5) {
              return (
                <div className="build-container-start">
                  <form>
                    <input type="text" />
                    <Card
                      action={(e) => onClick(e, char)}
                      txt={char.name}
                      img={char.img}
                    />
                  </form>
                </div>
              );
            } else {
              return null;
            }
          })
        : null}

      {phase === "charSelected" ? <CharacterModify char={character} /> : null}

      <button onClick={clear}>clear</button>
    </div>
  );
}

export default BuildCharacters;
