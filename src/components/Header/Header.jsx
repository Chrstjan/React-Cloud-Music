import s from "./Header.module.scss";

export const Header = ({ children, isLightMode }) => {
  return (
    <header
      className={`${s.headerStyling} ${isLightMode ? s.lightModeStyling : ""}`}
    >
      {children}
    </header>
  );
};
