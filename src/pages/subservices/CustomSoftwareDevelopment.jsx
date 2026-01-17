import React from "react";
import ServicePageShell from "../../components/ServicePageShell";

export default function CustomSoftwareDevelopment() {
  return (
    <ServicePageShell
      pill="IT Development · Software"
      title="Custom Software Development Services"
      serviceTag="Software Development"
      intro="Address specific business challenges and support long-term growth with secure, scalable, and reliable applications aligned with your strategic objectives."
      helpGrid={[
        { title: "Requirement Analysis", desc: "Detailed analysis to design system architectures that support future performance." },
        { title: "Custom Application Dev", desc: "Building tailored applications using modern technologies for security and usability." },
        { title: "Testing & Deployment", desc: "Comprehensive testing and smooth deployment to ensure application stability." },
        { title: "Legacy Modernization", desc: "Replacing outdated systems with modern, performance-driven digital solutions." },
        { title: "System Architecture", desc: "Designing robust backends that scale seamlessly as your user base grows." },
        { title: "Ongoing Support", desc: "Continuous improvement and technical maintenance after the initial launch." },
      ]}
      provides={[
        "Custom application architecture and design",
        "Full-stack software development",
        "Legacy system replacement and migration",
        "Comprehensive testing and stability support"
      ]}
      helps={[
        "Build solutions tailored to specific workflows",
        "Improve operational control through automation",
        "Ensure scalability for long-term growth",
        "Modernize your existing technology stack"
      ]}
      contactScriptUrl="https://script.google.com/macros/s/AKfycbwIL2knWq9AhbGCMOwn8neV2skNahgR3EeYVkIdZTdgQPwuoEuVFkOK9E2Kamk5kHW_/exec"
    />
  );
}