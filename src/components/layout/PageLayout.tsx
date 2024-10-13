import { Outlet } from "react-router-dom";
import Navbar from "../common/Navbar";
import Footer from "../common/Footer";

const PageLayout = () => {
  return (
    <div className="h-screen relative">
      <Navbar />
      <div className="h-max px-4">
        <Outlet />
      </div>
      <div className="absolute bottom-0 left-0 h-[20%] px-4">
        <Footer />
      </div>
    </div>
  );
};

export default PageLayout;
