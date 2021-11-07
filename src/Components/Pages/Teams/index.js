import React, { useState } from "react";

function Teams() {
  const [name, setName] = useState("");

  const onChange = (input) => {
    // let inputId = input.target.id;
    let value = input.target.value;
    setName(value);
  };
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

  const getChar = async (char) => {
    const character = await getInfo(
      `https://api.genshin.dev/characters/${char}`
    );
    if (character === "error") {
      console.log("test");
    } else {
      console.log(character);
    }
  };

  const submitForm = (e) => {
    e.preventDefault();
    getChar(name);
  };
  return (
    <div className="web-page teams-container">
      <h1>test</h1>
      <form onSubmit={submitForm}>
        <label htmlFor="name">Character:</label>
        <input type="text" name="name" id="name" onChange={onChange}></input>
        <input type="submit" value="submit" id="submit"></input>
      </form>
    </div>
  );
}

export default Teams;
