import React from 'react';

const StudentForm = ({ student, onChange, onSubmit, loading }) => {
  return (
    <form className="student-form" onSubmit={onSubmit}>
      <div className="search-inputs-wrapper">
        <input
          required
          name="roll"
          placeholder="Roll No"
          value={student.roll}
          onChange={onChange}
          className="search-input"/>
        <input
          required
          name="name"
          placeholder="Name"
          value={student.name}
          onChange={onChange}
          className="search-input"/>
        <input
          required
          name="marks"
          placeholder="Marks"
          type="number"
          min="0"
          max="100"
          value={student.marks}
          onChange={onChange}
          className="search-input"/>
        <input
          required
          name="studentClass"
          placeholder="Class"
          value={student.studentClass}
          onChange={onChange}
          className="search-input"/>
        <button type="submit" className="search-button" disabled={loading}>
          {loading ? "Adding..." : "Add Student"}
        </button>
      </div>
    </form>
  );
};

export default StudentForm;