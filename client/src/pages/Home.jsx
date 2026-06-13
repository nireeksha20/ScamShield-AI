import { Link } from "react-router-dom";

import "../App.css";

function Home() {
  return (
    <div className="home-shell">
      <section className="glass-card home-hero-card">
        <div className="home-copy">
          <p className="eyebrow">Microsoft Creative Apps • Security Copilot</p>
          <h1 className="hero-title">ScamShield AI</h1>
          <p className="hero-subtitle">
            A behavioral firewall for social engineering defense. Train with
            immersive scam simulations, track your vigilance habits, and learn
            to verify before you react.
          </p>

          <div className="badge-row home-badges">
            <span className="threat-pill safe">Pressure-aware training</span>
            <span className="threat-pill accent">Neon threat analysis</span>
            <span className="threat-pill">Multi-turn scenarios</span>
          </div>

          <div className="button-row home-actions">
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

        <aside className="home-spotlight glass-card inner-card">
          <div className="floating-shield">🛡️</div>
          <p className="micro-copy">Threat profile</p>
          <h2>Defense in depth</h2>
          <p>
            The simulator teaches the exact habits defenders need: pause,
            verify, report, and resist emotional manipulation.
          </p>
          <ul className="mini-list">
            <li>Urgency and fear cues</li>
            <li>Authority-based scams</li>
            <li>Payment and data safety checks</li>
          </ul>
        </aside>
      </section>

      <section className="feature-grid">
        <article className="glass-card feature-card">
          <p className="eyebrow">Why it matters</p>
          <h3>Learn from realistic pressure</h3>
          <p>
            Each scenario escalates the pressure over time so users practice
            calm, evidence-based reactions instead of reactive responses.
          </p>
        </article>

        <article className="glass-card feature-card">
          <p className="eyebrow">Training focus</p>
          <h3>Spot red flags early</h3>
          <p>
            The interface highlights the exact behavioral cues that make scams
            dangerous: urgency, reward, authority, and fear.
          </p>
        </article>

        <article className="glass-card feature-card">
          <p className="eyebrow">Hackathon goal</p>
          <h3>Security Copilot aesthetic</h3>
          <p>
            The design combines a modern Microsoft security vibe with a
            cyberpunk neon look so the experience feels current and memorable.
          </p>
        </article>
      </section>
    </div>
  );
}

export default Home;
