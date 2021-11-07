import React, { useState, useEffect } from "react";

function CharacterModify(props) {
  const [char, setChar] = useState(JSON.parse(localStorage.getItem("char")));
  const [level, setLevel] = useState(1);

  useEffect(() => {
    //if there is no previous character data set default values
    if (!char.charLevel) {
      let tempChar = {
        name: char.name,
        img: char.img,
        charLevel: 1,
        talent1: 1,
        talent2: 1,
        talent3: 1,
        talent4: 1,
      };
      localStorage.setItem("char", JSON.stringify(tempChar));
      setChar(tempChar);
    } else {
      //set the previous data from the user
      setChar(JSON.parse(localStorage.getItem("char")));
    }

    //set all values of the form inputs
    setLevel(char.charLevel);

    let selectorOne = document.getElementById("talent-level-1");
    let selectorTwo = document.getElementById("talent-level-2");
    let selectorThree = document.getElementById("talent-level-3");
    let selectorFour = document.getElementById("talent-level-4");
    let selectors = [selectorOne, selectorTwo, selectorThree, selectorFour];

    selectors.forEach((selector, index) => {
      formatSelector(selector, index);
    });
  }, [char.charLevel, char.name, char.img]);

  //on input change find the input and set the value, also save progress of the user
  const onChange = (input) => {
    //assign input values
    let value = input.target.value;
    let type = input.target.id;
    let tempChar = char;

    switch (type) {
      case "character-level":
        //set the level to the state and temporary character
        tempChar.charLevel = value;
        setLevel(value);
        break;
      case "talent-level-1":
        //get the option id from the input and set it to temporary character
        let option = input.target.options.selectedIndex;
        tempChar.talent1 = option + 1;
        break;
      case "talent-level-2":
        let option2 = input.target.options.selectedIndex;
        tempChar.talent2 = option2 + 1;
        break;
      case "talent-level-3":
        let option3 = input.target.options.selectedIndex + 1;
        tempChar.talent3 = option3;
        break;
      case "talent-level-4":
        let option4 = input.target.options.selectedIndex + 1;
        tempChar.talent4 = option4;
        break;
      default:
        break;
    }

    //save teh temporary character to state and local-storage
    console.log(tempChar);
    localStorage.setItem("char", JSON.stringify(tempChar));
    setChar(tempChar);
  };

  // const getInfo = (url) => {
  //   //try fetching from given url
  //   //https://api.genshin.dev/
  //   try {
  //     return fetch(`https://api.genshin.dev/${url}`).then((res) => {
  //       if (res.ok) {
  //         return res.json();
  //       } else {
  //         return "error";
  //       }
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  //sets the selected option for the selector inputs
  const formatSelector = (selector, id) => {
    if (selector.options) {
      switch (id) {
        case 0:
          //convert the html collection into an array and go through each selector's options and set the correct option as selected
          Array.prototype.slice.call(selector.options).forEach((opt, index) => {
            if (index === char.talent1 - 1) {
              opt.setAttribute("selected", true);
            }
          });
          break;
        case 1:
          Array.prototype.slice.call(selector.options).forEach((opt, index) => {
            if (index === char.talent2 - 1) {
              opt.setAttribute("selected", true);
            }
          });
          break;
        case 2:
          Array.prototype.slice.call(selector.options).forEach((opt, index) => {
            if (index === char.talent3 - 1) {
              opt.setAttribute("selected", true);
            }
          });
          break;
        case 3:
          Array.prototype.slice.call(selector.options).forEach((opt, index) => {
            if (index === char.talent4 - 1) {
              opt.setAttribute("selected", true);
            }
          });
          break;
        default:
          break;
      }
    }
  };
  return (
    <div className="character-modify-container">
      <h2>{props.char.name}</h2>
      <img src={props.char.img} alt={props.char.name} />
      <form>
        <label htmlFor="character-level">Character Level</label>
        <input
          name="character-level"
          id="character-level"
          type="number"
          min="1"
          max="90"
          value={level}
          onChange={(e) => onChange(e)}
        />

        <label htmlFor="talent-level-1">Choose Your Talent Level</label>
        <select
          onChange={(e) => onChange(e)}
          name="talent-level-1"
          id="talent-level-1"
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="1">6</option>
          <option value="1">7</option>
          <option value="1">8</option>
          <option value="1">9</option>
          <option value="1">10</option>
        </select>

        <label htmlFor="talent-level-2">Choose Your Talent Level</label>
        <select
          onChange={(e) => onChange(e)}
          name="talent-level-2"
          id="talent-level-2"
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="1">6</option>
          <option value="1">7</option>
          <option value="1">8</option>
          <option value="1">9</option>
          <option value="1">10</option>
        </select>

        <label htmlFor="talent-level-3">Choose Your Talent Level</label>
        <select
          onChange={(e) => onChange(e)}
          name="talent-level-3"
          id="talent-level-3"
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="1">6</option>
          <option value="1">7</option>
          <option value="1">8</option>
          <option value="1">9</option>
          <option value="1">10</option>
        </select>

        <label htmlFor="talent-level-4">Choose Your Talent Level</label>
        <select
          onChange={(e) => onChange(e)}
          name="talent-level-4"
          id="talent-level-4"
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="1">6</option>
          <option value="1">7</option>
          <option value="1">8</option>
          <option value="1">9</option>
          <option value="1">10</option>
        </select>
      </form>
    </div>
  );
}

export default CharacterModify;
