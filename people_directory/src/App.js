import React from "react";
import './App.css';
import Jumbo from "./components/Jumbotron";
import SearchForm from "./components/SearchForm";
import Table from "./components/Table"

function App() {
  return (
    <div className="App">
      
      
      <Jumbo />
      <SearchForm />
      <Table />
      
    </div>
  );
}

export default App;
