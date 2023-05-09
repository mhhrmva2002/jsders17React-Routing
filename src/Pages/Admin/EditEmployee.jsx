import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { editemployeesById, getAllemployeesById } from '../../api/httprequests';

const EditEmployee = () => {
  const{id} = useParams();
  const navigate = useNavigate();
  const[Employee,setEmployee] = useState([]);
  useEffect(()=>{
    getAllemployeesById(id).then(res=>{
      console.log(res);
      setEmployee(res);
    })
  },[id]);
  function handleSubmit(){
    editemployeesById(id,Employee);
    navigate('/admin/Employees');
  }
  function handleChange(e){
    setEmployee({...Employee,[e.target.name]:e.target.value});
  }
  return (
    <form onSubmit={(e)=>handleSubmit(e)}>
     <input name='name' onChange={(e)=>handleChange(e)} placeholder='employee name' type="text" required/>
       <input name='surname' onChange={(e)=>handleChange(e)} placeholder='employee surname' type="text" required/>        <input name='age' onChange={(e)=>handleChange(e)} placeholder='employee age' type="number" min='0' required/>
      <button>Edit</button>
    </form>
  )
}

export default EditEmployee