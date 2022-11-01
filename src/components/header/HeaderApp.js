import { React, useState } from "react";
import Navigation from "./Navigation";
import SearchBar from "./../fields/SearchBar";
import PropTypes from "prop-types";
import { HiPlus, HiMenuAlt2, HiX } from "react-icons/hi";
import { Link } from "react-router-dom";
import ThemeBtn from "../button/ThemeBtn";
import TranslateBtn from "../button/TranslateBtn";
import LogoutBtn from "../button/LogoutBtn";
import { LocaleConsumer } from "../../context/LocaleContext";
import { home } from "../../utils/content";

export default function HeaderApp({
  keyword,
  show,
  onSearchShow,
  onBlurHandler,
  keywordChange,
  onLogoutHandler,
}) {
  const [isHamburger, setIsHamburger] = useState(false);

  const hamburgerHandler = () => {
    if (isHamburger === false) {
      setIsHamburger(true);
    } else {
      setIsHamburger(false);
    }
  };
  return (
    <LocaleConsumer>
      {({ locale, toggleLocale }) => {
        return (
          <header className="App-header">
            <Navigation />
            <div className="hamburger-menu" onClick={hamburgerHandler}>
              {isHamburger ? <HiX size={24} /> : <HiMenuAlt2 size={24} />}
            </div>
            <div
              className={isHamburger ? "header-right active" : "header-right"}
            >
              <Link to="/notes/new" className="add-new-note">
                {home[locale].buttonAdd}
                <HiPlus size={24} />
              </Link>
              <SearchBar
                keyword={keyword}
                show={show}
                onSearchShow={onSearchShow}
                onBlurHandler={onBlurHandler}
                keywordChange={keywordChange}
              />
              <ThemeBtn />
              <TranslateBtn toggleLocale={toggleLocale} />
              <LogoutBtn onLogoutHandler={onLogoutHandler} />
            </div>
          </header>
        );
      }}
    </LocaleConsumer>
  );
}

HeaderApp.propTypes = {
  keyword: PropTypes.string.isRequired,
  show: PropTypes.bool.isRequired,
  onSearchShow: PropTypes.func.isRequired,
  onBlurHandler: PropTypes.func.isRequired,
  keywordChange: PropTypes.func.isRequired,
  onLogoutHandler: PropTypes.func.isRequired,
};
