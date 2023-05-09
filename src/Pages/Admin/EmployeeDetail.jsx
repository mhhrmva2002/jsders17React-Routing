import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getAllemployeesById } from "../../api/httprequests";

const EmployeeDetail = () => {
  const { id } = useParams();
  const [employee, setEmployee] = useState({});
  console.log(id)
  useEffect(() => {
    getAllemployeesById(id).then(res => {
      setEmployee(res);
    });
  }, [id]);
  console.log(employee)
  return (
 <>
  <h1>Detail page of{employee.name}</h1>
  <ul>
  <li>employee id:{employee.id}</li>
    <li>employee name:{employee.name}</li>
    <li>employee surname:{employee.surname}</li>
    <li>employee age:{employee.age}</li>
    <li>employee position:{employee.position}</li>
  </ul>
  <button> <Link to='/admin/employees'>Go back</Link> </button>
 </>
  )
};

export default EmployeeDetail;
