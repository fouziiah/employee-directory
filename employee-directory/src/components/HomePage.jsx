import EmployeeList from "./EmployeeList";
import Header from "./Header";
import SearchBar from "./SearchBar";
import Form from "./Form";
import Form2 from "./Form2";

export default function HomePage({ employee, addEmployee }) {
  return (
    <div className="home-page">
      <Header header="Employee Directory" />
      <SearchBar />
      <EmployeeList employee={employee} />
      <Form addEmployee={addEmployee} />
      <Form2 addEmployee={addEmployee} />
    </div>
  );
}
