import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./register.css";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      const res = await axios.post("/auth/register", {
        username,
        email,
        password,
      });
      res.data && window.location.replace("/login");
    } catch (err) {
      setError(true);
    }
  };
  return (
    <div className="register">
      <div className="logincard">
        <span className="registerTitle">Register🖊</span>
        <form className="registerForm" onSubmit={handleSubmit}>
          <label>Username : </label>
          <input
            type="text"
            className="registerInput"
            placeholder="Make a username"
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <label>Email : </label>
          <input
            type="text"
            className="registerInput"
            placeholder="Enter your valid email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label>Password : </label>
          <input
            type="password"
            className="registerInput"
            placeholder="Make strong password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button className="registerButton" type="submit">
            Register
          </button>
        </form>
        <p className="registertext">
          Already have an account ? &nbsp;
          <Link
            to="/login"
            style={{ display: "inline-block", textDecoration: "none" }}
          >
            Login
          </Link>
        </p>
      </div>

      {error && (
        <span style={{ color: "red", marginTop: "10px" }}>
          Something went wrong!
        </span>
      )}
    </div>
  );
}
