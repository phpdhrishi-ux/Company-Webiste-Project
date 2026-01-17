import React from "react";
import ServicePageShell from "../../components/ServicePageShell";

export default function ERPCRMDevelopment() {
  return (
    <ServicePageShell
      pill="IT Development · ERP/CRM"
      title="ERP & CRM Development Services"
      serviceTag="ERP/CRM Development"
      intro="Centralize data, standardize processes, and gain real-time operational visibility across departments with integrated business platforms."
      helpGrid={[
        { title: "Requirement Assessment", desc: "Analyzing business processes to design solutions aligned with your needs." },
        { title: "Custom ERP Development", desc: "Configuring systems tailored to specific functional workflows." },
        { title: "System Integration", desc: "Seamlessly connecting ERP/CRM tools with your existing software ecosystem." },
        { title: "Data Migration", desc: "Securely migrating historical and operational data to your new platform." },
        { title: "Real-time Visibility", desc: "Building dashboards for real-time tracking of finance and operations." },
        { title: "Support & Optimization", desc: "Ongoing tuning to ensure the system evolves with your growth." },
      ]}
      provides={[
        "Custom ERP/CRM requirement planning",
        "Tailored system configuration and dev",
        "Secure historical data migration",
        "Continuous performance tuning and support"
      ]}
      helps={[
        "Replace fragmented data with centralized systems",
        "Improve process control across all departments",
        "Gain transparency through real-time reporting",
        "Standardize operations for consistent scaling"
      ]}
      contactScriptUrl="https://script.google.com/macros/s/AKfycbwIL2knWq9AhbGCMOwn8neV2skNahgR3EeYVkIdZTdgQPwuoEuVFkOK9E2Kamk5kHW_/exec"
    />
  );
}