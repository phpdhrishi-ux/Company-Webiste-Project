const Footer = () => {
    return (
      <footer className="border-top border-secondary mt-4">
        <div className="container py-3 d-flex flex-column flex-md-row justify-content-between align-items-center gap-2 text-muted small">
          <span>© {new Date().getFullYear()} PHPD IT Services. All rights reserved.</span>
          <span>Pune, India.</span>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  