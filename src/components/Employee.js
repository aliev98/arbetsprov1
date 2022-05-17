import React, {useState} from 'react'

const Employee = ({emp, fetch}) => {
  return (
    <div>
      <li onClick={() => fetch(emp)} > {emp.employee_name} </li>
    </div>
  )
}

export default Employee