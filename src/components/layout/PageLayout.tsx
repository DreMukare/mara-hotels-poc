import { Outlet } from "react-router-dom";
import Navbar from "../common/Navbar";
import Footer from "../common/Footer";

const PageLayout = () => {
  return (
    <div className="h-[100vh]">
      <Navbar />
      <div className="px-4 pb-4">
        <Outlet />
      </div>
      <div className="h-[30%] px-4 pt-4">
        <Footer />
      </div>
    </div>
  );
};

export default PageLayout;
