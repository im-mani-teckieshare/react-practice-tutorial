import React, { Component } from "react";

// function User(props) {
//   return (
//     <div>
//       <h2>
//         Hello, {props.firstName} {props.lastName}
//       </h2>
//     </div>
//   );
// }

class User extends Component {
  render() {
    return (
      <div>
        <h2>Hello, {this.props.userName}</h2>
        <input value={this.props.userName} onChange={this.props.parentChangeEvent} />
      </div>
    );
  }
}
export default User;
