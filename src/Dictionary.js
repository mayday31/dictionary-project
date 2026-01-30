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

    let apiKey = "86d11b15bf79a84309ce4be6o80tad43";
    let url = `https://api.shecodes.io/dictionary/v1/define?word=${definition}&key=${apiKey}`;
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
