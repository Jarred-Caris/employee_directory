import React from "react";
import "./style.css";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function SearchForm(props) {
  return (
    <div className="Searchbox" id="searchBox">
      <form className="d-flex">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Name Search"
          aria-label="Search"
          value={props.search}
          name="Name"
          onChange={props.handleInputChange}
        />
        <button
          className="btn btn-outline-success"
          type="submit"
          onClick={props.handleFormSubmit}
        >
          Search
        </button>
      </form>
    </div>
  );
}

export default SearchForm;
