import React from "react";
import ServicePageShell from "../../components/ServicePageShell";

export default function BusinessOperations() {
  return (
    <ServicePageShell
      pill="Business Consulting · Operations"
      title="Business Operations Consulting"
      serviceTag="Operations Consulting"
      intro="Move from unstructured execution to disciplined, scalable operations. We help build systems that support coordination and long-term growth."
      helpGrid={[
        {
          title: "Process Assessment",
          desc: "Reviewing workflows to identify gaps and improvement opportunities.",
        },
        {
          title: "Workflow Optimization",
          desc: "Designing efficient workflows to improve execution speed.",
        },
        {
          title: "Process Standardization",
          desc: "Ensuring quality and predictable outcomes across all teams.",
        },
        {
          title: "Role Definitions",
          desc: "Eliminating confusion by defining ownership and coordination handoffs.",
        },
        {
          title: "Operational KPIs",
          desc: "Establishing measurable metrics to track productivity and health.",
        },
        {
          title: "Cost Efficiency",
          desc: "Improving resource allocation and controlling operational costs.",
        },
      ]}
      provides={[
        "Workflow design and optimization",
        "Operational KPI and performance frameworks",
        "Cost efficiency and resource planning",
        "Operational risk identification",
      ]}
      helps={[
        "Simplify execution and coordination",
        "Scale smoothly without execution challenges",
        "Improve resource utilization and margins",
        "Build consistent operational discipline",
      ]}
      contactScriptUrl="https://script.google.com/macros/s/AKfycbwIL2knWq9AhbGCMOwn8neV2skNahgR3EeYVkIdZTdgQPwuoEuVFkOK9E2Kamk5kHW_/exec"
    />
  );
}
