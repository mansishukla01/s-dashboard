import React, { createContext, useEffect, useState, useContext } from "react";

export const StudentContext = createContext(null);

export const StudentProvider = ({ children }) => {
  const [students, setStudents] = useState([]);
  const baseUrl = "http://localhost:4002";

  const fetchStudents = async () => {
    try {
      const res = await fetch(`${baseUrl}/students`);
      if (!res.ok) throw new Error(`Fetch failed: ${res.status}`);
      const data = await res.json();
      setStudents(data);
      return data;
    } catch (error) {
      // keep errors visible in console but don't crash the app
      // callers can still handle by reading the returned promise
      console.error("fetchStudents error:", error);
      return [];
    }
  };

  const addStudent = async (student) => {
    try {
      const res = await fetch(`${baseUrl}/students`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(student),
      });
      if (!res.ok) throw new Error(`Add failed: ${res.status}`);
      const data = await res.json();
      setStudents((s) => [...s, data]);
      return data;
    } catch (error) {
      console.error("addStudent error:", error);
      throw error;
    }
  };

  const updateStudent = async (id, updates) => {
    try {
      const res = await fetch(`${baseUrl}/students/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updates),
      });
      if (!res.ok) throw new Error(`Update failed: ${res.status}`);
      const data = await res.json();
      setStudents((prev) => prev.map((p) => (p.id === id ? data : p)));
      return data;
    } catch (error) {
      console.error("updateStudent error:", error);
      throw error;
    }
  };

  const deleteStudent = async (id) => {
    try {
      const res = await fetch(`${baseUrl}/students/${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error(`Delete failed: ${res.status}`);
      setStudents((prev) => prev.filter((p) => p.id !== id));
      return true;
    } catch (error) {
      console.error("deleteStudent error:", error);
      throw error;
    }
  };

  useEffect(() => {
    // initial load
    void fetchStudents();
    // no dependencies: run once on mount
  }, []);

  return (
    <StudentContext.Provider
      value={{ students, fetchStudents, addStudent, updateStudent, deleteStudent }}
    >
      {children}
    </StudentContext.Provider>
  );
};

export default StudentContext;

// Hook for components to consume the context conveniently
export const useStudents = () => {
  const ctx = useContext(StudentContext);
  if (!ctx) {
    throw new Error("useStudents must be used within a StudentProvider");
  }
  return ctx;
};
