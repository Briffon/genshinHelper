import React, { useEffect, useState } from "react";
import Card from "../../Card";

function Dailies() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    const tempTeams = localStorage.getItem("teams");
    setTeams(tempTeams);
  }, []);

  // const onClick = (e) => {
  //   e.stopPropagation();
  //   window.location = "/Build";
  // };
  return (
    <div className="web-page dailies-container">
      <h1>Dailies</h1>
      <div className="dailies-container-catalog">
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
