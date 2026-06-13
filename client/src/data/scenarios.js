export const scenarios = [
  {
    id: 1,

    title: "Internship Processing Fee Scam",

    turns: [
      {
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
        message:
          "URGENT REMINDER: Your stipend release window closes in 10 minutes. Failure to act immediately may result in cancellation.",

        options: [
          {
            id: "verify",
            text: "Contact the internship coordinator",
            feedback:
              "✅ Excellent choice. Independent verification is the safest approach.",
            score: 100,
            scammerResponse:
              "Scammer: Please don't delay. This is a standard company process.",
          },

          {
            id: "pay",
            text: "Complete the payment",
            feedback:
              "❌ High-risk decision. Urgency is one of the strongest scam tactics.",
            score: 20,
            scammerResponse:
              "Scammer: Thank you. Your stipend will be processed shortly.",
          },

          {
            id: "report",
            text: "Report the message",
            feedback:
              "✅ Great decision. Reporting helps protect others from similar scams.",
            score: 100,
            scammerResponse:
              "Scammer: This misunderstanding may cost you your opportunity.",
          },

          {
            id: "ask",
            text: "Request official documentation",
            feedback:
              "⚠️ Useful step, but direct verification remains essential.",
            score: 80,
            scammerResponse:
              "Scammer: Our documents are being updated. Please proceed quickly.",
          },
        ],
      },

      {
        message:
          "FINAL NOTICE: Your internship stipend eligibility is about to expire permanently. Immediate action is required.",

        options: [
          {
            id: "verify",
            text: "Verify through official channels again",
            feedback:
              "✅ Outstanding judgment. You resisted escalating pressure tactics.",
            score: 100,
            scammerResponse: "Simulation Complete.",
          },

          {
            id: "pay",
            text: "Pay to avoid losing the opportunity",
            feedback:
              "❌ Unfortunately, repeated pressure eventually influenced your decision.",
            score: 10,
            scammerResponse: "Simulation Complete.",
          },

          {
            id: "ignore",
            text: "Block and report the sender",
            feedback:
              "✅ Excellent response. You protected yourself and others.",
            score: 100,
            scammerResponse: "Simulation Complete.",
          },

          {
            id: "ask",
            text: "Ask for one final clarification",
            feedback:
              "⚠️ Seeking clarification is understandable, but scammers exploit hesitation.",
            score: 70,
            scammerResponse: "Simulation Complete.",
          },
        ],
      },
    ],
  },

  {
    id: 2,
    title: "Electricity Disconnection Scam",
    turns: [
      {
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

      {
        message:
          "Reminder: The disconnection team is already on the way. Your account will be cut off in 10 minutes unless you settle the bill now.",

        options: [
          {
            id: "verify",
            text: "Call the official customer care number",
            feedback:
              "✅ Strong choice. Independent verification protects you from fake disconnection threats.",
            score: 100,
            scammerResponse:
              "Scammer: This is a standard emergency process. Please confirm your payment details.",
          },

          {
            id: "pay",
            text: "Use the payment link now",
            feedback:
              "❌ Paying under pressure increases the chance of losing money to a fake provider.",
            score: 20,
            scammerResponse:
              "Scammer: Thank you. Your reconnection request is being processed.",
          },

          {
            id: "report",
            text: "Report the message to the provider",
            feedback:
              "✅ Great decision. Reporting helps stop scam messages from reaching others.",
            score: 100,
            scammerResponse:
              "Scammer: Your account will be flagged if you do not act immediately.",
          },

          {
            id: "ask",
            text: "Ask for a reference number",
            feedback:
              "⚠️ Asking for proof is useful, but you should still confirm through official channels.",
            score: 80,
            scammerResponse:
              "Scammer: The reference number is generated automatically after payment.",
          },
        ],
      },

      {
        message:
          "FINAL NOTICE: Your electricity supply will be disconnected permanently if you do not pay within the next 5 minutes.",

        options: [
          {
            id: "verify",
            text: "Verify through the utility company website",
            feedback:
              "✅ Excellent judgment. You stayed calm and checked the real source instead of reacting to fear.",
            score: 100,
            scammerResponse: "Simulation Complete.",
          },

          {
            id: "pay",
            text: "Pay to restore service immediately",
            feedback:
              "❌ Repeated pressure eventually led to a risky decision.",
            score: 10,
            scammerResponse: "Simulation Complete.",
          },

          {
            id: "ignore",
            text: "Block and report the sender",
            feedback:
              "✅ Excellent response. You protected yourself and helped prevent further scams.",
            score: 100,
            scammerResponse: "Simulation Complete.",
          },

          {
            id: "ask",
            text: "Ask for one final confirmation",
            feedback:
              "⚠️ Asking for confirmation is sensible, but scammers exploit hesitation and urgency.",
            score: 70,
            scammerResponse: "Simulation Complete.",
          },
        ],
      },
    ],
  },
];
