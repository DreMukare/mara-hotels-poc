import { Facebook, Instagram, Mail, Phone, Twitter } from "lucide-react";
import { Link } from "react-router-dom";
import Divider from "./Divider";
import CopySection from "./CopySection";

const Footer = () => {
  return (
    <div className="text-sm h-[100%] w-[85%] mx-auto text-neutral-300 bg-contain bg-center bg-no-repeat flex flex-col justify-center gap-20 md:gap-15 py-4">
      <div className="hidden md:block">
        <div className="flex justify-between">
          <div>
            <p className="mb-2">ANY QUESTIONS</p>
            <span className="flex">
              <FooterSocialMediaLink icon={<Phone />} text="+254 000 000000" />
              <FooterSocialMediaLink
                icon={<Mail />}
                text="reservations@tijigu.com"
              />
            </span>
          </div>
          <div className="w-max">
            <p className="mb-2 text-right mr-3">STAY CONNECTED</p>
            <FooterSocialMediaLinkRow />
          </div>
        </div>
        <Divider
          width="w-[100%]"
          marginY="my-2"
          color="bg-neutral-500"
          thickness="h-[0.5px]"
          moreClasses="hidden md:block"
        />
      </div>
      <div className="w-[100%] flex justify-center md:hidden">
        <FooterSocialMediaLinkRow />
      </div>
      <PartnersSection />
      <div className="w-[100%]">
        <Divider
          width="w-[100%]"
          marginY="my-2"
          color="bg-neutral-500"
          thickness="h-[0.5px]"
          moreClasses="hidden md:block"
        />
        <div className="flex flex-col gap-16 text-center md:flex-row md:justify-between md:w-[100%]">
          <p>&copy; 2024 Tijigu collection</p>
          <Link to="#">
            <p className="hover:text-gold-200">Privacy Policy</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

const FooterSocialMediaLinkRow = () => {
  return (
    <div className="flex space-between justify-center items-center w-max">
      <FooterSocialMediaLink icon={<Instagram />} text="Instagram" withBorder />
      <FooterSocialMediaLink icon={<Facebook />} text="Facebook" withBorder />
      <FooterSocialMediaLink icon={<Twitter />} text="Twitter" />
    </div>
  );
};

const FooterSocialMediaLink = (props: {
  icon: React.ReactNode;
  text: string;
  withBorder?: boolean;
}) => {
  return (
    <Link to="#">
      <span
        className={`flex items-center gap-2 pr-4 mr-4 md:pr-2 md:mr-2  hover:text-gold-200 hover:opacity-100 ${
          props.withBorder
            ? "border-neutral-300 border-r-[0.5px] md:border-r-0"
            : ""
        } `}
      >
        {props.icon}
        <p>{props.text}</p>
      </span>
    </Link>
  );
};

const PartnersSection = () => {
  const partners = [
    {
      image:
        "https://www.elewanacollection.com/images/logos/partners/anantara.png",
      name: "Anantara",
    },
    {
      image:
        "https://www.elewanacollection.com/images/logos/partners/anantara.png",
      name: "Anantara",
    },
    {
      image:
        "https://www.elewanacollection.com/images/logos/partners/anantara.png",
      name: "Anantara",
    },
    {
      image:
        "https://www.elewanacollection.com/images/logos/partners/anantara.png",
      name: "Anantara",
    },
  ];

  return (
    <div className="text-sm hidden md:block mb-[-6em] w-[70%] mx-auto">
      <CopySection
        title="Our Partners"
        titleColor="text-neutral-300"
        children={
          <div className="flex gap-8 justify-between items-center">
            {partners.map((partner, idx) => {
              return (
                <Link key={idx} to="#">
                  <img
                    src={partner.image}
                    alt={partner.name}
                    className="brightness-50 hover:brightness-100 ease-in-out duration-1000 transition-all"
                  />
                </Link>
              );
            })}
          </div>
        }
      />
    </div>
  );
};

export default Footer;
