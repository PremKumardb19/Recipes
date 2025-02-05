import React from "react";
import { useNavigate,Link } from "react-router-dom";
import axios from "axios";
import { useAuthStore } from "../../store/AuthStore";
import { useDataStore } from "../../store/DataStore";


const Login = () => {
  const {email,setEmail,password,setPassword,setIsLogged}=useAuthStore()
  const {loading,setLoading}=useDataStore()
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
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
    finally{
      setLoading(false);
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
          {!loading?"Let’s Cook!":"Loading..."}
        </button>
      </form>
        <p className="text-center mt-3">
          Don't have an account? <Link to="/register">Register</Link> 
        </p>
     
    </div>
  );
};

export default Login;