import React from "react";
import PropTypes from "prop-types";

export default function EmailField({ email, handleEmailChange }) {
  return (
    <label className="input-field">
      Email
      <input
        name="email"
        type="email"
        placeholder="Email"
        value={email}
        onChange={handleEmailChange}
        required
      />
    </label>
  );
}

EmailField.propTypes = {
  email: PropTypes.string.isRequired,
  handleEmailChange: PropTypes.func.isRequired,
};
