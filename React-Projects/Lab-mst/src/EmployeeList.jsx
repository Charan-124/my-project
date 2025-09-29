import EmployeeCard from "./EmployeeCard";

function EmployeeList({ employees, onDelete }) {
  return (
    <div className="grid gap-4 w-full max-w-xl">
      {employees.map((employee) => (
        <EmployeeCard
          key={employee.id}
          employee={employee}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}

export default EmployeeList;
