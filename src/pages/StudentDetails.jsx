import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Table from "../components/Table";
import { useStudents } from "../context/StudentContext";

function StudentDetails() {
  const { students, loading, fetchStudents } = useStudents();

  useEffect(() => {
    fetchStudents();
  }, [fetchStudents]);

  if (loading || !students || students.length === 0) {
    return <p className="empty-state">Loading student details...</p>;
  }

  return (
    <div className="student-details-page">
      <div className="page-container">
        <h2 className="page-title">Student Details</h2>
        <Table students={students} />
  
        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <Link to="/">
            <button className="btn">Back to Dashboard</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default StudentDetails;




