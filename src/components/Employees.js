import React, {useEffect, useState} from 'react';
import { useQuery } from 'react-query';
import Employee from './Employee'
import EmployeeView from './EmployeeView';

const fetchEmployees = async () => {
  const res = await fetch('http://dummy.restapiexample.com/api/v1/employees');
  return res.json();
}

const Employees = () => {
    const[oneEmployee, setOneEmployee] = useState(null)
    const { data, status} = useQuery('employees', fetchEmployees);
    let employees = null;

    if (status === 'success' && !oneEmployee) {
       employees = (
         <div>
         <h2>Names of all employees</h2>
        <h4>Click on a name for more info</h4>
        <div>
          <ul>
           {data.data.map(e => <Employee key = {e.id} emp = {e} fetch = {(e) => setOneEmployee(e)} />)}
          </ul>
        </div>
         </div>
       )
    }

    else if(status==='loading') {
      employees = 'Loading...';
    }

  return (
    <div className='view'>
    {oneEmployee != null ? <EmployeeView emp = {oneEmployee} close ={() =>setOneEmployee(null)}/> : employees}
    </div>
  )
}

export default Employees