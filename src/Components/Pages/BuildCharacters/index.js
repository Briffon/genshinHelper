import React, { useState, useEffect } from "react";
import CharacterModify from "../../CharacterModify";
import CharacterStart from "../../CharacterStart";
import CharacterList from "../../JSONS/characters.json";

function BuildCharacters() {
  const [phase, setPhase] = useState("");
  const [character, setCharacter] = useState({});

  useEffect(() => {
    //get the previous state of the page and character from the user or set to default
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
    //saves the state of the phase and character and takes user to the next phase, character modifications/view ascension materials
    e.stopPropagation();
    localStorage.setItem("phase", "charSelected");
    localStorage.setItem("char", JSON.stringify(char));
    setCharacter(char);
    setPhase("charSelected");
  };

  return (
    <div className="web-page build-characters-container">
      <h1>Build Characters</h1>

      {/* start phase of character building */}
      {phase === "start" ? (
        <CharacterStart
          onClick={onClick}
          characters={CharacterList.characters}
        />
      ) : null}

      {/* character has already been selected phase */}
      {phase === "charSelected" ? <CharacterModify char={character} /> : null}
    </div>
  );
}

export default BuildCharacters;
