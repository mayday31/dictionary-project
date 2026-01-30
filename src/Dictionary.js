import React, { useState } from "react";
import axios from "axios";
import Output from "./Output";
import "./Dictionary.css";

export default function Dictionary() {
  let [input, setInput] = useState("");
  let [output, setOutput] = useState(null);

  function receiveResponse(response) {
    setOutput(response.data[0]);
  }

  function search(event) {
    event.preventDefault();

    let apiKey = "86d11b15bf79a84309ce4be6o80tad43";
    let url = `https://api.shecodes.io/dictionary/v1/define?word=${input}&key=${apiKey}`;
    axios.get(url).then(receiveResponse);
  }
  function definitionSearch(event) {
    setInput(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input type="search" onChange={definitionSearch} />
      </form>
      <Output output={output} />
    </div>
  );
}
