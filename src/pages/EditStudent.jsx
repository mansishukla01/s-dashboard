import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useStudents } from "../context/StudentContext";

const EditStudent = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { students, updateStudent } = useStudents();

  const student = students.find((s) => s.id === Number(id));

  const [form, setForm] = useState({
    roll: "",
    name: "",
    studentClass: "",
    marks: "",
  });

  useEffect(() => {
    if (student) {
      setForm(student);
    }
  }, [student]);

  const handleChange = (key, value) => {
    setForm({ ...form, [key]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateStudent(Number(id), form);
    navigate("/"); // back to dashboard
  };

  return (
    <div className="page-container">
      <h2>Edit Student</h2>

      <form onSubmit={handleSubmit} className="edit-form">
        <input
          type="text"
          value={form.roll}
          onChange={(e) => handleChange("roll", e.target.value)}/>

        <input
          type="text"
          value={form.name}
          onChange={(e) => handleChange("name", e.target.value)}/>

        <input
          type="text"
          value={form.studentClass}
          onChange={(e) => handleChange("studentClass", e.target.value)}/>

        <input
          type="text"
          value={form.marks}
          onChange={(e) => handleChange("marks", e.target.value)}/>

        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default EditStudent;
