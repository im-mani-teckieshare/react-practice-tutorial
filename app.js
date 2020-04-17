import React from "react";
import User from "./user";
import CustomerList from "./customerList";

function App() {
  const user = {
    firstName: "Rakul",
    lastName: "kumar"
  };
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
      {/* <User firstName="Rakul" lastName="Kumar"/> */}
      <User {...user} />
      <CustomerList />
    </div>
  );
}

export default App;
