import React from "react";
import { IoArchive, IoTrashBin } from "react-icons/io5";
import PropTypes from "prop-types";

export default function ArchiveBtn({ notes, archiveNotesHandler }) {
  return (
    <button className="action-btn" onClick={archiveNotesHandler}>
      {notes === false ? <IoArchive size={24} /> : <IoTrashBin size={24} />}
    </button>
  );
}

ArchiveBtn.propTypes = {
  notes: PropTypes.bool.isRequired,
  archiveNotesHandler: PropTypes.func.isRequired,
};
