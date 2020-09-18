//Create a react app from scratch.
import React from "react";
import ReactDom from "react-dom";
//It should display a h1 heading.
const fName = "Alkebulan";
const lName = "Africa";

ReactDom.render(
  <div>
    <h1>Hello {fName + " " + lName}</h1>
    <p>Your lucky number is : </p>
  </div>,
  document.getElementById("root")
);
//It should display an unordered list (bullet points).
//It should contain 3 list elements.
