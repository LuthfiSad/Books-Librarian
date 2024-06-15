import { Outlet, ScrollRestoration } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const RootView = ({ Menus }) => {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Navbar Menus={Menus} />
      <Outlet />
      <ScrollRestoration />
      <Footer Menus={Menus} />
    </div>
  );
};

export default RootView;
