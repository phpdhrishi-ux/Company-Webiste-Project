import React from "react";
import ServicePageShell from "../../components/ServicePageShell";

export default function InternalAuditGovernance() {
  return (
    <ServicePageShell
      pill="Business Consulting · Governance"
      title="Internal Audit & Governance Consulting"
      serviceTag="Internal Audit"
      intro="Strengthen internal controls, improve governance, and manage risks effectively without the cost of a full-time internal audit function."
      helpGrid={[
        { title: "Internal Control Assessment", desc: "Evaluating and enhancing controls for process reliability and accuracy." },
        { title: "Operational Audits", desc: "Objective review of business processes to identify gaps and inefficiencies." },
        { title: "Compliance Reviews", desc: "Assessing adherence to laws and policies to reduce regulatory risk." },
        { title: "Risk Identification", desc: "Designing structured mitigation frameworks aligned with objectives." },
        { title: "Audit Readiness", desc: "Preparing businesses for statutory audits or investor scrutiny." },
        { title: "Management Reporting", desc: "Actionable reports highlighting findings and improvement opportunities." },
      ]}
      provides={[
        "Process, Financial, and Operational audits",
        "Risk identification and mitigation frameworks",
        "Compliance and regulatory reviews",
        "Actionable management reports"
      ]}
      helps={[
        "Strengthen governance and accountability",
        "Reduce regulatory and operational risks",
        "Identify weak points before they become losses",
        "Support compliance readiness for scale"
      ]}
      contactScriptUrl="https://script.google.com/macros/s/AKfycbwIL2knWq9AhbGCMOwn8neV2skNahgR3EeYVkIdZTdgQPwuoEuVFkOK9E2Kamk5kHW_/exec"
    />
  );
}