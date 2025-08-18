// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useLocation } from "react-router-dom";

// const LeaderboardPage = () => {
//   const [results, setResults] = useState([]);
//   const location = useLocation();
//   const currentUserEmail = location.state?.email;

//   useEffect(() => {
//     axios
//       .get("http://localhost:5000/api/results/leaderboard")
//       .then((res) => setResults(res.data))
//       .catch((err) => console.error("Leaderboard fetch error", err));
//   }, []);




// const LeaderboardPage = () => {
//   const [results, setResults] = useState([]);
//   const location = useLocation();
//   const currentUserEmail = location.state?.email;

//   useEffect(() => {
//     axios
//       .get("http://localhost:5000/api/results/leaderboard")
//       .then((res) => {
//         setResults(res.data);
//       })
//       .catch((err) => {
//         console.error("Error fetching leaderboard:", err);
//       });
//   }, []);




//   const sendEmail = async (email) => {
//   try {
//     await axios.post("http://localhost:5000/api/results/send-email", { email });
//     alert("Score emailed to " + email);
//   } catch (err) {
//     alert("Email failed. Check server.");
//     console.error(err);
//   }
// };


//   return (
//     <div className="leaderboard-container">
//       <h2>🏆 Leaderboard</h2>
//       <table>
//         <thead>
//           <tr>
//             <th>#</th>
//             <th>Name</th>
//             <th>Total Time (s)</th>
//           </tr>
//         </thead>
//         <tbody>
//           {/* {results.map((entry, index) => (
//             <tr
//               key={index}
//               style={{
//                 backgroundColor:
//                   entry.email === currentUserEmail ? "#e0ffe0" : "transparent",
//               }}
//             >
//               <td>{index + 1}</td>
//               <td>{entry.name}</td>
//               <td>{Math.round(entry.totalTime)} */}


//               {leaderboard.map((entry, index) => (
//   <tr key={index}>
//     <td>{index + 1}</td>
//     <td>{entry.name}</td>
//     <td>{entry.totalTime} s</td>
//     <td>
//       <button onClick={() => sendEmail(entry)}>📧 Send Score</button>
//     </td>
//   </tr>
// ))}


         
//         </tbody>
//       </table>
 


//     </div>
//   );
// };

// export default LeaderboardPage;



import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.min.css';
import './LeaderboardPage.css'

const LeaderboardPage = () => {
  const [results, setResults] = useState([]);
  const location = useLocation();
  const currentUserEmail = location.state?.email;

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/results/leaderboard")
      .then((res) => {
        setResults(res.data);
      })
      .catch((err) => {
        console.error("Error fetching leaderboard:", err);
      });
  }, []);

  // {correctCount} / {answers.length}

  const sendEmail = async (entry) => {
    try {
      await axios.post("http://localhost:5000/api/results/send-email", {
        name: entry.name,
        email: entry.email,
        totalTime: entry.totalTime,
        correctCount:entry.correctCount
      });
      alert("Score emailed to " + entry.email);
    } catch (err) {
      alert("Email failed. Check server.");
      console.error(err);
    }
  };

  return (
    <div className="leaderboard-container">
      
      <h2 style={{ textAlign: "center" }} className="h2l">
  <i className="fa-solid fa-gift"></i> Leaderboard
</h2>

      {/* <table className="tbr">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Total Time(s)</th>
            <th>Send</th>
          </tr>
        </thead>
        <tbody aling="center">
          {results.map((entry, index) => (
            <tr
              key={index}
              style={{
                backgroundColor:
                  entry.email === currentUserEmail ? "#e0ffe0" : "transparent",
              }}
            >
              <td>{index + 1}</td>
              <td>{entry.name}</td>
              <td>{Math.round(entry.totalTime)}</td>
              <td>
                <button onClick={() => sendEmail(entry)} className="btnl">
                  <i class="fa-regular fa-message"></i>
                  Send Score
                  </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table> */}

    <div className="tbr">
  {/* Header */}
    <div className="tbr-header">
      <div className="tbr-cell">#</div>
      <div className="tbr-cell">Name</div>
      <div className="tbr-cell">Total Time(s)</div>
      <div className="tbr-cell">Send</div>
    </div>

  {/* Body */}
  {results.map((entry, index) => (
            <div
              key={index}
              className="tbr-row"
              style={{
                backgroundColor:
                  entry.email === currentUserEmail ? "#e0ffe0" : "transparent",
              }}
            >
              <div className="tbr-cell">{index + 1}</div>
              <div className="tbr-cell">{entry.name}</div>
              <div className="tbr-cell">{Math.round(entry.totalTime)}</div>
              <div className="tbr-cell">
                <button onClick={() => sendEmail(entry)} className="btnl">
                  <i className="fa-regular fa-message"></i> Send Score
                </button>
              </div>
            </div>
  ))}
</div>




    </div>
  );
};

export default LeaderboardPage;
