import React from "react";
import ServicePageShell from "../../components/ServicePageShell";

export default function SOPDraftingDocumentation() {
  return (
    <ServicePageShell
      pill="Business Consulting · SOP"
      title="SOP Drafting & Documentation Consulting"
      serviceTag="SOP Drafting"
      intro="Standardize processes, reduce dependency on individuals, and create a strong foundation for scalable business operations."
      helpGrid={[
        { title: "End-to-End SOP Drafting", desc: "Creating structured SOPs for core functions to ensure accountability." },
        { title: "Process Mapping", desc: "Mapping workflows to improve visibility and execution efficiency." },
        { title: "Departmental SOPs", desc: "Customized manuals for Finance, HR, IT, Admin, and Sales." },
        { title: "Policy Manuals", desc: "Standardized procedures that support consistent decision-making." },
        { title: "Control Checklists", desc: "Defining approval workflows to reduce errors and strengthen controls." },
        { title: "Implementation Support", desc: "Refining existing documentation and supporting team adoption." },
      ]}
      provides={[
        "Full process mapping and documentation",
        "Department-wise customized SOPs",
        "Control checklists and approval workflows",
        "Audit-aligned SOP frameworks"
      ]}
      helps={[
        "Reduce dependency on specific individuals",
        "Ensure consistent performance across teams",
        "Prepare for scaling with structured operations",
        "Improve audit readiness and compliance"
      ]}
      contactScriptUrl="YOUR_URL"
    />
  );
}