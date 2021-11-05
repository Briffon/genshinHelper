import React from "react";

function Card(props) {
  return (
    <div className="card-container">
      <p>{props.txt}</p>
    </div>
  );
}

export default Card;
