import React from "react";
import PropTypes from "prop-types";
import ActiveNotes from "./ActiveNotes";
import ArchiveNotes from "./ArchiveNotes";
import { LocaleConsumer } from "../../context/LocaleContext";

export default function NoteList({ notesActive, notesArchieve, tabsCategory }) {
  return (
    <LocaleConsumer>
      {({ locale }) => {
        return (
          <div className="note-list">
            <ActiveNotes
              tabsCategory={tabsCategory}
              notes={notesActive}
              locale={locale}
            />
            <ArchiveNotes
              tabsCategory={tabsCategory}
              notes={notesArchieve}
              locale={locale}
            />
          </div>
        );
      }}
    </LocaleConsumer>
  );
}

NoteList.propTypes = {
  notesActive: PropTypes.array.isRequired,
  notesArchieve: PropTypes.array.isRequired,
  tabsCategory: PropTypes.number.isRequired,
};
