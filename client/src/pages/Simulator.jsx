import { useState } from "react";
import { scenarios } from "../data/scenarios";

function Simulator() {
  const [selectedScenarioId, setSelectedScenarioId] = useState(1);

  const scenario = scenarios.find(
    (scenario) => scenario.id === selectedScenarioId,
  );
  const [feedback, setFeedback] = useState("");
  const [score, setScore] = useState(null);
  const [nextMessage, setNextMessage] = useState("");
  const [answered, setAnswered] = useState(false);

  const handleChoice = (choiceId) => {
    if (answered) return;

    setAnswered(true);

    const selectedOption = scenario.options.find(
      (option) => option.id === choiceId,
    );

    setFeedback(selectedOption.feedback);
    setScore(selectedOption.score);
    setNextMessage(selectedOption.scammerResponse);
  };

  const resetSimulation = () => {
    setFeedback("");
    setScore(null);
    setNextMessage("");
    setAnswered(false);
  };

  return (
    <div style={{ padding: "40px" }}>
      <h1>Scam Simulator</h1>

      <div style={{ marginBottom: "20px" }}>
        <label htmlFor="scenario-select">Choose a Scenario:</label>

        <br />

        <select
          id="scenario-select"
          value={selectedScenarioId}
          onChange={(e) => {
            setSelectedScenarioId(Number(e.target.value));

            resetSimulation();
          }}
          disabled={answered}
        >
          {scenarios.map((scenario) => (
            <option key={scenario.id} value={scenario.id}>
              {scenario.title}
            </option>
          ))}
        </select>
      </div>

      <h2>Scenario: {scenario.title}</h2>
      <p>{scenario.message}</p>

      <div style={{ marginTop: "20px" }}>
        <div style={{ marginTop: "20px" }}>
          {scenario.options.map((option) => (
            <button
              key={option.id}
              style={{
                display: "block",
                marginBottom: "10px",
              }}
              disabled={answered}
              onClick={() => handleChoice(option.id)}
            >
              {option.text}
            </button>
          ))}
        </div>
      </div>

      {feedback && (
        <div style={{ marginTop: "30px" }}>
          <h3>Feedback</h3>

          <p>{feedback}</p>

          <h3>Vigilance Score</h3>

          <p>{score}/100</p>

          {nextMessage && (
            <>
              <h3>Scammer Response</h3>

              <p>{nextMessage}</p>
            </>
          )}
          <button style={{ marginTop: "20px" }} onClick={resetSimulation}>
            Try Again
          </button>
        </div>
      )}
    </div>
  );
}

export default Simulator;
