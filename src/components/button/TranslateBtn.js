import React from "react";
import { HiTranslate } from "react-icons/hi";
import PropTypes from "prop-types";
export default function TranslateBtn({ toggleLocale }) {
  return (
    <button className="translte-btn" onClick={toggleLocale}>
      <HiTranslate />
    </button>
  );
}

TranslateBtn.propTypes = {
  toggleLocale: PropTypes.func.isRequired,
};
