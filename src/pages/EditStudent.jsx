import React, { useState, useEffect } from "react";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import { useStudents } from "../context/StudentContext";

const EditStudent = () => {
  const { state } = useLocation();
  const { id } = useParams();
  const { updateStudent } = useStudents();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    roll: "",
    studentClass: "",
    marks: "",
  });

  useEffect(() => {
    if (state) {
      setFormData(state);
    }
  }, [state]);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateStudent(id, formData);
    navigate("/");
  };
  

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}/>
      <input
        value={formData.roll}
        onChange={(e) => setFormData({ ...formData, roll: e.target.value })}/>
      <input
        value={formData.studentClass}
        onChange={(e) =>
          setFormData({ ...formData, studentClass: e.target.value })
        }/>
      <input
        value={formData.marks}
        onChange={(e) => setFormData({ ...formData, marks: e.target.value })}/>
      <button type="submit">Update</button>
    </form>
  );
};

export default EditStudent;

