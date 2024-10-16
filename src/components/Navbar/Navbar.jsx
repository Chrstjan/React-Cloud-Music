import { NavLink } from "react-router-dom";
import { Paths } from "../../router/Paths";
import s from "./Navbar.module.scss";

export const Navbar = ({ isLightMode, burgermenuOpen }) => {
  const navMenu = [
    {
      path: Paths.home,
      text: "Home",
    },
  ];

  return (
    <nav>
      <ul
        className={`${burgermenuOpen ? s.navStyling : s.hiddenStyling} ${
          isLightMode ? s.lightModeStyling : ""
        }`}
      >
        {navMenu.map((item) => {
          return (
            <li key={item.text}>
              <NavLink
                className={({ isActive }) => (isActive ? s.activeLink : "")}
                to={item.path}
              >
                {item.text}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
