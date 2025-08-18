// import React from "react";
// import { useLocation } from "react-router-dom";

// const ResultPage = () => {
//   const { state } = useLocation();
//   const answers = state?.answers || [];

//   return (
//     <div>
//       <h2>Results</h2>
//       {answers.map((ans, idx) => (
//         <div key={idx}>
//           <p><strong>Q:</strong> {ans.question}</p>
//           <p><strong>Your Answer:</strong> {ans.selected}</p>
//           <p><strong>Correct:</strong> {ans.correct}</p>
//           <p><strong>Time Taken:</strong> {ans.timeTaken.toFixed(2)}s</p>
//           <hr />
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ResultPage;

// import React from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import './quiz.css'

// const ResultsPage = () => {
//   const location = useLocation();
//   const navigate = useNavigate();

//   const { name, email, totalTime, answers } = location.state || {};

//   const correctCount = answers.filter((a) => a.selected === a.correct).length;

//   return (
//     <div className="result-container">
//       <h2>🎉 Quiz Completed!</h2>
//       <p>
//         <strong>Name:</strong> {name}
//       </p>
//       <p>
//         <strong>Email:</strong> {email}
//       </p>
//       <p>
//         <strong>Total Correct:</strong> {correctCount} / {answers.length}
//       </p>
//       <p>
//         <strong>Total Time:</strong> {Math.round(totalTime)} seconds
//       </p>

     
//       <button onClick={() => navigate("/leaderboard", { state: { email } })} className="btnl">
//         <i class="fa-solid fa-trophy"></i>   View Leaderboard
//       </button>
//     </div>
//   );
// };

// export default ResultsPage;


import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Confetti from "react-confetti";
import './quiz.css';

const ResultsPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { name, email, totalTime, answers } = location.state || {};
  const correctCount = answers.filter((a) => a.selected === a.correct).length;

  // Confetti control
  const [showConfetti, setShowConfetti] = useState(true);
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  // Stop confetti after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowConfetti(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  // Update confetti size on window resize
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="result-container">
      {showConfetti && (
        <Confetti width={windowSize.width} height={windowSize.height} />
      )}
      <h2>🎉 Quiz Completed!</h2>
      <p>
        <strong>Name:</strong> {name}
      </p>
      <p>
        <strong>Email:</strong> {email}
      </p>
      <p>
        <strong>Total Correct:</strong> {correctCount} / {answers.length}
      </p>
      <p>
        <strong>Total Time:</strong> {Math.round(totalTime)} seconds
      </p>

      <button
        onClick={() => navigate("/leaderboard", { state: { email } })}
        className="btnl"
      >
        <i className="fa-solid fa-trophy"></i> View Leaderboard
      </button>
    </div>
  );
};

export default ResultsPage;
