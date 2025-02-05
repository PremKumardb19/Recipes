
import React,{useEffect} from "react";
import {useAuthStore} from "../../store/AuthStore"
import { useNavigate,Link } from "react-router-dom";
import axios from "axios";
import { useDataStore } from "../../store/DataStore";

const Register = () => {
  const {name,setName,email,setEmail,password,setPassword}=useAuthStore()
  const {loading,setLoading}=useDataStore()
  const navigate = useNavigate();
  
  useEffect(()=>{
    setName("")
    setEmail("")
    setPassword("")
  },[])

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true)
    try {
      const response = await axios.post("https://recipes-uhra.onrender.com/api/auth/register", {
        name,
        email,
        password,
      });
      navigate("/login");
    } catch (error) {
      console.error("Registration error", error);
      alert("Registration failed. Please try again.");
    }
    finally{
       setLoading(false);
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center text-danger">Join the Recipe Journey</h2>
      <form onSubmit={handleRegister} className="w-50 mx-auto">
        <div className="mb-3">
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
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
          {loading?"Loading...":"Let’s Get Cooking!"}
        </button>
      </form>
      <p className="text-center mt-3">
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
};

export default Register;
