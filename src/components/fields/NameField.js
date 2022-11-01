import React from "react";
import PropTypes from "prop-types";

export default function NameField({
  label,
  placeholder,
  name,
  handleNameChange,
}) {
  return (
    <label className="input-field">
      {label}
      <input
        name="name"
        type="text"
        placeholder={placeholder}
        value={name}
        onChange={handleNameChange}
        required
      />
    </label>
  );
}

NameField.propTypes = {
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  handleNameChange: PropTypes.func.isRequired,
};
