import React, { useState } from "react";
import InputField from "./InputField";

const SearchBar = ({ onSearch }) => {
  const [roll, setRoll] = useState("");
  const [name, setName] = useState("");
  const [studentClass, setStudentClass] = useState("");
  const [marks, setMarks] = useState("");

  const handleSearch = () => {
    onSearch({ roll, name, studentClass, marks });
  };

  return (
    <div className="search-bar">

      <InputField
        label="Search by Roll"
        value={roll}
        onChange={setRoll}
        placeholder="Search by Roll"/>

      <InputField
        label="Search by Name"
        value={name}
        onChange={setName}
        placeholder="Search by Name"/>

      <InputField
        label="Search by Class"
        value={studentClass}
        onChange={setStudentClass}
        placeholder="Search by Class"/>

      <InputField
        label="Search by Marks"
        value={marks}
        onChange={setMarks}
        placeholder="Search by Marks"/>

      <button className="search-btn" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
};

export default SearchBar;





