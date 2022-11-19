import axios from "axios";
import { useContext, useRef } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./login.css";

export default function Login() {
  const userRef = useRef();
  const passwordRef = useRef();
  const { dispatch, isFetching } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("/auth/login", {
        username: userRef.current.value,
        password: passwordRef.current.value,
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE" });
    }
  };

  return (
    <div className="login">
      <div className="logincard">
        <span className="loginTitle">Login👩🏻‍💻</span>
        <form className="loginForm" onSubmit={handleSubmit}>
          <label>Username : </label>
          <input
            type="text"
            className="loginInput"
            placeholder="Enter username"
            ref={userRef}
            required
          />
          <label>Password : </label>
          <input
            type="password"
            className="loginInput"
            placeholder="Enter password"
            ref={passwordRef}
            required
          />
          <button className="loginButton" type="submit" disabled={isFetching}>
            Login
          </button>
        </form>
          <p className = "registertext">Create new account ? &nbsp;
            <Link to="/register" style={{display: 'inline-block', textDecoration : "none"}}>
              Register
            </Link>
          </p>
      </div>
    </div>
  );
}
