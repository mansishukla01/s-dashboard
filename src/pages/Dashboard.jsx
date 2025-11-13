


import React, { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import Table from "../components/Table";
import { useStudents } from "../context/StudentContext";
import { useSearchParams } from "react-router-dom";

const Dashboard = () => {
  const { students: allStudents, fetchStudents, deleteStudent } = useStudents(); 
  const [filteredStudents, setFilteredStudents] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();

  
  useEffect(() => {
    fetchStudents();
  }, [fetchStudents]);

  useEffect(() => {
    const roll = searchParams.get("roll") || "";
    const name = searchParams.get("name") || "";
    const studentClass = searchParams.get("class") || "";
    const marks = searchParams.get("marks") || "";

    const filtered = allStudents.filter((student) => {
      return (
        (roll === "" || student.roll.toString().includes(roll)) &&
        (name === "" || student.name.toLowerCase().includes(name.toLowerCase())) &&
        (studentClass === "" ||
          student["class"]?.toLowerCase().includes(studentClass.toLowerCase())) &&
        (marks === "" || student.marks.toString().includes(marks))
      );
    });

    setFilteredStudents(filtered);
  }, [allStudents, searchParams]);

  
  const handleSearch = (filters) => {
    const { roll, name, studentClass, marks } = filters;
    const params = {};

    if (roll) params.roll = roll;
    if (name) params.name = name;
    if (studentClass) params.class = studentClass;
    if (marks) params.marks = marks;

    setSearchParams(params);
  };


  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this student?");
    if (confirmDelete) {
      await deleteStudent(id);
      fetchStudents(); 
    }
  };

  return (
    <div className="page-container">
      <h1 className="page-title">Student Dashboard</h1>
      <SearchBar
        onSearch={handleSearch}
        initialValues={{
          roll: searchParams.get("roll") || "",
          name: searchParams.get("name") || "",
          studentClass: searchParams.get("class") || "",
          marks: searchParams.get("marks") || "",
        }}
      />
      <Table students={filteredStudents} onDelete={handleDelete} />
    </div>
  );
};

export default Dashboard;
