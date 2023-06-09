import React, { useState } from "react";
import axios from "axios";
import "../css/Login.css";
import gambar from "../assets/gambar.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const apiUrl = "https://tame-erin-scarab-boot.cyclic.app/api/";

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

    try {
      const response = await axios.post(apiUrl + "login", {
        email: email,
        password: password,
      });

      // Berhasil masuk, dapatkan header Authorization
      const authorizationHeader = response.headers['authorization'];
      // Lakukan apa yang perlu Anda lakukan dengan header Authorization
      console.log(authorizationHeader);

      // Reset nilai email dan password setelah berhasil masuk
      setEmail("");
      setPassword("");
    } catch (error) {
      // Tangani kesalahan jaringan atau kesalahan lainnya
      console.error(error);
      // Tampilkan pesan kesalahan kepada pengguna
      alert("Gagal masuk. Silakan coba lagi.");
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
