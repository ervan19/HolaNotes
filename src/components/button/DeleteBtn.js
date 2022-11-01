import React from "react";
import PropTypes from "prop-types";
import { HiTrash } from "react-icons/hi";

export default function DeleteBtn({ deleteNotesHandler }) {
  return (
    <button className="action-btn" onClick={deleteNotesHandler}>
      <HiTrash size={24} />
    </button>
  );
}

DeleteBtn.propTypes = {
  deleteNotesHandler: PropTypes.func.isRequired,
};
