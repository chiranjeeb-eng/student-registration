import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [course, setCourse] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/success");
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
            required
          />

          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />

          <label>Course</label>
          <select
            value={course}
            onChange={(e) => setCourse(e.target.value)}
            required
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

      </div>
    </div>
  );
}

export default App;