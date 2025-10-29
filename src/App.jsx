import React, { useState, useEffect } from "react";
import {Routes, Route, NavLink, useNavigate} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SearchBar from "./components/SearchBar";
import Button from "./components/Button";
import DashboardContent from "./components/DashboardContent";
import Table from "./components/Table";
import Dashboard from "./pages/Dashboard";
import AddStudent from "./pages/AddStudent";
import StudentDetails from "./pages/StudentDetails";


function App() {
  const [allStudents, setAllStudents] = useState([]);
  const [students, setStudents] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:4002/students")
      .then((res) => res.json())
      .then((data) => {
        setStudents(data);
        setAllStudents(data);
      })
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

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
    <>
  
      <Header/>
      <nav>
        <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>
          Dashboard
        </NavLink>
        <NavLink to="/add-student" className={({ isActive }) => isActive ? 'active' : ''}>
          Add Student
        </NavLink>
        <NavLink to="/student-details" className={({ isActive }) => isActive ? 'active' : ''}>
          Student Details
        </NavLink>
      </nav>

      <Routes>
        <Route
          path="/"
          element={
            <div className="page-container">
              <SearchBar onSearch={handleSearch} />
              <Table students={students} />
              <DashboardContent />
              <div className="centered-action">
                <Button
                  label="Students Detail"
                  onClick={() => navigate('/student-details', { state: { students } })}/>
              </div>
            </div>
          }/>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/add-student" element={<AddStudent />} />
        <Route path="/student-details" element={<StudentDetails />} />
      </Routes>
      <Footer/>
      </>
  );
}

export default App;




