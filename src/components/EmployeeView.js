import React from 'react'

const EmployeeView = ({emp, close}) => {
  return (
    <div>
     <br/>
     <h5>Employee Id: {emp.id}</h5>
     <h2>Name: {emp.employee_name}</h2>
     <h2>Salary: ${emp.employee_salary}</h2>
     <h2>Age: {emp.employee_age}</h2>
     <br/>
     <button onClick={close}>Back</button>
    </div>
  )
}

export default EmployeeView