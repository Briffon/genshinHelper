import React, { useEffect, useState } from "react";
import Card from "../../Card";

function Dailies() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    const tempTeams = localStorage.getItem("teams");
    setTeams(tempTeams);
  }, []);
  return (
    <div className="web-page dailies-container">
      <h1>Dailies</h1>
      <div className="dailies-container-catalog">
        {teams === [] ? (
          <div>test</div>
        ) : (
          <Card
            onClick={(e) => {
              e.preventDefault();
              console.log("test");
            }}
            img=""
            alt=""
            txt="Add new Set"
          />
        )}
      </div>
    </div>
  );
}

export default Dailies;
