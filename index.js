import React from "react";
import ReactDOM from "react-dom";
import "./style.css";

// ReactDOM.render(
//   <div>
//     Hello World
//   </div>,
//   document.getElementById("root")
// );

ReactDOM.render(
  React.createElement("div", null, ["Hello World"]),
  document.getElementById("root")
);
