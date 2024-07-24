import { NavLink } from "react-router-dom";
import clsx from "clsx";
import s from "./Navigation.module.css";

const buildLinkClass = ({ isActive }) => {
  return clsx(s.link, isActive && s.active);
};

const Navigation = () => {
  return (
    <header className={s.header}>
      <nav>
        <ul className={s.list}>
          <li>
            <NavLink to="/" className={buildLinkClass}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/catalogue" className={buildLinkClass}>
              Catalogue
            </NavLink>
          </li>
          <li>
            <NavLink to="/favorites" className={buildLinkClass}>
              Favorites
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Navigation;
