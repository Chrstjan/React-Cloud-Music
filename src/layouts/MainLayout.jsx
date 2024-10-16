import { Outlet } from "react-router-dom";
import { Header } from "../components/Header/Header";
import { Navbar } from "../components/Navbar/Navbar";
import { MdAccountCircle } from "react-icons/md";
import { Burgermenu } from "../components/Burgermenu/Burgermenu";

export const MainLayout = () => {
  return (
    <>
      <Header>
        <Navbar />
        <MdAccountCircle />
        <Burgermenu />
      </Header>
      <Outlet />
    </>
  );
};
