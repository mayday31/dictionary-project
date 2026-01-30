import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary() {
  let [definition, setDefinition] = useState("");

  function receiveResponse(reponse) {
    console.log(reponse.data);
  }

  function search(event) {
    event.preventDefault();

    let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${definition}`;
    axios.get(url).then(receiveResponse);
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
