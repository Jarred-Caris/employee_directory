import React from "react";
import "./style.css";

function Jumbo() {
  return (
    <div className="jumbotron jumbotron-fluid">
      <div className="container">
        <h1 className="display-4">People Directory</h1>
        <p className="lead">
          Find someone from work you may know (no stalking)
        </p>
      </div>
    </div>
  );
}

export default Jumbo;
