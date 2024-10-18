import { Outlet } from "react-router-dom";
import Navbar from "../common/Navbar";
import Footer from "../common/Footer";
// import footerBgImg from "@/assets/images/footer/pexels-harrycunningham-3347324.jpg";
// import { Parallax, ParallaxLayer } from "@react-spring/parallax";

const PageLayout = () => {
  return (
    <div className="h-[100%]">
      <Navbar />
      <div className="px-8 pb-4 sm:px-12 md:px-12">
        <Outlet />
      </div>
      <div className="h-[30%] px-8 pt-4 sm:px-12 md:px-12 m-auto bg-neutral-950 bg-opacity-85">
        <Footer />
      </div>
      {/* <Parallax pages={1.5}>
        <ParallaxLayer
          offset={0}
          factor={1.5}
          speed={0.8}
          className="px-8 pb-4 sm:px-12 md:px-12"
        >
          <Outlet />
        </ParallaxLayer>
        <ParallaxLayer
          offset={1.2}
          speed={-0.5}
          factor={1}
          style={{
            background: `url(${footerBgImg}) rgba(0, 0, 0, 0.75)`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundBlendMode: "multiply",
            zIndex: -10,
          }}
        >
          <div className="h-[30%] px-8 sm:px-12 md:px-12">
            <Footer />
          </div>
        </ParallaxLayer>
      </Parallax> */}
    </div>
  );
};

export default PageLayout;
