const Contact = () => {
    return (
      <section className="py-5">
        <div className="container">
          <h1 className="h2 fw-bold mb-3">Contact</h1>
          <p className="text-secondary mb-4">
            Share your IT challenges and we will get back to you with a free
            Virtual CIO consultation slot.
          </p>
          <form className="col-12 col-md-6">
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input className="form-control bg-dark text-light border-secondary" />
            </div>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input type="email" className="form-control bg-dark text-light border-secondary" />
            </div>
            <div className="mb-3">
              <label className="form-label">Message</label>
              <textarea
                rows={4}
                className="form-control bg-dark text-light border-secondary"
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </section>
    );
  };
  
  export default Contact;
  