
function EmployeeCard({ employee, onDelete }) {
  return (
    <div className="employee-card">
      <h2>{employee.name}</h2>
      <p>ID: {employee.id}</p>
      <p>{employee.designation}</p>
      <button
        className="delete-btn"
        onClick={() => onDelete(employee.id)}
      >
        Delete
      </button>
    </div>
  );
}

export default EmployeeCard;
