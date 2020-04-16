import React from "react";

const name = "Teckieshare";


function App() {
function clickEvent() {
  alert("Click Event Fired");
}

function changeEvent(e){
 console.log(e.target.value)
}

  return (
    <div>
      <div>Hello World </div>
      <h1>{name}</h1>
      {/**<button onclick="clickEvent()">
  Click Me
</button> */}
      {/*<button onClick={clickEvent}>Click Me</button>*/}
      {/* <button onClick={clickEvent()}>Without Click I will fire</button> */}
      <button onClick={clickEvent}>Now Click I will fire</button>
      <hr />
      <button onClick={() => clickEvent()}>Inline Event</button>
      <hr/>
      <input onChange={changeEvent}/>
      <h2>Arrow Function Event</h2>
      <input onChange={(e)=>changeEvent(e)}/>
    </div>
  );
}

export default App;
