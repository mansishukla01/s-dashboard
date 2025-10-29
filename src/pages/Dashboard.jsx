import React, { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import Table from "../components/Table";
import { useStudents } from "../context/StudentContext";

const Dashboard = () => {
  const { students: allStudents, fetchStudents } = useStudents();
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetchStudents();
  }, [fetchStudents]);

  useEffect(() => {
    setStudents(allStudents);
  }, [allStudents]);

  const handleSearch = ({ roll, name, studentClass, marks }) => {
    const filtered = allStudents.filter((student) => {
      return (
        (roll === "" || student.roll.toString() === roll) &&
        (name === "" || student.name.toLowerCase().includes(name.toLowerCase())) &&
        (studentClass === "" ||
          student.studentClass.toLowerCase().includes(studentClass.toLowerCase())) &&
        (marks === "" || student.marks.toString() === marks)
      );
    });
    setStudents(filtered);
  };

  return (
    <div className="page-container">
      <h1 className="page-title">Student Dashboard</h1>
      <SearchBar onSearch={handleSearch} />
      <Table students={students} />
    </div>
  );
};

export default Dashboard;

