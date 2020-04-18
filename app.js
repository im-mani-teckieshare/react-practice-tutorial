import React from "react";
import ReactDOM from "react-dom";
import User from "./user";
import Axios from "axios";

class App extends React.Component {
  state = {
    user: []
  };

  componentDidMount() {
    Axios.get("https://jsonplaceholder.typicode.com/users").then(({ data }) =>
      this.setState({ user: data })
    );
  }

  showUser() {
    return this.state.user.map(user => {
      let { name, email, website, address, company } = user;
      let { city } = address;
      return (
        <tr>
          <td>{name}</td>
          <td>{email}</td>
          <td>{website}</td>
          <td>{city}</td>
          <td>{company.name}</td>
        </tr>
      );
    });
  }

  render() {
    return (
      <div>
        <table>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Website</th>
            <th>Company</th>
            <th>City</th>
          </tr>
        </table>
        {this.showUser()}
      </div>
    );
  }
}

export default App;
