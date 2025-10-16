import React, { useState } from "react";

const AddStudent = () => {
  const [student, setStudent] = useState({
    roll: "",
    name: "",
    marks: "",
    studentClass: "",
  });

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Student Added:", student);
    alert("Student added successfully!");
  };

  return (
    <div>
      <h1>Add New Student</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="roll"
          placeholder="Enter Roll No"
          onChange={handleChange}/>
        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          onChange={handleChange}/>
        <input
          type="text"
          name="studentClass"
          placeholder="Enter Class"
          onChange={handleChange}/>
        <input
          type="text"
          name="marks"
          placeholder="Enter Marks"
          onChange={handleChange}/>
        <button type="submit">Add Student</button>
      </form>
    </div>
  );
};

export default AddStudent;
