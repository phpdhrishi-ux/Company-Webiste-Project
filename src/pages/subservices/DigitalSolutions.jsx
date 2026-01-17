import React from "react";
import ServicePageShell from "../../components/ServicePageShell";

export default function DigitalSolutions() {
  return (
    <ServicePageShell
      pill="IT Development · Digital"
      title="Digital Solutions & Transformation"
      serviceTag="Digital Solutions"
      intro="Modernize systems and accelerate transformation with performance-driven solutions that bridge the gap between technical expertise and business goals."
      helpGrid={[
        { title: "System Modernization", desc: "Updating internal infrastructures to support modern digital requirements." },
        { title: "Mobile App Development", desc: "Developing native and cross-platform apps for seamless user experiences." },
        { title: "UI/UX Design", desc: "Creating user-centric designs that improve engagement and ease of use." },
        { title: "Digital Strategy", desc: "Aligning your technology roadmap with overall business growth targets." },
        { title: "Process Digitization", desc: "Moving manual operations into structured, automated digital systems." },
        { title: "Backend Integration", desc: "Securely connecting your digital platforms with existing business data." },
      ]}
      provides={[
        "End-to-end digital system modernization",
        "Native and cross-platform mobile apps",
        "User-centric UI/UX design and prototyping",
        "Secure backend and API integrations"
      ]}
      helps={[
        "Accelerate your digital transformation journey",
        "Streamline operations through digital tools",
        "Enhance decision-making with integrated data",
        "Improve customer engagement via mobile platforms"
      ]}
      contactScriptUrl="https://script.google.com/macros/s/AKfycbwIL2knWq9AhbGCMOwn8neV2skNahgR3EeYVkIdZTdgQPwuoEuVFkOK9E2Kamk5kHW_/exec"
    />
  );
}