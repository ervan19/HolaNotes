import React from "react";
import PropTypes from "prop-types";
import Card from "./Card";

export default function ArchiveNotes({ tabsCategory, notes, locale }) {
  return (
    <div
      className={
        tabsCategory === 2 ? "notes-container active" : "notes-container"
      }
    >
      {tabsCategory === 2 && notes.length !== 0 ? (
        <Card notes={notes} />
      ) : (
        <p className="notes-empty">
          {locale === "id" ? "Tidak ada catatan" : "No notes"}
        </p>
      )}
    </div>
  );
}

ArchiveNotes.propTypes = {
  tabsCategory: PropTypes.number.isRequired,
  notes: PropTypes.array.isRequired,
  locale: PropTypes.string.isRequired,
};
