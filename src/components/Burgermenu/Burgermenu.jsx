import s from "./Burgermenu.module.scss";

export const Burgermenu = ({ isLightMode, setBurgermenuOpen }) => {
  const handleBurgermenu = () => {
    setBurgermenuOpen((prev) => !prev);
  };
  return (
    <div
      onClick={() => handleBurgermenu()}
      className={`${s.burgermenu} ${isLightMode ? s.lightModeStyling : ""}`}
    >
      <span className={s.barStyling}></span>
      <span className={s.barStyling}></span>
      <span className={s.barStyling}></span>
    </div>
  );
};
