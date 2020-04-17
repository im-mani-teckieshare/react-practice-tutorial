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
  // userName = "Teckieshare";

  state = {
    userName: "TeckieShare"
  };

  constructor() {
    super();
    // this.userChange = this.userChange.bind(this);
  }

  // userChange(e) {
  //   this.setState({
  //     userName: e.target.value
  //   })
  // }
  userChange = e => {
    this.setState({
      userName: e.target.value
    });
  };

  render() {
    return (
      <div>
        {/*  <h1>{this.userName}</h1>
        <input value={this.userName} onChange={this.userChange} /> */}
        <h1>{this.state.userName}</h1>
        {/* <input value={this.state.userName} onChange={this.userChange} /> */}
        {/*  <input value={this.state.userName} onChange={this.userChange.bind(this)} /> */}
        <input value={this.state.userName} onChange={this.userChange} />
        <hr />
        <User userName={this.state.userName} parentChangeEvent={
          this.userChange
        } />
      </div>
    );
  }
}

export default App;
