import React from "react";
import Data from './data.json';

function App() {
  return (
    <div>
      {Data.map((person) => {
        return <h1>{person.about}</h1>
      })}
    </div>
  );
}

export default App;
