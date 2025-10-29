import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {

  const [filters, setFilters] = useState({
    roll: "",
    name: "",
    studentClass: "",
    marks: "",
  });

  
  const handleChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });
  };

  
  const handleSearch = () => {
    onSearch(filters); 
  };

  return (
    <div className="student-form" role="search">
      <div className="search-inputs-wrapper">
        <input
          className="search-input"
          type="text"
          name="roll"
          placeholder="Search by Roll"
          value={filters.roll}
          onChange={handleChange}
          aria-label="search by roll"/>
        <input
          className="search-input"
          type="text"
          name="name"
          placeholder="Search by Name"
          value={filters.name}
          onChange={handleChange}
          aria-label="search by name"/>
        <input
          className="search-input"
          type="text"
          name="studentClass"
          placeholder="Search by Class"
          value={filters.studentClass}
          onChange={handleChange}
          aria-label="search by class"/>
        <input
          className="search-input"
          type="text"
          name="marks"
          placeholder="Search by Marks"
          value={filters.marks}
          onChange={handleChange}
          aria-label="search by marks"/>
        <button className="search-button btn" onClick={handleSearch} aria-label="search">
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;




