import React from "react";

function loadEmployees(props) {
    return (
        <>
            {props.EmployeeInfo.map(employee => (
                < tr key={employee.login.uuid}>
                    <td><img src={employee.picture.thumbnail}></img></td>
                    <td>{employee.name.first}</td>
                    <td>{employee.name.last}</td>
                    <td>{employee.email}</td>
                    <td>{employee.phone}</td>
                    <td>{employee.dob.date}</td>
                </tr >
            ))
            }
        </>
    )
}
export default loadEmployees;