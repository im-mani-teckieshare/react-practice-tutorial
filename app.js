import React from "react";
import ReactDOM from "react-dom";
import User from "./user";
import Axios from 'axios'

class App extends React.Component {

  state = {
    user:[]
  }

  componentDidMount() {
  //   fetch('https://jsonplaceholder.typicode.com/users')
  // .then(response => response.json())
  // .then(json => this.setState({'user':json}))
    Axios.get('https://jsonplaceholder.typicode.com/users')
  .then(({data}) => this.setState({'user':data}))
  }

  showUser(){
    return this.state.user.map(e => <div>{e.name} - {e.email}</div>)
  }

  render() {
    return (
      <div>
      {this.showUser()}
      </div>
    );
  }
}

export default App;
