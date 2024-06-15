import sponsor from "@/core/assets/sponsor.png";
import { Link } from "react-router-dom";
import Item from "@/features/global/components/Navbar/item";
import Section from "../container/Section";

const Footer = ({ Menus }) => {
  return (
    <Section className="bg-default py-10">
      <div className="flex flex-col md:flex-row items-center md:items-start md:justify-evenly">
        <div className="flex flex-col justify-center self-center">
          <h1 className="text-white text-5xl font-bold">E-Perpus</h1>
          <div className="bg-white h-1"></div>
          <p className="text-white text-base text-right">Pustaka Digital</p>
        </div>
        <div className=" text-center max-md:py-14">
          <p className="text-white mt-[2rem mb-[1rem] font-bold">Menu</p>
          <ul>
          {Menus.map((item, index) => (
              <Item
                key={index}
                name={item.name}
                to={item.to}
                className="text-white hover:text-blue-600"
              />
            ))}
          </ul>
        </div>
        <div className="w-1/4 max-md:w-full">
          <p className="flex justify-center text-white mb-[1rem] font-bold">
            Sponsored By
          </p>
          <img className="w-full" src={sponsor} alt="Sponsor" />
        </div>
      </div>
      <div className="bg-white h-1 mx-auto mt-[3rem]"></div>
      <div className="text-white text-center pt-10">
        <p>© 2024 E-Perpus</p>
      </div>
    </Section>
  );
};

export default Footer;
