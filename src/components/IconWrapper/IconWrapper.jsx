import s from "./IconWrapper.module.scss";

export const IconWrapper = ({ children }) => {
  return <span className={s.wrapperStyling}>{children}</span>;
};
