import "../App.css";

function DecisionCheck() {
  return (
    <div className="page-shell">
      <section className="glass-card page-card">
        <p className="eyebrow">Decision check</p>
        <h1 className="hero-title">Use this quick checklist</h1>
        <p className="hero-subtitle">
          Before you act on an urgent message, run the same mental checks the
          simulator teaches: pause, verify, report, and protect.
        </p>
      </section>

      <section className="feature-grid checklist-grid">
        <article className="glass-card feature-card">
          <h3>1. Pause</h3>
          <p>Do not respond immediately. Urgency is a common scam trigger.</p>
        </article>
        <article className="glass-card feature-card">
          <h3>2. Verify</h3>
          <p>Use an official contact method or known support channel.</p>
        </article>
        <article className="glass-card feature-card">
          <h3>3. Report</h3>
          <p>
            Flag suspicious messages to help prevent others from being harmed.
          </p>
        </article>
        <article className="glass-card feature-card">
          <h3>4. Protect</h3>
          <p>Never share payments, codes, or personal data under pressure.</p>
        </article>
      </section>
    </div>
  );
}

export default DecisionCheck;
