import React, { useState } from "react";
import data from "./data";
import SingleQuestion from "./Question";
import "./index.css";

function App() {
  return (
    <div className="container">
      <h3>Please let us know how we can help you.</h3>
      <div className="question-panel">
      {data.map((r) => {
        return (
          <div className="question" key={r.id}>
            <SingleQuestion question={r} />
          </div>
        );
      })}
      </div>
    </div>
  );
}

export default App;
