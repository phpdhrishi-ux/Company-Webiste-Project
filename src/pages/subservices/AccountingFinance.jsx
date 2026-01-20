import React from "react";
import ServicePageShell from "../../components/ServicePageShell";

export default function AccountingFinance() {
  return (
    <ServicePageShell
      pill="Business Consulting · Finance"
      title="Accounting & Finance Consulting Services"
      serviceTag="Finance & Accounting"
      intro="Strong financial discipline is the foundation of sustainable business growth. At Zenrax, we help organizations gain financial clarity, improve control, and make confident, data-driven decisions."
      helpGrid={[
        {
          title: "Financial Planning & Budgeting",
          desc: "Structured budgets and reliable financial forecasts aligned with growth plans.",
        },
        {
          title: "Cash Flow Management",
          desc: "Monitoring movements, improving liquidity, and planning for funding needs.",
        },
        {
          title: "Financial Analysis",
          desc: "Transforming data into insights through structured management reports.",
        },
        {
          title: "Cost & Profitability Analysis",
          desc: "Identifying cost inefficiencies and analyzing margins by business unit.",
        },
        {
          title: "Accounting System Setup",
          desc: "Selecting and optimizing accounting systems for accurate, scalable reporting.",
        },
        {
          title: "Bookkeeping Services",
          desc: "Maintaining clean, up-to-date records and reliable accounting data.",
        },
      ]}
      provides={[
        "Structured budgeting and proactively planning",
        "Financial analysis and management reporting",
        "Accounting system setup and optimization",
        "Clean, up-to-date bookkeeping and records",
      ]}
      helps={[
        "Gain a clear view of cash flow and runway",
        "Make decisions based on data, not guesswork",
        "Ensure audit and funding readiness",
        "Improve margins through cost control",
      ]}
      contactScriptUrl="https://script.google.com/macros/s/AKfycbwIL2knWq9AhbGCMOwn8neV2skNahgR3EeYVkIdZTdgQPwuoEuVFkOK9E2Kamk5kHW_/exec"
    />
  );
}
