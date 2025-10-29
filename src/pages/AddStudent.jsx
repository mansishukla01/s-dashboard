import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Table from "../components/Table";
import StudentForm from "../components/StudentForm";
import { useStudents } from "../context/StudentContext";

const AddStudent = () => {
  const navigate = useNavigate();
  const { students, loading, fetchStudents, addStudent } = useStudents();
  const [student, setStudent] = useState({
    roll: "",
    name: "",
    marks: "",
    studentClass: "",
  });

  useEffect(() => {
    fetchStudents();
  }, [fetchStudents]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudent((s) => ({ ...s, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const success = await addStudent(student);
    if (success) {
      setStudent({ roll: "", name: "", marks: "", studentClass: "" });
      navigate("/", { replace: true });
    }
  };

  return (
    <div className="add-student-page">
      <div className="page-container">
        <h2 className="page-title">Add Student</h2>
        <StudentForm
          student={student}
          onChange={handleChange}
          onSubmit={handleSubmit}
          loading={loading}/>
        <Table students={students} />
      </div>
    </div>
  );
};

export default AddStudent;


