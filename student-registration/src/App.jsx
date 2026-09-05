import { useState } from "react";
import "./App.css";

function App() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [course, setCourse] = useState("");

  const [student, setStudent] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    setStudent({
      name: name,
      email: email,
      course: course
    });
  };

  return (
    <div className="container">

      <div className="form-box">

        <h1>Student Registration Form</h1>

        <form onSubmit={handleSubmit}>

          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
          />

          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />

          <label>Course</label>
          <select
            value={course}
            onChange={(e) => setCourse(e.target.value)}
          >
            <option value="">Select Course</option>
            <option value="B.Tech">B.Tech</option>
            <option value="BCA">BCA</option>
            <option value="MCA">MCA</option>
          </select>

          <button type="submit">
            Register
          </button>

        </form>

        {student && (
          <div className="student-details">

            <h2>Submitted Student Details</h2>

            <p>Name: {student.name}</p>
            <p>Email: {student.email}</p>
            <p>Course: {student.course}</p>

          </div>
        )}

      </div>

    </div>
  );
}

export default App;