import React from "react";
import ReactDOM from "react-dom";
import "./style.css";
import App from './app';

// ReactDOM.render(
//   <div>
//     Hello World
//   </div>,
//   document.getElementById("root")
// );

// ReactDOM.render(
//   React.createElement("div", null, ["Hello World"]),
//   document.getElementById("root")
// );

// function App() {
//   return <div>Hello World</div>;
// }

ReactDOM.render(<App />, document.getElementById("root"));
