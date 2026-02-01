import React from "react";
import Meaning from "./Meaning";

export default function Output(props) {
  console.log(props.output);
  if (props.output) {
    return (
      <div className="Output">
        <h2>{props.output.word}</h2>
        {props.output.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meaning meaning={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
