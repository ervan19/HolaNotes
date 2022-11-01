import React from "react";
import { HiSearch } from "react-icons/hi";
import PropTypes from "prop-types";
import { LocaleConsumer } from "../../context/LocaleContext";
import { home } from "../../utils/content";

export default function SearchBar({
  keyword,
  show,
  onSearchShow,
  onBlurHandler,
  keywordChange,
}) {
  return (
    <LocaleConsumer>
      {({ locale }) => {
        return (
          <div
            onClick={onSearchShow}
            className={show ? "search-field active" : "search-field"}
          >
            <HiSearch size={24} />
            <input
              type="text"
              placeholder={home[locale].placeHolderSearch}
              value={keyword}
              onChange={(event) => keywordChange(event.target.value)}
              onBlur={onBlurHandler}
            />
          </div>
        );
      }}
    </LocaleConsumer>
  );
}

SearchBar.propTypes = {
  keyword: PropTypes.string.isRequired,
  show: PropTypes.bool.isRequired,
  onSearchShow: PropTypes.func.isRequired,
  onBlurHandler: PropTypes.func.isRequired,
  keywordChange: PropTypes.func.isRequired,
};
