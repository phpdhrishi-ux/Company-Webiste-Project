import React from "react";
import ServicePageShell from "../../components/ServicePageShell";

export default function CloudSolutions() {
  return (
    <ServicePageShell
      pill="IT Development · Cloud"
      title="Cloud Application Development"
      serviceTag="Cloud Solutions"
      intro="Build flexible, scalable, and secure systems optimized for performance and cost efficiency on modern cloud platforms."
      helpGrid={[
        { title: "Cloud-Native Dev", desc: "Designing applications optimized for resilience, scale, and performance." },
        { title: "Cloud Migration", desc: "Moving existing systems to the cloud with minimal business disruption." },
        { title: "Cost Optimization", desc: "Balancing environment performance with operational cost efficiency." },
        { title: "Cloud Security", desc: "Implementing robust security protocols to protect your data and infra." },
        { title: "Scalable Infrastructure", desc: "Building systems that grow automatically with your user demand." },
        { title: "Modernization", desc: "Updating legacy systems to leverage modern cloud-based features." },
      ]}
      provides={[
        "Cloud-native application architecture",
        "Seamless system migration to cloud",
        "Cloud security and compliance protocols",
        "Performance and cost-balancing audits"
      ]}
      helps={[
        "Improve system availability and uptime",
        "Scale infrastructure instantly as needed",
        "Reduce physical hardware overhead costs",
        "Future-proof your business technology"
      ]}
      contactScriptUrl="YOUR_URL"
    />
  );
}