import React, { useState, useEffect } from "react";

function CharacterModify(props) {
  const [char, setChar] = useState(JSON.parse(localStorage.getItem("char")));
  const [level, setLevel] = useState(1);
  const [t1, setT1] = useState("");
  const [t2, setT2] = useState("");
  const [t3, setT3] = useState("");

  useEffect(() => {
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
      console.log(tempChar);
      localStorage.setItem("char", JSON.stringify(tempChar));
      setChar(tempChar);
    } else {
      setChar(JSON.parse(localStorage.getItem("char")));
    }

    setLevel(char.charLevel);

    let selectorOne = document.getElementById("talent-level-1");
    let selectorTwo = document.getElementById("talent-level-2");
    let selectorThree = document.getElementById("talent-level-3");
    let selectors = [selectorOne, selectorTwo, selectorThree];

    selectors.forEach((selector, index) => {
      formatSelector(selector, index);
    });

    //get names for characters talents
    async function getTalents() {
      const tempChar = await getInfo(`characters/${char.name}`);
      console.log(tempChar);

      for (let i = 0; i < tempChar.skillTalents.length; i++) {
        console.log(tempChar.skillTalents[i].name);
        switch (i) {
          case 0:
            setT1(tempChar.skillTalents[i].name);
            break;
          case 1:
            setT2(tempChar.skillTalents[i].name);
            break;
          case 2:
            setT3(tempChar.skillTalents[i].name);
            break;
          default:
            break;
        }
      }
    }

    getTalents();
  }, [char.charLevel, char.name, char.img]);

  const onChange = (input) => {
    let value = input.target.value;
    let type = input.target.id;
    let tempChar = char;

    switch (type) {
      case "character-level":
        tempChar.charLevel = value;
        setLevel(value);
        break;
      case "talent-level-1":
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
    console.log(tempChar);
    localStorage.setItem("char", JSON.stringify(tempChar));
    setChar(tempChar);
  };

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

  const formatSelector = (selector, id) => {
    if (selector.options) {
      switch (id) {
        case 0:
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
        <h3>Character level</h3>
        <input
          name="character-level"
          id="character-level"
          type="number"
          min="1"
          max="90"
          value={level}
          onChange={(e) => onChange(e)}
        />
        <h3>Talent Levels</h3>
        <label htmlFor="talent-level-1">{t1}</label>
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

        <label htmlFor="talent-level-2">{t2}</label>
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

        <label htmlFor="talent-level-3">{t3}</label>
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
      </form>
    </div>
  );
}

export default CharacterModify;
