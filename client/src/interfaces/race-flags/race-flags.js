import { useState } from "react";

function RaceFlags() {
  const [flag, setFlag] = useState("green");

  return <div id="flag" style={{ backgroundColor: "green" }}></div>;
}
