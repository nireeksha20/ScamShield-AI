import { Link } from "react-router-dom";

function Home() {
  return (
    <div style={{ padding: "40px" }}>
      <h1>ScamShield AI</h1>

      <p>
        Train yourself to recognize and resist scams before becoming a victim.
      </p>

      <div style={{ marginTop: "20px" }}>
        <Link to="/simulator">
          <button style={{ marginRight: "10px" }}>Start Simulation</button>
        </Link>

        <Link to="/vigilance-score">
          <button style={{ marginRight: "10px" }}>View Vigilance Score</button>
        </Link>

        <Link to="/decision-check">
          <button>Decision Check</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
