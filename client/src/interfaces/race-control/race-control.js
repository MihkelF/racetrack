import { useContext, useEffect, useState } from "react";
import "./race-control.css";
import { SocketContext } from "../../context/SocketContext";

function RaceControl() {
  const socket = useContext(SocketContext);
  const [flagType, setFlagType] = useState("safe");

  useEffect(() => {
    if (socket) {
      socket.emit("changeFlag", flagType);
    }
  }, [socket, flagType]);

  console.log(flagType);

  return (
    <div>
      <button
        className="flag-button"
        id="safe"
        onClick={() => setFlagType("safe")}
      >
        Safe
      </button>
      <button
        className="flag-button"
        id="hazard"
        onClick={() => setFlagType("hazard")}
      >
        Hazard
      </button>
      <button
        className="flag-button"
        id="danger"
        onClick={() => setFlagType("danger")}
      >
        Danger
      </button>
      <button
        className="flag-button"
        id="finish"
        onClick={() => setFlagType("finish")}
      >
        Finish
      </button>
    </div>
  );
}

export default RaceControl;
