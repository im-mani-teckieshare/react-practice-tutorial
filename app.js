import React from "react";
import "./app.css";

const divStyle = {
  color: "blue",
  fontSize: "24px"
};

function App() {
  return (
    <div>
      <div style={{ color: "pink" }}>Inline style</div>
      <div style={divStyle}>From expression Style</div>
      <div>Normal CSS Styling</div>
      <div className="global-div">Global CSS Styling</div>
    </div>
  );
}

export default App;
