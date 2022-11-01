import React from "react";
import PropTypes from "prop-types";

export default function PasswordField({
  label,
  password,
  handlePasswordChange,
}) {
  return (
    <label className="input-field">
      {label}
      <input
        name="password"
        type="password"
        placeholder="**********"
        value={password}
        onChange={handlePasswordChange}
        required
      />
    </label>
  );
}

PasswordField.propTypes = {
  label: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  handlePasswordChange: PropTypes.func.isRequired,
};
