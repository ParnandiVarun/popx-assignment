import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="main-wrapper">
      <h2>Welcome to PopX</h2>

      <span className="lorem">
        <p>Lorem ipsum dolor sit amet,</p>
        <p>consectetur adipisicing elit,</p>
      </span>

      <div className="btn-box">
        <Button
          variant="contained"
          onClick={() => navigate("/signup")}
          style={{ backgroundColor: "#6C2EFF" }}
        >
          Create Account
        </Button>

        <Button
          variant="contained"
          onClick={() => navigate("/login")}
          style={{
            backgroundColor: "#D6C6FF",
            color: "#03000ae2",
            fontWeight: "580",
          }}
        >
          Already Registered? Login
        </Button>
      </div>
    </div>
  );
};

export default Landing;
