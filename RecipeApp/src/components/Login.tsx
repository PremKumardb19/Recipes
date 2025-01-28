import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

interface LoginProps {
  setIsLogged: (isLogged: boolean) => void;
}

const Login = ({ setIsLogged }: LoginProps) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post("https://recipes-uhra.onrender.com/api/auth/login", {
        email,
        password,
      });
      setIsLogged(true);
      localStorage.setItem("token", response.data.token);

      navigate("/");
    } catch (error: any) {
      console.error("Login error", error);
      alert("Invalid credentials");
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center text-danger">Login to Continue</h2>
      <form onSubmit={handleLogin} className="w-50 mx-auto">
        <div className="mb-3">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-danger w-100">
          Let’s Cook!
        </button>
      </form>
      <p className="text-center mt-3">
        Don't have an account? <a href="/register">Register</a>
      </p>
    </div>
  );
};

export default Login;
