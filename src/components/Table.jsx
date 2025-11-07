import { useStudents } from "../context/StudentContext";
import { useNavigate } from "react-router-dom";

const Table = ({ students }) => {
  const { deleteStudent } = useStudents();
  const navigate = useNavigate();

  const handleEdit = (id) => {
    navigate(`/edit/${id}`);
  };

  const handleDelete = (id) => {
    if (confirm("Do you really want to delete this record?")) {
      deleteStudent(id);
    }
  };

  return (
    <table className="table">
      <thead>
        <tr>
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
            <td>{stu.roll}</td>
            <td>{stu.name}</td>
            <td>{stu.studentClass}</td>
            <td>{stu.marks}</td>
            <td>
              <button
                className="edit-btn"
                onClick={() => handleEdit(stu.id)}>
                Edit
              </button>

              <button
                className="delete-btn"
                onClick={() => handleDelete(stu.id)}>
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default Table;



  

