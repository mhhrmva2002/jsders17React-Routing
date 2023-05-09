import React, { useEffect, useState } from "react";
import { deleteemployeesById, getAllemployees } from "../../api/httprequests";
import { Link } from "react-router-dom";

const Employees = () => {
  //Employeeleri get ede bilmek ucub state yaradiriq
  let [employees, setEmployee] = useState([]);
  useEffect(() => {
    getAllemployees().then((data) => {
      console.log(data);
      setEmployee(data);
    });
  }, []);
  return (
    <>
      <ul>
        {employees &&
          employees.map((employee) => {
            return (
              <li key={employee.id}>
                 <Link to={`${employee.id}`}>{employee.name}</Link> ,{employee.surname}    
                 <button onClick={()=>{
                  deleteemployeesById(employee.id)
                  let filteredEmployees=employees.filter((item)=>item.id!==employee.id);
                  setEmployee(filteredEmployees)
                 }}>delete</button>
                 <button>edit</button>
              </li>
            );
          })}
      </ul>
    </>
  );
};

export default Employees;
