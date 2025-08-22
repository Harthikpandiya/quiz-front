
import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { questions } from "../data/Questions.jsx";
import QuestionCard from "../components/QuestionCard";
import axios from "axios";

const QuizPage = () => {
  const [currentQ, setCurrentQ] = useState(0);
  const [startTime, setStartTime] = useState(Date.now());
  const [answers, setAnswers] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();

  const { name, email } = location.state || {};

  const handleAnswer = async (selectedOption) => {
    const endTime = Date.now();
    const timeTaken = (endTime - startTime) / 1000;

    const newAnswer = {
      question: questions[currentQ].question,
      selected: selectedOption,
      correct: questions[currentQ].answer,
      timeTaken,
    };

    const updatedAnswers = [...answers, newAnswer];
    setAnswers(updatedAnswers);

    if (currentQ < questions.length - 1) {
      setCurrentQ((prev) => prev + 1);
      setStartTime(Date.now());
    } else {
      const totalTime = updatedAnswers.reduce((sum, a) => sum + a.timeTaken, 0);


      try {
       await axios.post("https://quiz-backend-2j9k.onrender.com/api/results/submit", {
          name,
          email,
          totalTime,
          answers: updatedAnswers,
        });
        navigate("/results", {
          state: { name, email, totalTime, answers: updatedAnswers },
        });
      } catch (error) {
        console.error("Failed to submit quiz:", error.message);
        alert("Submission failed. Please check your internet or server.");
      }
    }
  };

  return (
    <div className="quiz-container">
      <QuestionCard
        questionData={questions[currentQ]}
        onAnswer={handleAnswer}
      />
    </div>
  );
};

export default QuizPage;
