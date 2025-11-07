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
      console.error("Fetch error:", error);
    }
  }, []);

  return (
    <StudentContext.Provider value={{ students, fetchStudents }}>
      {children}
    </StudentContext.Provider>
  );
};

export const useStudents = () => useContext(StudentContext);
