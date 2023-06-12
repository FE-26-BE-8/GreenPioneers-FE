import React, { useState } from "react";
import "../css/Register.css";
import gambar from "../assets/img/gambar.png";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Validasi input kosong
    if (username.trim() === "") {
      alert("Username harus diisi!");
      return;
    }

    if (email.trim() === "") {
      alert("Email harus diisi!");
      return;
    }

    if (password.trim() === "") {
      alert("Password harus diisi!");
      return;
    }

    if (confirmpassword.trim() === "") {
      alert("Confirm Password harus diisi!");
      return;
    }

    alert("Sign up berhasil!");
    window.location.href = "article.html";
  };

  return (
    <div className="login-body">
      <div className="login-container">
        <div className="login-left">
          <form
            id="register-form"
            className="login-forms"
            onSubmit={handleFormSubmit}
          >
            <h1 className="login-title">Register</h1>
            <hr className="login-hr" />
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
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
            <label htmlFor="confirmpassword">Confirm Password</label>
            <input
              type="password"
              id="confirmpassword"
              placeholder="Confirm Password"
              value={confirmpassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <button type="submit">Register</button>
          </form>
          <p className="signup">
            Already have an account? <a href="#">Login</a>
          </p>
        </div>
        <div className="login-right">
          <img src={gambar} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Register;
