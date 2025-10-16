import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

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
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4002/students")
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched data:", data);
        setStudents(data);
      })
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  
  const handleSearch = (query) => {
    const filtered = students.filter((student) =>
      student.name.toLowerCase().includes(query.toLowerCase())
    );
    setStudents(filtered);
  };

  return (
    <BrowserRouter>
      <Header/>

      
      <nav
        style={{
          display: "flex",
          gap: "20px",
          justifyContent: "center",
          margin: "20px 0",
        }}>
        <Link to="/">Dashboard</Link>
        <Link to="/add-student">Add Student</Link>
        <Link to="/student-details">Student Details</Link>
        <Link to="/about">About</Link>
      </nav>

      <Routes>
    
        <Route
          path="/"
          element={
            <>
              <SearchBar onSearch={handleSearch}/>
              <DashboardContent />
              <Table students={students}/>
              <Button
                label="Students Detail"
                onClick={() => alert("Successfully Clicked!")}/>
            </>
          }/>

       
        <Route path="/add-student" element={<AddStudent />}/>
        <Route path="/student-details" element={<StudentDetails />}/>
        </Routes>
    
      <Footer/>
    </BrowserRouter>
    
  );
}

export default App;

