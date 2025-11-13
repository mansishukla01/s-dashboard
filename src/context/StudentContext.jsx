import React, {
  createContext,
  useState,
  useContext,
  useCallback,
} from "react";

const StudentContext = createContext(null);

export const StudentProvider = ({ children }) => {
  const [students, setStudents] = useState([]);

  const fetchStudents = useCallback(async () => {
    try {
      const res = await fetch("http://localhost:4002/students");
      const data = await res.json();
      setStudents(data);
    } catch (error) {
      console.error("Fetch Error:", error);
    }
  }, []);

  const updateStudent = useCallback(async (id, updatedData) => {
    try {
      const res = await fetch(`http://localhost:4002/students/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedData),
      });

      const data = await res.json();
      setStudents((prev) =>
        prev.map((stu) => (stu.id === id ? data : stu))
      );
    } catch (error) {
      console.error("Update Error:", error);
    }
  }, []);

  const deleteStudent = useCallback(async (id) => {
    try {
      await fetch(`http://localhost:4002/students/${id}`, {
        method: "DELETE",
      });

      setStudents((prev) => prev.filter((stu) => stu.id !== id));
    } catch (error) {
      console.error("Delete Error:", error);
    }
  }, []);

  return (
    <StudentContext.Provider
      value={{students,fetchStudents,updateStudent,deleteStudent}}>
      {children}
    </StudentContext.Provider>
  );
};

export const useStudents = () => useContext(StudentContext);

