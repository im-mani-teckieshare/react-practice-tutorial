import React from "react";
import ReactDOM from "react-dom";
import User from "./user";

class App extends React.Component {
  constructor(props) {
    console.log("constructor");
    this.state = {
      name: ""
    };
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    console.log("mount");
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("updated");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("should Update");
    return true;
    // return false;
  }

  componentDidCatch(error, info){
    console.log('error occured',error,info)
  }

  componentWillUnmount() {
    console.log("component UnMount");
  }

  onChange(e) {
    this.setState({
      name: e.target.value
    });
  }

  unMount() {
    ReactDOM.unmountComponentAtNode(document.getElementById("root"));
  }

  render() {
    console.log("render");
    return (
      <div>
        <h1>Component Life Cylce</h1>

        <input value={this.state.name} onChange={this.onChange} />

        <button onClick={this.unMount}>UnMount Me</button>
      </div>
    );
  }
}

export default App;
