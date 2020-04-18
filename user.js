import React, { Component } from "react";

class User extends Component {
  state={
    first:'',
    last:''
  }

  inputChangeEvent = (e)=>{
    this.setState({[e.target.name]:e.target.value})
  }
  onAddUser = ()=>{
    this.props.addUser(this.state);
    this.setState({
      first:'',
      last:''
    })
  }
  render() {
    return (
      <div>
       <div>
          First Name
          <input name="first" value={this.state.first} onChange={this.inputChangeEvent}/>
        </div>
        <br />
        <div>
          Last Name
          <input name="last" value={this.state.last} onChange={this.inputChangeEvent}/>
          <button onClick={this.onAddUser}>Add</button>
        </div>
      </div>
    );
  }
}
export default User;
