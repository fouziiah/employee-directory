import "./index.css";

import { data } from "./data";
import HomePage from "./components/HomePage";
import { useState } from "react";

export default function App() {
  //  let [employees, setEmployees] = useState(data);
  let [employee, setEmployee] = useState(data);

  function addEmployee(emp) {
    console.log(emp);
    console.log(employee);
    setEmployee([...employee, emp]);
  }

  return (
    <div>
      <HomePage employee={employee} addEmployee={addEmployee} />
    </div>
  );
}

// let newArr = [];

// for (let employee of data) {
//   let element = (
//     <div>
//       <h3>{employee.title}</h3>
//       <p>{employee.name}</p>
//     </div>
//   )
//   newArr.push(element)
// }

// let newArr = data.map((employee) =>
//     <div>
//       <h3>{employee.title}</h3>
//       <p>{employee.name}</p>
//     </div>
// )

// let newArr = data.map((employee) => {
//   console.log(employee)
//   return (
//     <div>
//       <h3>{employee.title}</h3>
//       <p>{employee.name}</p>
//     </div>
//   )
// })

// <div>
//   {data.map((employee) => (
//     <div key={employee.id}>
//       <h3>{employee.title}</h3>
//       <p>{employee.name}</p>
//     </div>
//   ))}
// </div>
