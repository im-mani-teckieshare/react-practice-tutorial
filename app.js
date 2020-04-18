import React from "react";
import User from "./user";

class App extends React.Component {
  state = {
    user: [{ first: "Jill", last: "smith" }, { first: "john", last: "Doe" }]
  };

  showRows(){
   return this.state.user.map(e=>{
      return <tr>
            <th>{e.first}</th>
            <th>{e.last}</th>
          </tr>
    })
  }

  addUser = (userObj)=>{
    let userList = this.state.user;
    userList.push(userObj);
    this.setState({
      'user':userList
    })
  }

  render() {
    return (
      <div>
        <User addUser={this.addUser}/>
        <br />
        <table style={{ width: "100%" }}>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
          </tr>
          {this.showRows()}
        </table>
      </div>
    );
  }
}

export default App;
