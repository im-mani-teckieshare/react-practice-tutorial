import React from "react";
import User from "./user";
import CustomerList from "./customerList";

// function App() {
//   return (
//     <div>
//       <h3>TeckieShare</h3>
//     </div>
//   );
// }

class App extends React.Component {
  user = {
    firstName: "John",
    lastName: "David"
  };

  userName = "Teckieshare";

  clickEvent() {
    alert("click Event Fired");
  }

  render() {
    return (
      <div>
        {/* <h3>TeckieShare</h3> */}
        <h3>{this.userName}</h3>
        <button onClick={this.clickEvent}>Click Me</button>
        <hr />
        <h4>Props in Class Component</h4>
        <User {...this.user} />
      </div>
    );
  }
}

export default App;
