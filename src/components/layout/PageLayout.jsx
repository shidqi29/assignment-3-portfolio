import PropTypes from "prop-types";
import Navbar from "./Navbar";
import Footer from "./Footer";

const PageLayout = ({children}) => {
    return (
        <>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        </>
    );
}

PageLayout.propTypes = {
    children: PropTypes.node
}
 
export default PageLayout;