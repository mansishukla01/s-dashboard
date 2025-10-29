import React from "react";

function Table({ students }) {
  if (!students || students.length === 0) {
    return <p style={{ textAlign: "center" }}>No students found</p>;
  }

  return (
    <div className="table-container">
      <table className="student-table" aria-label="students table">
        <thead>
          <tr>
            <th>Roll</th>
            <th>Name</th>
            <th>Marks</th>
            <th>Class</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.roll}>
              <td>{student.roll}</td>
              <td>{student.name}</td>
              <td>{student.marks}</td>
              <td>{student.studentClass}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;


  

