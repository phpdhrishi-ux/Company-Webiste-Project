import { Button } from "antd";

const Hero = () => {
  return (
    <section className="py-5">
      <div className="container py-5">
        <p className="text-info text-uppercase small mb-2">
          Virtual CIO & IT Partner
        </p>
        <h1 className="display-5 fw-bold mb-3">
          Your Virtual CIO for Growing Businesses
        </h1>
        <p className="text-secondary mb-4 col-12 col-md-7">
          PHPD IT Services plans, builds, and manages your IT so you can
          focus on running the business.
        </p>
        <div className="d-flex flex-wrap gap-3">
          <Button type="primary" size="large" shape="round">
            Book a CIO Call
          </Button>
          <Button size="large" shape="round">
            View Services
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
