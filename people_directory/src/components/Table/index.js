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
      .then(res=> this.setState({ employees: res.data.results }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <table class="table table-striped table-dark">
        <thead>
          <tr>
            <th scope="col">Image</th>
            <th scope="col">First Name</th>
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
