
import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const indianTime = time.toLocaleTimeString("en-IN", {
    timeZone: "Asia/Kolkata",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true
  });

  const indianDate = time.toLocaleDateString("en-IN", {
    timeZone: "Asia/Kolkata",
    weekday: "long",
    day: "2-digit",
    month: "long",
    year: "numeric"
  });

  return (
    <div className="page">
      <div className="clock-card">
        <div className="flag">
          <span>🇮🇳</span>
        </div>

        <h1>Bharat Clock</h1>
        <p className="subtitle">The Time of India</p>

        <div className="clock">
          {indianTime}
        </div>

        <div className="date">
          {indianDate}
        </div>

        <div className="timezone">
          <span className="dot"></span>
          Indian Standard Time (IST)
        </div>

        <div className="tricolor">
          <span></span>
          <span></span>
          <span></span>
        </div>

        <p className="footer">
          Proud to be Indian 🇮🇳
        </p>
      </div>
    </div>
  );
}

export default App;
