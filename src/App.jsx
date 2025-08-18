import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import QuizPage from "./pages/QuizPage";
import ResultPage from "./pages/Resultpage";
import StartQuizPage from "./pages/StartQuizPage";
import LeaderboardPage from "./pages/LeaderboardPage";

const App = () => {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<StartQuizPage />}/>
          <Route path="/quiz" element={<QuizPage />}/>
          <Route path="/results" element={<ResultPage />}/>
          <Route path="/leaderboard" element={<LeaderboardPage />}/>
        </Routes>
    </Router>
  );
};

export default App;



// import StartQuizPage from "./pages/StartQuizPage";
// import QuizPage from "./pages/QuizPage";
// import ResultPage from "./pages/Resultpage";

// <Routes>
//   <Route path="/" element={<StartQuizPage />} />
//   <Route path="/quiz" element={<QuizPage />} />
//   <Route path="/results" element={<ResultPage />} />
// </Routes>
