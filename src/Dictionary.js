import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  let [definition, setDefinition] = useState("");
  function search(event) {
    event.preventDefault();
    alert(`Searching for definition of ${definition}`);
  }
  function definitionSearch(event) {
    setDefinition(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input type="search" onChange={definitionSearch} />
      </form>
    </div>
  );
}
