import React from "react";
import ServicePageShell from "../../components/ServicePageShell";

export default function WebAppDevelopment() {
  return (
    <ServicePageShell
      pill="IT Development · Web"
      title="Web Application Development"
      serviceTag="Web Development"
      intro="Build high-performance, secure web applications designed for reliability and a seamless user experience across all browsers."
      helpGrid={[
        { title: "Custom Web Applications", desc: "Developing powerful web-based tools for internal or external use." },
        { title: "Responsive Design", desc: "Ensuring your application works perfectly on desktop, tablet, and mobile." },
        { title: "API Development", desc: "Building secure and fast APIs to connect your web app to other services." },
        { title: "E-commerce Solutions", desc: "Creating secure, scalable online stores with integrated payments." },
        { title: "Performance Tuning", desc: "Optimizing code and assets for lightning-fast load times." },
        { title: "Maintenance & Hosting", desc: "Ongoing web support to keep your application secure and online." },
      ]}
      provides={[
        "Custom responsive web development",
        "Secure API design and integration",
        "E-commerce and portal development",
        "Performance and security optimization"
      ]}
      helps={[
        "Expand your reach through accessible web apps",
        "Enhance user satisfaction with fast interfaces",
        "Streamline business-to-customer interactions",
        "Ensure cross-platform compatibility"
      ]}
      contactScriptUrl="https://script.google.com/macros/s/AKfycbwIL2knWq9AhbGCMOwn8neV2skNahgR3EeYVkIdZTdgQPwuoEuVFkOK9E2Kamk5kHW_/exec"
    />
  );
}