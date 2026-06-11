import { useState } from "react";

function Simulator() {
  const [feedback, setFeedback] = useState("");
  const [score, setScore] = useState(null);
  const [nextMessage, setNextMessage] = useState("");
  const [answered, setAnswered] = useState(false);

  const handleChoice = (choice) => {
    if (answered) return;
    setAnswered(true);
    if (choice === "verify") {
      setFeedback(
        "✅ Excellent decision! Always verify through official channels before making payments.",
      );
      setScore(100);
      setNextMessage(
        "Scammer: Sir, there is no time. If you don't act within 10 minutes, your stipend will be cancelled.",
      );
    } else if (choice === "pay") {
      setFeedback(
        "❌ Risky decision. Scammers often create urgency to pressure victims into paying immediately.",
      );
      setScore(25);
      setNextMessage(
        "Scammer: Thank you. Please share the transaction screenshot for verification.",
      );
    } else if (choice === "ignore") {
      setFeedback(
        "⚠️ Ignoring can protect you, but reporting suspicious messages is also important.",
      );
      setScore(60);
      setNextMessage(
        "Scammer: Reminder! Failure to pay now may result in permanent cancellation.",
      );
    } else if (choice === "ask") {
      setFeedback(
        "⚠️ Asking questions is helpful, but scammers may continue manipulating you. Independent verification is safest.",
      );
      setScore(75);
      setNextMessage(
        "Scammer: Our systems are currently overloaded. Please trust this process and complete payment immediately.",
      );
    }
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

      <h2>Scenario: Internship Processing Fee Scam</h2>

      <p>
        Congratulations! Your internship stipend has been approved. Please pay
        ₹999 processing charges immediately to receive your payment.
      </p>

      <div style={{ marginTop: "20px" }}>
        <button
          style={{ display: "block", marginBottom: "10px" }}
          disabled={answered}
          onClick={() => handleChoice("pay")}
        >
          Pay immediately
        </button>

        <button
          style={{ display: "block", marginBottom: "10px" }}
          disabled={answered}
          onClick={() => handleChoice("ignore")}
        >
          Ignore the message
        </button>

        <button
          style={{ display: "block", marginBottom: "10px" }}
          disabled={answered}
          onClick={() => handleChoice("verify")}
        >
          Verify through official channels
        </button>

        <button
          style={{ display: "block" }}
          disabled={answered}
          onClick={() => handleChoice("ask")}
        >
          Ask for more information
        </button>
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
