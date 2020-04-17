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
        <h2>
          Hello, {this.props.firstName} {this.props.lastName}
        </h2>
      </div>
    );
  }
}
export default User;
