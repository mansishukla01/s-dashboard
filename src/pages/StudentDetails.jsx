import React, { useEffect, useState } from "react";

const StudentDetails = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4002/students")
      .then((res) => res.json())
      .then((data) => setStudents(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h1> Student Details</h1>
      <table border="1" cellPadding="8">
        <thead>
          <tr>
            <th>Roll</th>
            <th>Name</th>
            <th>Class</th>
            <th>Marks</th>
          </tr>
        </thead>
        <tbody>
          {students.length > 0 ? (
            students.map((s) => (
              <tr key={s.id}>
                <td>{s.roll}</td>
                <td>{s.name}</td>
                <td>{s.class}</td>
                <td>{s.marks}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">No students found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default StudentDetails;
