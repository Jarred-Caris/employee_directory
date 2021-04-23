import React from "react";
import "./style.css";

function Jumbo(props) {
  return (
    <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <h1 class="display-4">People directory</h1>
        <p class="lead">
          Find someone from work you may know (no stalking)
        </p>
      </div>
    </div>
  );
}

export default Jumbo;
