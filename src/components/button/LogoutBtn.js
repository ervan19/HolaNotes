import React from "react";
import { HiLogout } from "react-icons/hi";
import PropTypes from "prop-types";
import { LocaleConsumer } from "../../context/LocaleContext";

export default function LogoutBtn({ onLogoutHandler }) {
  return (
    <LocaleConsumer>
      {({ locale }) => {
        return (
          <button className="header-btn " onClick={onLogoutHandler}>
            {locale === "id" ? "Keluar" : "Logout"} <HiLogout />
          </button>
        );
      }}
    </LocaleConsumer>
  );
}

LogoutBtn.propTypes = {
  onLogoutHandler: PropTypes.func.isRequired,
};
