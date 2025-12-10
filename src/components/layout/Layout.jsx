import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";

const Layout = ({ children }) => {
  return (
    <div className="bg-dark text-light min-vh-100 d-flex flex-column">
      <Navbar />
      <main className="flex-grow-1 pt-5 mt-3">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
