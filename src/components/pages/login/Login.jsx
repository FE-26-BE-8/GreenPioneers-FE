import React, { useState } from "react";
import "./Login.css";
import UseApiCall from "../../../helper/UseApiCall";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { data, fetchData, error } = UseApiCall();
  const navigate = useNavigate();

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (email.trim() === "") {
      Swal("Error", "Email harus diisi!", "error");
      return;
    }

    if (password.trim() === "") {
      Swal("Error", "Password harus diisi!", "error");
      return;
    }

    const userInput = {
      email,
      password,
    };

    const data = await fetchData(
      "https://pear-vast-bream.cyclic.app/api/login",
      "post",
      userInput
    );

    if (data.status === 200) {
      Swal("Success", "Berhasil Login!", "success").then(() => {
        localStorage.setItem("Authorization", data.headers["authorization"]);
        navigate("/list-news");
      });
    } else {
      Swal("Error", "Gagal Login!", "error");
    }
  };

  return (
    <>
      <div className="login-body">
        <div className="login-container">
          <div className="login-left">
            <Link to="/" className="btn-back">
            ← Kembali
            </Link>
            <form
              id="login-form"
              className="login-forms"
              onSubmit={handleFormSubmit}
            >
              <h1 className="login-title">Login</h1>
              <hr className="login-hr" />
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button className="btn-login" type="submit">
                Login
              </button>
            </form>
            <div className="signup">
              Don't have an account? <Link to="/register">Sign Up</Link>
            </div>
          </div>
          <div className="login-right">
            <img src="https://i.ibb.co/rkvcZ52/gambar.png" alt="Gambar-Login" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
