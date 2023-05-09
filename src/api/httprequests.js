import axios from "axios";
import { BASE_URL } from "./base_url";


//get all students
export const getAllStudents=async()=>{
    let globalData;
    await axios.get(`${BASE_URL}/students`)
    .then(res=>{
        globalData=res.data
    })
    return globalData;
}

// get students by id
export const getAllStudentsById=async(id)=>{
    let globalData;
    await axios.get(`${BASE_URL}/students${id}`)
    .then(res=>{
        globalData=res.data
    })
    return globalData;
}


// post new students
export const postAllStudents=async(newStudent)=>{
axios.post(`${BASE_URL}/students`,newStudent)
}

//delete students by id
export const deleteStudentsById=async(id)=>{
    axios.delete(`${BASE_URL}/students${id}`)
}


//edit students by id
export const editStudentsById=async(id,updateStudent)=>{
    axios.put(`${BASE_URL}/students${id}`,updateStudent)
}