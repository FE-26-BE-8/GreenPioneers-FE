import React, { useState } from "react";
import "./Register.css";
import UseApiCall from "../../../helper/UseApiCall";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const { data, fetchData, error } = UseApiCall();
  const navigate = useNavigate();

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    // Validasi input kosong
    if (username.trim() === "") {
      Swal("Error", "Username harus diisi!", "error");
      return;
    }

    if (email.trim() === "") {
      Swal("Error", "Email harus diisi!", "error");
      return;
    }

    if (password.trim() === "") {
      Swal("Error", "Password harus diisi!", "error");
      return;
    }

    if (confirmpassword.trim() === "") {
      Swal("Error", "Confirm Password harus diisi!", "error");
      return;
    }

    const userInput = {
      nama: username,
      email,
      password,
      confPassword: confirmpassword,
    };

    const data = await fetchData(
      "https://pear-vast-bream.cyclic.app/api/register",
      "post",
      userInput
    );
    if (data.status === 201) {
      Swal("Success", "Berhasil Register! Silahkan Login", "success");
      navigate("/login");
    } else if (error) {
      Swal("Error", "Gagal Register!", "error");
    }
    console.log(data);
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
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </div>
        <div className="login-right">
          <img src="../src/assets/img/gambar.png" alt="Gambar-Register" />
        </div>
      </div>
    </div>
  );
};

export default Register;
