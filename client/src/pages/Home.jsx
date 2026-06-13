import { Link } from "react-router-dom";

import "../App.css";

function Home() {
  return (
    <div
      style={{
        minHeight: "100vh",

        display: "flex",

        alignItems: "center",

        justifyContent: "center",

        padding: "40px",
      }}
    >
      <div
        className="glass-card"
        style={{
          maxWidth: "900px",

          textAlign: "center",
        }}
      >
        <div className="floating-shield">🛡️</div>

        <h1 className="hero-title">ScamShield AI</h1>

        <p className="hero-subtitle">
          The Behavioral Firewall Against Social Engineering.
          <br />
          Train yourself to recognize, resist, and survive modern scams before
          becoming a victim.
        </p>

        <div
          style={{
            marginTop: "50px",

            display: "flex",

            flexWrap: "wrap",

            justifyContent: "center",

            gap: "20px",
          }}
        >
          <Link to="/simulator">
            <button className="cyber-button">🚀 Start Simulation</button>
          </Link>

          <Link to="/vigilance-score">
            <button className="cyber-button">📊 Vigilance Score</button>
          </Link>

          <Link to="/decision-check">
            <button className="cyber-button">⚡ Decision Check</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
