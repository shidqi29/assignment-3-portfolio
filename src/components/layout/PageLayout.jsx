import PropTypes from "prop-types";
import Navbar from "./Navbar";
import Footer from "./Footer";

const PageLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="container mx-auto flex min-h-screen w-full justify-center items-center">
        {children}
      </main>
      <Footer />
    </>
  );
};

PageLayout.propTypes = {
  children: PropTypes.element,
};

export default PageLayout;
