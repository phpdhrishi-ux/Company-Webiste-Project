import React from "react";
import ServicePageShell from "../../components/ServicePageShell";

export default function VCIO() {
  return (
    <ServicePageShell
      pill="VCIO-VCFO · Technology"
      title="Virtual CIO Services"
      serviceTag="VCIO"
      intro="Align your technology strategy with your business goals. We provide expert leadership to modernize your infrastructure, manage risk, and drive digital innovation."
      helpGrid={[
        { title: "IT Strategy & Roadmap", desc: "Designing a long-term technology plan that supports business growth." },
        { title: "Cybersecurity & Risk Mgmt", desc: "Establishing robust security protocols and disaster recovery frameworks." },
        { title: "Infrastructure Optimization", desc: "Evaluating and streamlining hardware, software, and cloud resources." },
        { title: "Vendor Management", desc: "Managing relationships and SLAs with third-party tech service providers." },
        { title: "Technology Budgeting", desc: "Aligning IT spend with business value and reducing technical debt." },
        { title: "Governance & Compliance", desc: "Ensuring IT operations meet regulatory standards and internal policies." },
      ]}
      provides={[
        "Technology roadmap and strategic planning",
        "Cybersecurity and data protection audits",
        "IT infrastructure and cloud governance",
        "Vendor selection and contract management"
      ]}
      helps={[
        "Bridge the gap between business goals and IT",
        "Protect your organization from digital threats",
        "Optimize technology costs and efficiency",
        "Scale your tech stack reliably as you grow"
      ]}
      contactScriptUrl="YOUR_URL"
    />
  );
}