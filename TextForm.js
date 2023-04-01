import React, { useState } from "react";

export default function TextForm(props) {
  //   setText("new text");

  const handelUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handelOnChange = (event) => {
    setText(event.target.value);
  };
  const [text, setText] = useState("Enter Text here");

  return (
    <div>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          value={text}
          onChange={handelOnChange}
          id="myBox"
          rows="10"
        ></textarea>
      </div>
      <button className="btn btn-primary" onClick={handelUpClick}>
        Convert to UpperCase
      </button>
    </div>
  );
}
