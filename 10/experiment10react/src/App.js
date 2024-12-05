import React, { useState, useEffect } from "react";
import {
  fetchEmployees,
  createEmployee,
  updateEmployee,
  deleteEmployee,
} from "./Global_API";

import "./App.css";

function App() {
  const [employees, setEmployees] = useState([]);

  const [name, setName] = useState("");

  const [salary, setSalary] = useState("");

  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    const getEmployees = async () => {
      const data = await fetchEmployees();

      setEmployees(data);
    };

    getEmployees();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const employeeData = { name, salary };

    if (editingId) {
      const updatedEmployee = await updateEmployee(editingId, employeeData);

      setEmployees((prev) =>
        prev.map((emp) =>
          emp.id === editingId ? { ...emp, ...updatedEmployee } : emp
        )
      );

      setEditingId(null);
    } else {
      const newEmployee = await createEmployee(employeeData);

      setEmployees((prev) => [...prev, newEmployee]);
    }

    setName("");

    setSalary("");
  };

  const handleEdit = (employee) => {
    setName(employee.name);

    setSalary(employee.salary);

    setEditingId(employee.id);
  };

  const handleDelete = async (id) => {
    await deleteEmployee(id);

    setEmployees((prev) => prev.filter((emp) => emp.id !== id));
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-4">
        Employee Management
      </h1>

      <form onSubmit={handleSubmit} className="mb-4">
        <div className="flex justify-between">
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border border-gray-300 p-2 w-1/2 mr-2 rounded"
            required
          />

          <input
            type="number"
            placeholder="Salary"
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
            className="border border-gray-300 p-2 w-1/4 mr-2 rounded"
            required
          />

          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-300"
          >
            {editingId ? "Update" : "Add"}
          </button>
        </div>
      </form>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="py-2 px-4">ID</th>

              <th className="py-2 px-4">Name</th>

              <th className="py-2 px-4">Salary</th>

              <th className="py-2 px-4">Actions</th>
            </tr>
          </thead>

          <tbody>
            {employees.map((employee) => (
              <tr key={employee.id} className="hover:bg-gray-100">
                <td className="py-2 px-4 border-b">{employee.id}</td>

                <td className="py-2 px-4 border-b">{employee.name}</td>

                <td className="py-2 px-4 border-b">{employee.salary}</td>

                <td className="py-2 px-4 border-b">
                  <button
                    onClick={() => handleEdit(employee)}
                    className="bg-yellow-500 text-white p-1 rounded hover:bg-yellow-600 mr-2"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => handleDelete(employee.id)}
                    className="bg-red-500 text-white p-1 rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
