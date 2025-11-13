import { useStudents } from "../context/StudentContext";
import { useNavigate } from "react-router-dom";

const Table = ({ students }) => {
  const { deleteStudent } = useStudents();
  const navigate = useNavigate();

  const handleEdit = (stu) => {
    navigate(`/edit/${stu.id}`, { state: stu });
  };

  const handleDelete = (id) => {
    if (confirm("Do you want to delete this record?")) {
      deleteStudent(id);
    }
  };

  return (
    <table className="table">
      <thead>
        <tr>
          <th>Id</th>
          <th>Roll</th>
          <th>Name</th>
          <th>Class</th>
          <th>Marks</th>
          <th>Actions</th>
        </tr>
      </thead>

      <tbody>
        {students.map((stu) => (
          <tr key={stu.id}>
            <td>{stu.id}</td>
            <td>{stu.roll}</td>
            <td>{stu.name}</td>
            <td>{stu.studentClass}</td>
            <td>{stu.marks}</td>

            <td>
              <button onClick={() => handleEdit(stu)}>Edit</button>
              <button onClick={() => handleDelete(stu.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;





  

