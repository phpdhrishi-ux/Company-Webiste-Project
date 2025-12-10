const services = [
    {
      title: "Virtual CIO & IT Strategy",
      desc: "CIO-level guidance without the full-time cost.",
    },
    {
      title: "IT Roadmap & Budget Planning",
      desc: "Plan your tech investments 12–24 months ahead.",
    },
    {
      title: "Cloud & Infrastructure Management",
      desc: "Design and manage reliable, scalable infrastructure.",
    },
    {
      title: "Cybersecurity & Compliance",
      desc: "Reduce risk with policies, tools, and monitoring.",
    },
    {
      title: "IT Operations & Vendor Management",
      desc: "Coordinate vendors, SLAs, and day-to-day IT operations.",
    },
  ];
  
  const ServicesSection = () => {
    return (
      <section className="py-5 bg-black">
        <div className="container">
          <h2 className="h3 fw-bold mb-4">IT Services</h2>
          <div className="row g-4">
            {services.map((s) => (
              <div className="col-12 col-md-6 col-lg-4" key={s.title}>
                <div className="h-100 border border-secondary rounded-3 p-3">
                  <h3 className="h5 mb-2">{s.title}</h3>
                  <p className="text-secondary small mb-0">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default ServicesSection;
  