import { Link } from "react-router-dom";
import s from "./AccountNav.module.scss";

export const AccountNav = ({ isLightMode, accountNavOpen }) => {
  return (
    <div
      className={`${accountNavOpen ? s.linkStyling : s.hiddenStyling} ${
        isLightMode ? s.lightmodeStyling : ""
      }`}
    >
      <Link to="/login">Login</Link>
      <Link to="/signup">Sign Up</Link>
    </div>
  );
};
