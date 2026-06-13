import { useMemo, useState } from "react";

import "../App.css";
import { scenarios } from "../data/scenarios";

function Simulator() {
  const [selectedScenarioId, setSelectedScenarioId] = useState(1);
  const [feedback, setFeedback] = useState("");
  const [score, setScore] = useState(null);
  const [nextMessage, setNextMessage] = useState("");
  const [answered, setAnswered] = useState(false);
  const [currentTurn, setCurrentTurn] = useState(1);
  const [cumulativeScore, setCumulativeScore] = useState(0);
  const [sessionLog, setSessionLog] = useState([]);

  const scenario = scenarios.find(
    (scenario) => scenario.id === selectedScenarioId,
  );

  const activeTurn = scenario.turns[currentTurn - 1];
  const progressPercent = Math.round(
    (currentTurn / scenario.turns.length) * 100,
  );
  const totalPossibleScore = scenario.turns.length * 100;

  const threatLabel = useMemo(() => {
    const ratio = cumulativeScore / totalPossibleScore;

    if (ratio >= 0.75) return { text: "High Vigilance", tone: "safe" };
    if (ratio >= 0.45) return { text: "Moderate Vigilance", tone: "watch" };

    return { text: "Elevated Risk", tone: "risk" };
  }, [cumulativeScore, totalPossibleScore]);

  const behaviorReport = useMemo(() => {
    const ratio = cumulativeScore / totalPossibleScore;

    if (ratio >= 0.75) {
      return {
        strengths: [
          "You resisted urgency pressure.",
          "You prioritized verification over payment.",
          "You recognized the scam pattern quickly.",
        ],
        weaknesses: [
          "Keep scanning for subtle authority claims in future messages.",
          "Practice responding even when the message feels urgent.",
        ],
      };
    }

    if (ratio >= 0.45) {
      return {
        strengths: [
          "You sometimes paused to evaluate the request.",
          "You are learning to separate pressure from proof.",
        ],
        weaknesses: [
          "Avoid acting on fear-based urgency.",
          "Always confirm through official channels before sharing payments or data.",
        ],
      };
    }

    return {
      strengths: ["You were alert enough to engage with the scenario."],
      weaknesses: [
        "Reacting to urgency is your main vulnerability.",
        "Use a verification-first habit on every suspicious message.",
      ],
    };
  }, [cumulativeScore, totalPossibleScore]);

  const handleChoice = (choiceId) => {
    if (answered) return;

    setAnswered(true);

    const selectedOption = activeTurn.options.find(
      (option) => option.id === choiceId,
    );

    setFeedback(selectedOption.feedback);
    setScore(selectedOption.score);
    setCumulativeScore((prev) => prev + selectedOption.score);
    setSessionLog((prev) => [
      ...prev,
      {
        turn: currentTurn,
        choice: selectedOption.text,
        score: selectedOption.score,
      },
    ]);
    setNextMessage(selectedOption.scammerResponse);
  };

  const resetSimulation = () => {
    setFeedback("");
    setScore(null);
    setNextMessage("");
    setAnswered(false);
    setCurrentTurn(1);
    setCumulativeScore(0);
    setSessionLog([]);
  };

  const continueSimulation = () => {
    if (currentTurn < scenario.turns.length) {
      setCurrentTurn(currentTurn + 1);
      setFeedback("");
      setScore(null);
      setNextMessage("");
      setAnswered(false);
    }
  };

  return (
    <div className="simulator-shell">
      <section className="glass-card hero-panel">
        <div>
          <p className="eyebrow">
            Microsoft Security Copilot • Behavioral Training
          </p>
          <h1 className="hero-title">ScamShield AI Simulator</h1>
          <p className="hero-subtitle">
            Train under pressure, spot urgency, authority, fear, and reward
            cues, and build a stronger vigilance habit.
          </p>
        </div>

        <div className="badge-row">
          <span className={`threat-pill ${threatLabel.tone}`}>
            Threat Level: {threatLabel.text}
          </span>
          <span className="threat-pill accent">
            Cumulative Vigilance: {cumulativeScore}
          </span>
          <span className="threat-pill">
            Turn {currentTurn} / {scenario.turns.length}
          </span>
        </div>
      </section>

      <section className="simulator-grid">
        <article className="glass-card simulator-panel">
          <div className="panel-header">
            <div>
              <p className="eyebrow">Scenario Control</p>
              <h2>{scenario.title}</h2>
            </div>
            <span className="score-chip">{progressPercent}% complete</span>
          </div>

          <div className="progress-shell" aria-label="Turn progress">
            <div
              className="progress-fill"
              style={{ width: `${progressPercent}%` }}
            />
          </div>

          <label className="field-label" htmlFor="scenario-select">
            Choose a simulation path
          </label>

          <select
            id="scenario-select"
            className="scenario-select"
            value={selectedScenarioId}
            onChange={(e) => {
              setSelectedScenarioId(Number(e.target.value));
              setFeedback("");
              setScore(null);
              setNextMessage("");
              setAnswered(false);
              setCurrentTurn(1);
              setCumulativeScore(0);
              setSessionLog([]);
            }}
            disabled={answered}
          >
            {scenarios
              .filter((scenario) => scenario.turns)
              .map((scenario) => (
                <option key={scenario.id} value={scenario.id}>
                  {scenario.title}
                </option>
              ))}
          </select>

          <div className="stat-grid">
            <div className="mini-stat-card">
              <span>Current turn</span>
              <strong>{currentTurn}</strong>
            </div>
            <div className="mini-stat-card">
              <span>Best possible</span>
              <strong>{totalPossibleScore}</strong>
            </div>
            <div className="mini-stat-card">
              <span>Session log</span>
              <strong>{sessionLog.length}</strong>
            </div>
          </div>
        </article>

        <article className="glass-card chat-card">
          <div className="phone-topbar">
            <div className="phone-dots">
              <span />
              <span />
              <span />
            </div>
            <strong>ScamShield AI</strong>
          </div>

          <div className="chat-body">
            <div className="chat-bubble scam-bubble">{activeTurn.message}</div>

            <div className="chat-label">Select your response</div>

            <div className="choice-grid">
              {activeTurn.options.map((option) => (
                <button
                  key={option.id}
                  type="button"
                  className={`choice-card ${answered ? "choice-card-disabled" : ""}`}
                  disabled={answered}
                  onClick={() => handleChoice(option.id)}
                >
                  <span className="choice-title">{option.text}</span>
                  <span className="choice-hint">Tap to respond</span>
                </button>
              ))}
            </div>
          </div>
        </article>
      </section>

      {feedback && (
        <section className="glass-card feedback-panel">
          <div className="panel-header">
            <div>
              <p className="eyebrow">Live Assessment</p>
              <h3>Feedback</h3>
            </div>
            <span className="score-chip">Score: {score}/100</span>
          </div>

          <p className="feedback-copy">{feedback}</p>

          {nextMessage && (
            <div className="scammer-response-box">
              <h4>Scammer Response</h4>
              <p>{nextMessage}</p>
            </div>
          )}

          <div className="button-row">
            {currentTurn < scenario.turns.length ? (
              <button className="cyber-button" onClick={continueSimulation}>
                Continue to Turn {currentTurn + 1}
              </button>
            ) : (
              <button className="cyber-button" onClick={resetSimulation}>
                Start New Simulation
              </button>
            )}
          </div>
        </section>
      )}

      {currentTurn === scenario.turns.length && answered && (
        <section className="glass-card report-card">
          <div className="panel-header">
            <div>
              <p className="eyebrow">End-of-Simulation Behavioral Report</p>
              <h3>What your choices reveal</h3>
            </div>
            <span className="score-chip">
              {Math.round((cumulativeScore / totalPossibleScore) * 100)}%
              vigilance
            </span>
          </div>

          <div className="report-grid">
            <article>
              <h4>Your strengths</h4>
              <ul>
                {behaviorReport.strengths.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
            <article>
              <h4>Watch-outs</h4>
              <ul>
                {behaviorReport.weaknesses.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </div>
        </section>
      )}
    </div>
  );
}

export default Simulator;
