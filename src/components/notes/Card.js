import React from "react";
import { Link } from "react-router-dom";
import { showFormattedDate } from "../../utils/local-data";
import PropTypes from "prop-types";
import parser from "html-react-parser";

export default function Card({ notes }) {
  return (
    <div className="card-container">
      {notes.map((note) => {
        return (
          <div key={note.id} className="card">
            <h1 className="card-title">
              <Link to={`/notes/${note.id}`}>{note.title}</Link>
            </h1>
            <span className="card-date">
              {showFormattedDate(note.createdAt)}
            </span>
            <p className="card-body">{parser(note.body)}</p>
          </div>
        );
      })}
    </div>
  );
}

Card.propTypes = {
  notes: PropTypes.array.isRequired,
};
