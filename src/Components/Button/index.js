import React from "react";

function Button(props) {
  return (
    <button
      style={{
        width: props.width ? props.width : "100px",
        height: props.height ? props.height : "100px",
      }}
      className="button-container"
    >
      {props.txt}
    </button>
  );
}

export default Button;
