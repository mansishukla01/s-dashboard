import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [roll,setRoll]=useState("");
  const [name,setName]=useState("");
  const [studentClass,setStudentClass]=useState("");
  const [marks,setMarks]=useState("");


  const handleSearch = () => {
    onSearch(roll,name,studentClass,marks);
  };

  return (
    <div className="search-bar">
       <input
        type="text"
        placeholder="Roll"
        value={roll}
        onChange={(e) => setRoll(e.target.value)}/>
      <button onClick={handleSearch}>Roll</button>

      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}/>
      <button onClick={handleSearch}>Name</button>

      <input
        type="text"
        placeholder="studentClass"
        value={studentClass}
        onChange={(e) => setStudentClass(e.target.value)}/>
      <button onClick={handleSearch}>Class</button>

      <input 
      type="text"
      placeholder="Marks"
      value={marks}
      onChange={(e)=> setMarks(e.target.value)}/>
      <button onClick={handleSearch}>Marks</button>
    </div>
  );
};

export default SearchBar;
