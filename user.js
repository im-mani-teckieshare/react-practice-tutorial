import React from "react";

function User(props) {
  return (
    // <div>
    //   <h2>User Component</h2>
    // </div>
    // <div>
    //   <h2>Hello, {userName}</h2>
    // </div>
    <div>
      <h2>Hello, {props.userName}</h2>
    </div>
  );
}

export default User;
