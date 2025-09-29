import React, { useState } from "react";
import EmployeeList from "./EmployeeList";

function App() {
  const [employees, setEmployees] = useState([
    { id: 1, name: "Sandhu", designation: "Software Engineer" },
    { id: 2, name: "Waseer", designation: "Product Manager" },
    { id: 3, name: "Rupal", designation: "Designer" },
  ]);

  const handleDelete = (id) => {
    setEmployees(employees.filter((emp) => emp.id !== id));
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6">Employee List</h1>
      <EmployeeList employees={employees} onDelete={handleDelete} />
    </div>
  );
}

export default App;
