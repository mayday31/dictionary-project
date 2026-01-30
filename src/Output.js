import React from "react";

export default function Output(props) {
  console.log(props.output);
  if (props.output) {
    return (
      <div className="Output">
        <h2>{props.output.word}</h2>
      </div>
    );
  } else {
    return null;
  }
}
