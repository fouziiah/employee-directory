import EmployeeListItem from "./EmployeeListItem";

export default function EmployeeList({ employee }) {
  return employee.map((employee) => {
    return (
      <div className="list-box">
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
