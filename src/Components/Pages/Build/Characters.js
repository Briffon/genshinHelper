import React from "react";
import Card from "../../Card";
import CharacterList from "../../JSONS/characters.json";
function Characters(props) {
  return (
    <div className="characters-container">
      <h1>Characters</h1>
      <form>
        <input type="text" />
      </form>
      {props.chars.length
        ? props.chars.map((char, index) => {
            if (index <= 50) {
              let img = "";
              CharacterList.characters.forEach((charX) => {
                if (char === charX.name) {
                  img = charX.img;
                }
              });
              return (
                <Card
                  onClick={props.onClick}
                  txt={char}
                  key={index}
                  img={img}
                />
              );
            } else {
              return null;
            }
          })
        : console.log(`characters: ${props.chars}`)}
    </div>
  );
}

export default Characters;
