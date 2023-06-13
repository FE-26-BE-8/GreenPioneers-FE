import React, { useState } from "react";
import "../css/Login.css";
import gambar from "../assets/gambar.png";
import UseApiCall from "../../src/helper/UseApiCall";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {data, fetchData, error} = UseApiCall();

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    // Validasi input kosong
    if (email.trim() === "") {
      alert("Email harus diisi!");
      return;
    }

    if (password.trim() === "") {
      alert("Password harus diisi!");
      return;
    }

    const userInput = {
      email,
      password,
    }
    const data = await fetchData("https://pear-vast-bream.cyclic.app/api/login", "post", userInput)
    if (data.status === 200) {
      alert("Berhasil Login")
      console.log(data.headers['authorization'])
      localStorage.setItem("Authorization",data.headers['authorization'])
    }
  };


  return (
    <div className="login-body">
      <div className="login-container">
        <div className="login-left">
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
            <button type="submit">Login</button>
          </form>
          <p className="signup">
            Don't have an account? <a href="register.html">Sign Up</a>
          </p>
        </div>
        <div className="login-right">
          <img src={gambar} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Login;
