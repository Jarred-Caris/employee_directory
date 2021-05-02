import React, {Component} from "react";
import "./style.css";
import API from "../utils/API";



class Table extends Component {
    state = {
      image: {},
      name: "",
      phone: Number,
      email: "",
      dob: Date,
      
    };

     
    componentDidMount() {
        this.employees;
      }

      employees () {
        API.getEmployees()
          .then(res => this.setState({ res }))
          .catch(err => console.log(err));
        
      };
      

      render() {
        return (
            <table class="table table-striped table-dark">
            <thead>
              <tr>
                <th scope="col">Image</th>
                <th scope="col">Name</th>
                <th scope="col">Phone</th>
                <th scope="col">Email</th>
                <th scope="col">DOB</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </table>
        )

        
      }
        
    

export default Table;