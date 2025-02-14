import { useEffect } from "react";
import "./race-control.css";
import { io } from "socket.io-client";

function RaceControl() {
  useEffect(() => {
    const socket = io("http://localhost:4000");
  }, []);

  return (
    <div>
      <button className="flag-button" id="safe">
        Safe
      </button>
      <button className="flag-button" id="hazard">
        Hazard
      </button>
      <button className="flag-button" id="danger">
        Danger
      </button>
      <button className="flag-button" id="finish">
        Finish
      </button>
    </div>
  );
}

export default RaceControl;
