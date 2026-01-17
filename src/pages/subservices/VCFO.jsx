import React from "react";
import ServicePageShell from "../../components/ServicePageShell";

export default function VCFO() {
  return (
    <ServicePageShell
      pill="VCIO-VCFO · Finance"
      title="Virtual CFO Services"
      serviceTag="VCFO"
      intro="Get strategic financial leadership without the cost of a full-time executive. We help founders and SMEs manage growth, improve profitability, and maintain investor readiness."
      helpGrid={[
        { title: "Strategic Financial Leadership", desc: "Guiding business strategy with high-level financial oversight and expertise." },
        { title: "Cash Flow & Runway Management", desc: "Diligent monitoring of cash burn, liquidity, and future funding requirements." },
        { title: "Investor Reporting & Relations", desc: "Building professional reporting decks and managing stakeholder transparency." },
        { title: "Profitability Optimization", desc: "Analyzing unit economics and margins to drive sustainable business growth." },
        { title: "Budgeting & Financial Planning", desc: "Creating robust annual operating plans and dynamic financial forecasts." },
        { title: "Audit & Compliance Oversight", desc: "Liaising with auditors and ensuring all financial processes meet standards." },
      ]}
      provides={[
        "Strategic financial planning and analysis",
        "Investor-ready financial reporting packages",
        "Cash flow and working capital optimization",
        "Board-level financial advisory"
      ]}
      helps={[
        "Access executive finance expertise as you scale",
        "Improve investor confidence through transparency",
        "Make data-driven decisions on expansion and spend",
        "Build a disciplined financial foundation early"
      ]}
      contactScriptUrl="https://script.google.com/macros/s/AKfycbwIL2knWq9AhbGCMOwn8neV2skNahgR3EeYVkIdZTdgQPwuoEuVFkOK9E2Kamk5kHW_/exec"
    />
  );
}