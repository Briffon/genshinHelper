import React from "react";
import Card from "../Card";

function CharacterStart(props) {
  return (
    <div className="character-start-container">
      <form>
        <input type="text" />
      </form>
      {/* {console.log(props.characters)} */}
      {props.characters
        ? props.characters.map((char, index) => {
            if (index <= 4) {
              return (
                <Card
                  key={index}
                  action={(e) => props.onClick(e, char)}
                  txt={char.name}
                  img={char.img}
                />
              );
            }
          })
        : null}
    </div>
  );
}

export default CharacterStart;
