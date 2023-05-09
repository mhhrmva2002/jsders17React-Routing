// import React, { useState } from 'react';
// import {v4 as uuidv4} from 'uuid';
// import { postAllemployees } from '../../api/httprequests';
// import {useNavigate} from 'react-router-dom';
// const AddEmployee = () => {
//     const [newEmployee,setNewEmployee]=useState({})
//     const navigate = useNavigate();

//    async function handleSubmit(e){
//         e.preventDefault();
//         newEmployee.id=uuidv4();
//         await postAllemployees(newEmployee);
//         navigate('/admin/employees')
//         postAllemployees(newEmployee)
//     }
//     function handleChange(e){
// setNewEmployee({...newEmployee,[e.target.name]:e.target.value})
//     }
//   return (
//     <>
//     <form onSubmit={(e)=>handleSubmit(e)} >
//         <input name='name' onChange={(e)=>handleChange(e)} placeholder='employee name' type="text" required/>
//         <input name='surname' onChange={(e)=>handleChange(e)} placeholder='employee surname' type="text" required/>
//         <input name='age' onChange={(e)=>handleChange(e)} placeholder='employee age' type="number" min='0' required/>
//         <button type='submit'>Add New Employee</button>
//     </form>
//     </>
//   )
// }

// export default AddEmployee


import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { postAllemployees } from '../../api/httprequests';
import { useNavigate } from 'react-router-dom';

const AddEmployee = () => {
  const[newEmployee,setNewEmployee] = useState({});
  const navigate = useNavigate();

  async function handleSubmit(e){
    e.preventDefault();
    newEmployee.id = uuidv4();
    await postAllemployees(newEmployee);
    navigate('/admin/Employees');
  }
  function handleChange(e){
    setNewEmployee({...newEmployee,[e.target.name]:e.target.value});
  }
  return (
    <form onSubmit={(e)=>handleSubmit(e)}>
       <input name='name' onChange={(e)=>handleChange(e)} placeholder='employee name' type="text" required/>
        <input name='surname' onChange={(e)=>handleChange(e)} placeholder='employee surname' type="text" required/>
        <input name='age' onChange={(e)=>handleChange(e)} placeholder='employee age' type="number" min='0' required/>
        <button type='submit'>Add New Employee</button>
    </form>
  )
}

export default AddEmployee