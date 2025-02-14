import "./race-control.css";

function RaceControl() {
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
