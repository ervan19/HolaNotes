import React from "react";
import PropTypes from "prop-types";

export default function Tabs({
  toggleTabs,
  onToggleStateActive,
  onToggleStateArchieve,
  headingActive,
  headingArchieve,
}) {
  return (
    <div className="tabs">
      <span
        className={toggleTabs === 1 ? "tab active" : "tab"}
        onClick={onToggleStateActive}
      >
        {headingActive}
      </span>
      <span
        className={toggleTabs === 2 ? "tab active" : "tab"}
        onClick={onToggleStateArchieve}
      >
        {headingArchieve}
      </span>
    </div>
  );
}

Tabs.propTypes = {
  toggleTabs: PropTypes.number.isRequired,
  onToggleStateActive: PropTypes.func.isRequired,
  onToggleStateArchieve: PropTypes.func.isRequired,
  headingActive: PropTypes.string.isRequired,
  headingArchieve: PropTypes.string.isRequired,
};
