import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const stored = JSON.parse(localStorage.getItem("user"));

    if (stored?.email === form.email && stored?.password === form.password) {
      login(stored);
      navigate("/profile");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="login-box">
      <h2>
        {" "}
        Signin to your <br />
        PopX account
      </h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <p className="subtitle">
          Lorem ipsum dolor sit amet,
          <br />
          consectetur adipisicing elit,
        </p>

        <label>Email Address</label>
        <input
          type="email"
          placeholder="Enter email address"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required
        />

        <label>Password</label>
        <input
          type="password"
          placeholder="Enter password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          required
        />

        <button className="login-btn" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
