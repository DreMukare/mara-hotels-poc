import { Outlet } from "react-router-dom";
import Navbar from "../common/Navbar";
import Footer from "../common/Footer";

const PageLayout = () => {
  return (
    <div className="h-[100vh]">
      <Navbar />
      <div className="px-8 pb-4 sm:px-12 md:px-12 lg:px-12">
        <Outlet />
      </div>
      <div className="h-[30%] px-8 pt-4 sm:px-12 md:px-12 lg:px-12">
        <Footer />
      </div>
    </div>
  );
};

export default PageLayout;
