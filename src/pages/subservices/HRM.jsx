import React from "react";
import ServicePageShell from "../../components/ServicePageShell";

export default function HRM() {
  return (
    <ServicePageShell
      pill="Business Consulting · HR"
      title="HRM & Workforce Solutions"
      serviceTag="HRM Solutions"
      intro="Zenrax offers comprehensive workforce solutions designed to help organizations build and scale teams efficiently using pre-vetted talent and industry insights."
      helpGrid={[
        {
          title: "Permanent Staffing",
          desc: "Strategic hiring focusing on technical competence and cultural alignment.",
        },
        {
          title: "Executive Search",
          desc: "Leadership search supported by structured assessments and talent mapping.",
        },
        {
          title: "Contract Staffing",
          desc: "Flexible workforce solutions for projects and peak workload requirements.",
        },
        {
          title: "Staff Augmentation",
          desc: "Scaling teams quickly with pre-vetted professionals for continuity.",
        },
        {
          title: "Cultural Assessments",
          desc: "Evaluating fit to ensure long-term retention and team harmony.",
        },
        {
          title: "Compliance Support",
          desc: "Managing HR documentation and regulatory alignment for hiring.",
        },
      ]}
      provides={[
        "Executive and leadership search",
        "End-to-end permanent hiring solutions",
        "Access to pre-screened, job-ready talent",
        "Technical and cultural fit assessments",
      ]}
      helps={[
        "Scale teams efficiently without quality loss",
        "Reduce time-to-hire for specialized roles",
        "Maintain flexibility for project-based needs",
        "Build a structured hiring process",
      ]}
      contactScriptUrl="https://script.google.com/macros/s/AKfycbwIL2knWq9AhbGCMOwn8neV2skNahgR3EeYVkIdZTdgQPwuoEuVFkOK9E2Kamk5kHW_/exec"
    />
  );
}
