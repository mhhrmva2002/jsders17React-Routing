import React, { useEffect, useState } from "react";
import { getAllStudents } from "../../api/httprequests";
import { Link } from "react-router-dom";

const Employees = () => {
  //studentleri get ede bilmek ucub state yaradiriq
  let [students, setSudents] = useState([]);
  useEffect(() => {
    getAllStudents().then((data) => {
      console.log(data);
      setSudents(data);
    });
  }, []);
  return (
    <>
      <ul>
        {students &&
          students.map((student) => {
            return (
              <li key={student.id}>
                 <Link to={`${student.id}`}>{student.name}</Link> ,{student.surname}    
                 <button>delete</button>
                 <button>edit</button>
              </li>
            );
          })}
      </ul>
    </>
  );
};

export default Employees;
