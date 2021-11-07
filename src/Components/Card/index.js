import React from "react";

function Card(props) {
  return (
    <div onClick={props.action} className="card-container">
      {props.img ? <img src={props.img} alt={props.alt} /> : null}
      <p>{props.txt}</p>
    </div>
  );
}

export default Card;
