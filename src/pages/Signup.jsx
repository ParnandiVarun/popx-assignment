import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    email: "",
    password: "",
    company: "",
    agency: "yes",
  });

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    localStorage.setItem("user", JSON.stringify(form));
    login(form);
    navigate("/profile");
  };

  return (
    <div className="signup-box">
      <h2>
        Create your <br></br> PopX account
      </h2>

      <form className="signup-form" onSubmit={handleSubmit}>
        <label>Full Name*</label>
        <input
          name="fullName"
          type="text"
          placeholder="John Doe"
          value={form.fullName}
          onChange={handleChange}
          required
        />

        <label>Phone number*</label>
        <input
          name="phone"
          type="text"
          placeholder="+1 234 567 890"
          value={form.phone}
          onChange={handleChange}
          required
        />

        <label>Email address*</label>
        <input
          name="email"
          type="email"
          placeholder="example@mail.com"
          value={form.email}
          onChange={handleChange}
          required
        />

        <label>Password*</label>
        <input
          name="password"
          type="password"
          placeholder="Choose a strong password"
          value={form.password}
          onChange={handleChange}
          required
        />

        <label>Company name</label>
        <input
          name="company"
          type="text"
          placeholder="Optional"
          value={form.company}
          onChange={handleChange}
        />

        <div className="radio-group">
          <p>Are you an Agency?</p>

          <div className="radio-options">
            <label>
              <input
                type="radio"
                name="agency"
                value="yes"
                checked={form.agency === "yes"}
                onChange={handleChange}
              />
              Yes
            </label>

            <label>
              <input
                type="radio"
                name="agency"
                value="no"
                checked={form.agency === "no"}
                onChange={handleChange}
              />
              No
            </label>
          </div>
        </div>

        <button className="btn-primary" type="submit">
          Create Account
        </button>
      </form>
    </div>
  );
};

export default Signup;
