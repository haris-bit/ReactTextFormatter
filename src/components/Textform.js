import React, { useState } from "react";

export default function Textform(props) {
  const handleUpClick = () => {
    console.log("Uppercase was clicked! " + text);
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleLoClick = () => {
    console.log("Lowercase was clicked! " + text);
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleClear = () => {
    setText("");
  };

  const handleOnChange = (event) => {
    console.log("Handle on change");
    setText(event.target.value);
  };

  const [text, setText] = useState("Enter your text here....");
  return (
    <>
      <div
        className="container"
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h2>{props.heading}</h2>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            id="textBox"
            rows="8"
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>
          Capitalize the Text
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>
          Lowercase the Text
        </button>
        <button className="btn btn-primary mx-2" onClick={handleClear}>
          Clear
        </button>
      </div>
      <div
        className="container my-3"
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h2>Characteristics of the Text</h2>
        <p>
          There are {text.length} characters and {text.split(" ").length} words.
        </p>
        <p>You can read in approximately: {0.008 * text.length} minutes.</p>
        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Enter something in the text box above to preview here"}
        </p>
      </div>
    </>
  );
}
