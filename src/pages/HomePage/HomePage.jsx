/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import s from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className={s.hero}>
      <div className={s.title_container}>
        <h1 className={s.hero_title}>
          Find, book and rent a car <span className={s.accent}>Easily</span>
        </h1>
        <svg
          width="175"
          height="40"
          viewBox="0 0 135 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={s.svg}
        >
          <path
            d="M134.398 2.44549C57.1256 -2.5909 23.8505 5.91274 1.51269 9.4328C1.16554 12.3701 1.29738 14.7861 0.927661 19.4528C60.8229 -0.00283289 100.753 3.19444 134.353 4.43383C134.367 4.06436 134.357 3.5539 134.398 2.44549Z"
            fill="#1572D3"
          />
        </svg>
      </div>
      <p className={s.hero_text}>
        Choose from a wide range of vehicles and book your perfect ride in
        minutes. Whether for a weekend getaway or daily commuting, we've got you
        covered. Start your journey with us today!
      </p>
      <Link to="/catalogue" className={s.link}>
        Rent a car now
      </Link>
    </div>
  );
};
export default HomePage;
