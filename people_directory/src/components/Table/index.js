import React, { Component } from "react";
import "./style.css";
import API from "../../utils/API";
import EmployeeInfo from "../EmployeeInfo/index"

class Table extends Component {
  state = {
    employees: [],
  };
  componentDidMount() {
    this.getEmployees();
  }

  getEmployees() {
    API.loadEmployees()
      // .then(res=> this.setState({ employees: [...res.data.results].sort((function(a, b){return (a.name.first < b.name.first) ? -1 : 1}))
      .then(res=> this.setState({ employees: res.data.results
      }))
      .catch(err => console.log(err));
  }

   sortByFirstName () {
     console.log("clicked")
// Update this.state.employees such that they are sorted by their fist name. 
    this.setState ({ employees: [...this.state.employees].sort(   (function(a, b){return (a.name.first < b.name.first) ? -1 : 1}))
    }); 
  }

  render() {
    return (
      <table class="table table-striped table-dark">
        <thead>
          <tr>
            <th scope="col">Image</th>
            <th scope="col" onClick = {() => { this.sortByFirstName()}}>First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">DOB</th>
          </tr>
        </thead>
        <tbody>
        <EmployeeInfo EmployeeInfo={this.state.employees} />
        </tbody>
      </table>
    );
  }
}
export default Table;
