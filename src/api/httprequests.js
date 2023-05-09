import axios from "axios";
import { BASE_URL } from "./base_url";


//get all employees
export const getAllemployees=async()=>{
    let globalData;
    await axios.get(`${BASE_URL}/employees`)
    .then(res=>{
        globalData=res.data
    })
    return globalData;
}

// get employees by id
export const getAllemployeesById=async(id)=>{
    let globalData;
    await axios.get(`${BASE_URL}/employees/${id}`)
    .then(res=>{
        globalData=res.data
    })
    return globalData;
}


// post new employees
export const postAllemployees=async(newEmployee)=>{
axios.post(`${BASE_URL}/employees`,newEmployee)
}

//delete employees by id
export const deleteemployeesById=async(id)=>{
    axios.delete(`${BASE_URL}/employees/${id}`)
}


//edit employees by id
export const editemployeesById=async(id,updateEmployee)=>{
    axios.put(`${BASE_URL}/employees/${id}`,updateEmployee)
}