import { useContext, useEffect, useState } from "react";
import "./race-flags.css";
import { SocketContext } from "../../context/SocketContext";

function RaceFlags() {
  const socket = useContext(SocketContext);
  const [flag, setFlag] = useState("safe");

  useEffect(() => {
    if (!socket) return;

    const handleFlagChange = (flagType) => {
      setFlag(flagType);
    };

    socket.on("getFlag", handleFlagChange);

    return () => {
      socket.off("getFlag", handleFlagChange);
    };
  }, [socket]);

  return <div id={flag}></div>;
}

export default RaceFlags;
