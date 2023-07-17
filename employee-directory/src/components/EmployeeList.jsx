import EmployeeListItem from "./EmployeeListItem";

export default function EmployeeList({ employee }) {
  return employee.map((employee, index) => {
    return (
      <div className="list-box" key={employee.id}>
        <EmployeeListItem
          name={employee.name}
          headshot={employee.headshot}
          title={employee.title}
          id={employee.id}
        />
      </div>
    );
  });
}
