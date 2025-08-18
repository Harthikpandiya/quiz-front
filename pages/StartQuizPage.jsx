import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './quiz.css'

const StartQuizPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const startQuiz = () => {
    if (!name || !email) {
      alert("Please fill in both name and email.");
      return;
    }

    // Send name & email to quiz page via route state
    navigate("/quiz", { state: { name, email } });
  };

  return (
    <div className="start-container">
    
      <h2>Welcome to the Quiz!</h2>
      <input
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={startQuiz}>Start Quiz</button>
    </div>
  );
};

export default StartQuizPage;
