import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDataStore } from "../../store/DataStore";

const Joke = () => {
  const {joke,setJoke,username,setUsername,loading,setLoading}=useDataStore()

  useEffect(() => {
    const fetchJoke = async () => {
      const token = localStorage.getItem("token");
      setLoading(true)
      const response = await axios.get("https://official-joke-api.appspot.com/random_joke");
      
      if (token) {
        const userResponse = await axios.get("https://recipes-uhra.onrender.com/api/user/username", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const user = userResponse.data.user;
        setUsername(user);
      }
      setJoke(response.data.setup + " " + response.data.punchline);
      setLoading(false);
    };

    fetchJoke();
  }, []);

  return (
    <div className="fun-section d-flex flex-column align-items-center justify-content-center min-vh-100 text-center">
      {loading?<p className="text-white">Loading...</p>
      :<>
      <div className="mb-5 animate__animated animate__fadeIn animate__delay-1s">
        <h1 className="display-3 text-orangered">
          🌟 Welcome to the Fun Zone, {username && <strong>{username}</strong>}! 🎉
        </h1>
        <p className="lead text-white">
          Ready to have a laugh? Let's go! 🤣
        </p>
      </div>

      <div
        className={`joke-container mt-5 p-4 text-center animate__animated ${loading ? "animate__fadeOut" : "animate__fadeIn animate__delay-1s"}`}
        style={{ width: "70%", opacity: loading ? 0 : 1, transition: "opacity 1s ease-out", borderRadius: "15px" }}
      >
        {loading ? (
          <div className="spinner-border text-orangered" role="status"></div>
        ) : (
          <p className="text-dark" style={{ fontSize: "1.5rem" }}>
            {joke}
          </p>
        )}
      </div>

      <div className="emoji-container mt-5">
        <p className="emoji-text text-white">✨ Here's a bonus emoji to brighten your day! ✨</p>
        <div className="emoji-box animate__animated animate__zoomIn animate__delay-2s">
          <span className="emoji">😄</span>
          <span className="emoji">💥</span>
          <span className="emoji">🔥</span>
        </div>
      </div>
      </>}
    </div>
  );
};

export default Joke;
