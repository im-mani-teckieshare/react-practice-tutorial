import React from "react";
import User from "./user";
import CustomerList from "./customerList";

function App() {
  const user = {
    firstName: "Rakul",
    lastName: "kumar"
  };
  const customer = ['Ravi','John','David']
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
      <CustomerList customer={customer} />
    </div>
  );
}

export default App;
