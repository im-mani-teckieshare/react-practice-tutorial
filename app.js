import React from "react";

const name = "Teckieshare";

function displayElement(){
  return <h1>Its come from Function</h1>
}

function showFullUser(user){
return user.firstName+' '+user.lastName;
}

const user={
  firstName: 'Jhon',
  lastName: 'David'
}

function App() {
  return (
    <div>
      <div>Hello World </div>
      <h1>{name}</h1>
      {displayElement()}
      <span>{2+2}</span>
      <h2>{showFullUser(user)}</h2>
    </div>
  );
}

export default App;
