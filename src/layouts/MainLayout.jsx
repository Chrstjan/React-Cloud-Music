import { Outlet } from "react-router-dom";
import { useContext, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { Header } from "../components/Header/Header";
import { Navbar } from "../components/Navbar/Navbar";
import { Searchbar } from "../components/Searchbar/Searchbar";
import { IconWrapper } from "../components/IconWrapper/IconWrapper";
import { Burgermenu } from "../components/Burgermenu/Burgermenu";
import { FaSoundcloud } from "react-icons/fa6";
import { MdAccountCircle } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";
import { AccountNav } from "../components/Header/AccountNav/AccountNav";

export const MainLayout = () => {
  const { isLightMode, changeTheme } = useContext(ThemeContext);
  const [burgermenuOpen, setBurgermenuOpen] = useState(false);
  const [accountNavOpen, setAccountNavOpen] = useState(false);

  return (
    <>
      <Header isLightMode={isLightMode}>
        <FaSoundcloud />
        <Navbar isLightMode={isLightMode} burgermenuOpen={burgermenuOpen} />
        <Searchbar isLightmode={isLightMode} />
        <IconWrapper>
          <MdAccountCircle onClick={() => setAccountNavOpen((prev) => !prev)} />
          <AccountNav
            isLightMode={isLightMode}
            accountNavOpen={accountNavOpen}
          />
          <IconWrapper>
            <Burgermenu
              isLightMode={isLightMode}
              setBurgermenuOpen={setBurgermenuOpen}
            />
            <MdOutlineDarkMode onClick={() => changeTheme()} />
          </IconWrapper>
        </IconWrapper>
      </Header>
      <Outlet />
    </>
  );
};
