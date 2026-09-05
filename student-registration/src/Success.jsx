import { useNavigate } from "react-router-dom";

function Success() {
  const navigate = useNavigate();

  return (
    <div className="success-container">
      <div className="success-box">

        <div className="success-icon">✓</div>

        <h1>Submitted Successfully!</h1>

        <p>
          Your student registration form has been submitted successfully.
        </p>

        <button onClick={() => navigate("/")}>
          Go Back
        </button>

      </div>
    </div>
  );
}

export default Success;