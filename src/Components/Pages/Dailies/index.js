import React, { useEffect, useState } from "react";
import Card from "../../Card";

function Dailies() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    //get teams from user
    const tempTeams = localStorage.getItem("teams");
    //set the teams to the state
    setTeams(tempTeams);
  }, []);

  return (
    <div className="web-page dailies-container">
      <h1>Dailies</h1>
      <div className="dailies-container-catalog">
        {/* If teams exist display them, otherwise prompt for a new start */}
        {teams === [] ? (
          <div>test</div>
        ) : (
          <a href="/Build">
            <Card img="" alt="" txt="Add new Set" />
          </a>
        )}
      </div>
    </div>
  );
}

export default Dailies;
