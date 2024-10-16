import { IoSearch } from "react-icons/io5";
import s from "./Searchbar.module.scss";

export const Searchbar = ({ isLightmode }) => {
  return (
    <span
      className={`${s.searchStyling} ${isLightmode ? s.lightmodeStyling : ""}`}
    >
      <input type="text" placeholder="Search" name="searchbar" />
      <IoSearch />
    </span>
  );
};
