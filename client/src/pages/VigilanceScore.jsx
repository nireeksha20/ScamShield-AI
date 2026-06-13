import "../App.css";

function VigilanceScore() {
  return (
    <div className="page-shell">
      <section className="glass-card page-card">
        <p className="eyebrow">Vigilance score overview</p>
        <h1 className="hero-title">Measure your response habits</h1>
        <p className="hero-subtitle">
          Your simulator score is a training signal. It shows how well you
          resist urgency, stop to verify, and avoid risky actions under
          pressure.
        </p>
      </section>

      <section className="feature-grid score-grid">
        <article className="glass-card feature-card">
          <h3>What the score reflects</h3>
          <p>
            Higher vigilance means you paused, verified, and chose safer paths
            instead of reacting to fear or urgency.
          </p>
        </article>

        <article className="glass-card feature-card">
          <h3>What to improve</h3>
          <p>
            Watch for emotional triggers: fake deadlines, urgent payment
            demands, and pressure to act before checking official sources.
          </p>
        </article>

        <article className="glass-card feature-card">
          <h3>Best habit to keep</h3>
          <p>
            Verify through official channels first, then report suspicious
            messages and protect yourself before you engage further.
          </p>
        </article>
      </section>
    </div>
  );
}

export default VigilanceScore;
