export const scenarios = [
  {
    id: 1,
    title: "Internship Processing Fee Scam",
    message:
      "Congratulations! Your internship stipend has been approved. Please pay ₹999 processing charges immediately to receive your payment.",

    options: [
      {
        id: "pay",
        text: "Pay immediately",
        feedback:
          "❌ Risky decision. Scammers often create urgency to pressure victims into paying immediately.",
        score: 25,
        scammerResponse:
          "Scammer: Thank you. Please share the transaction screenshot for verification.",
      },

      {
        id: "ignore",
        text: "Ignore the message",
        feedback:
          "⚠️ Ignoring can protect you, but reporting suspicious messages is also important.",
        score: 60,
        scammerResponse:
          "Scammer: Reminder! Failure to pay now may result in permanent cancellation.",
      },

      {
        id: "verify",
        text: "Verify through official channels",
        feedback:
          "✅ Excellent decision! Always verify through official channels before making payments.",
        score: 100,
        scammerResponse:
          "Scammer: Sir, there is no time. If you don't act within 10 minutes, your stipend will be cancelled.",
      },

      {
        id: "ask",
        text: "Ask for more information",
        feedback:
          "⚠️ Asking questions is helpful, but scammers may continue manipulating you. Independent verification is safest.",
        score: 75,
        scammerResponse:
          "Scammer: Our systems are currently overloaded. Please trust this process and complete payment immediately.",
      },
    ],
  },

  {
    id: 2,
    title: "Electricity Disconnection Scam",
    message:
      "URGENT: Your electricity service will be disconnected today due to an unpaid bill. Please pay immediately using the link below.",

    options: [
      {
        id: "pay",
        text: "Pay immediately",
        feedback:
          "❌ Risky decision. Scammers frequently exploit fear of service disruption.",
        score: 25,
        scammerResponse:
          "Scammer: Thank you. Please send the payment confirmation screenshot.",
      },

      {
        id: "ignore",
        text: "Ignore the message",
        feedback:
          "⚠️ Ignoring may keep you safe, but verifying the legitimacy of the message is recommended.",
        score: 60,
        scammerResponse:
          "Scammer: Final notice! Your electricity supply will be disconnected permanently.",
      },

      {
        id: "verify",
        text: "Contact the electricity provider directly",
        feedback:
          "✅ Excellent decision! Always use official channels to verify urgent requests.",
        score: 100,
        scammerResponse:
          "Scammer: Sir/Madam, our systems are busy. Please cooperate immediately to avoid disconnection.",
      },

      {
        id: "ask",
        text: "Ask for additional details",
        feedback:
          "⚠️ Gathering information helps, but scammers may continue applying pressure.",
        score: 75,
        scammerResponse:
          "Scammer: We cannot delay this process. Payment must be completed immediately.",
      },
    ],
  },
];
