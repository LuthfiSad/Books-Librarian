import { useEffect, useState } from "react";
import Item from "./item";
import { APP_CONFIG } from "@/core/configs/app";
import Section from "../../container/Section";
import { useLocation, useParams } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import useResponsive from "../../hooks/useResponsive";

const Navbar = ({ Menus }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const [isScroll, setIsScroll] = useState(false);
  const [isActive, setIsActive] = useState("Home");
  const { id } = useParams();
  const { isTablet } = useResponsive();

  const listenScrollEvent = () => {
    if (window.scrollY > 0) {
      return setIsScroll(true);
    } else {
      return setIsScroll(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);

    return () => window.removeEventListener("scroll", listenScrollEvent);
  }, []);

  useEffect(() => {
    if(!isTablet){
      setIsOpen(false)
    }
  }, [isTablet]);

  useEffect(() => {
    Menus.forEach((item) => {
      if (location.pathname === `/books/${id}`) {
        setIsActive("Buku");
      } else if (item.to === location.pathname + location.hash) {
        setIsActive(item.name);
      }
    });
    setIsOpen(false);
  }, [location]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-[999]">
      <Section
        className={`flex items-center z-[9999] duration-300 ${
          isScroll || isOpen ? "bg-default py-5 text-white" : "bg-transparent py-7"
        }`}
      >
        <div className={`w-full flex items-center justify-between relative`}>
          <h1 className="text-4xl duration-300 italic font-rubik">
            {APP_CONFIG.APP_NAME}
          </h1>
          {isTablet && (
            <div>
              {isOpen ? (
                <IoMdClose
                  className="text-3xl cursor-pointer"
                  onClick={() => setIsOpen(!isOpen)}
                />
              ) : (
                <RxHamburgerMenu
                  className="text-3xl cursor-pointer"
                  onClick={() => setIsOpen(!isOpen)}
                />
              )}
            </div>
          )}
          <ul
            className={`flex items-center gap-6 duration-300 ${
              isTablet && (isOpen ? "block top-[100%]" : "top-[-500px] opacity-0") + " absolute -mx-5 py-10 bg-default flex-col left-0 right-0"
            }`}
          >
            {Menus.map((item, index) => (
              <Item
                key={index}
                name={item.name}
                to={item.to}
                className={`hover:scale-[1.2] py-[1px] px-3 flex justify-center relative duration-600 before:content-[''] before:z-10 before:absolute before:w-0 before:h-full before:duration-300 hover:before:w-[80%] before:border-b ${
                  isScroll || isOpen ? "before:border-white" : "before:border-black"
                } ${
                  isActive === item.name ? "before:w-[80%] scale-[1.1]" : ""
                }`}
              />
            ))}
          </ul>
        </div>
      </Section>
    </nav>
  );
};

export default Navbar;
