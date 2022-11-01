import React from "react";
import PropTypes from "prop-types";
import Card from "./Card";

export default function ActiveNotes({ tabsCategory, notes, locale }) {
  return (
    <div
      className={
        tabsCategory === 1 ? "notes-container active" : "notes-container"
      }
    >
      {tabsCategory === 1 && notes.length !== 0 ? (
        <Card notes={notes} />
      ) : (
        <p className="notes-empty">
          {locale === "id" ? "Tidak ada catatan" : "No notes"}
        </p>
      )}
    </div>
  );
}

ActiveNotes.propTypes = {
  tabsCategory: PropTypes.number.isRequired,
  notes: PropTypes.array.isRequired,
  locale: PropTypes.string.isRequired,
};
