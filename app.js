import React from "react";
import User from "./user";

function App() {
  return (
    // <div>
    //   <h1>Parent Component</h1>
    // </div>
    // <div>
    //   <h1>Parent Component</h1>
    //   <User />
    // </div>
    // <div>
    //   <h1>Parent Component</h1>
    //   <User userName="Rakul"/>
    // </div>
    <div>
      <h1>Parent Component</h1>
      <User userName="Rakul"/>
      <User userName="Ravi"/>
      <User userName="John"/>
      <User userName="Danny"/>
    </div>
  );
}

export default App;
