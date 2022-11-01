import React from "react";
import { addNote } from "../utils/api";
import { useNavigate, useLocation } from "react-router-dom";
import { HiCheck } from "react-icons/hi";
import Swal from "sweetalert2";
import PropTypes from "prop-types";
import NotFound from "./NotFound";
import { LocaleConsumer } from "../context/LocaleContext";
import { notesForm } from "../utils/content";

function NotesInputWrapper() {
  const navigate = useNavigate();
  const location = useLocation();

  async function onAddNotesHandler(notes) {
    await addNote(notes);
    navigate("/");
  }

  if (location.pathname === undefined) {
    return <NotFound />;
  } else {
    return <NotesInput addNotes={onAddNotesHandler} />;
  }
}

class NotesInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
    };

    this.onTitleChangeHandler = this.onTitleChangeHandler.bind(this);
    this.onBodyChangeHandler = this.onBodyChangeHandler.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }

  onTitleChangeHandler(event) {
    this.setState(() => {
      return {
        title: event.target.value,
      };
    });
  }

  onBodyChangeHandler(event) {
    this.setState(() => {
      return {
        body: event.target.innerHTML,
      };
    });
  }

  onSubmitHandler(event, locale) {
    event.preventDefault();
    Swal.fire({
      position: "top-end",
      width: "24em",
      iconColor: "#FFFFFF",
      color: "#FFFFFF",
      icon: "success",
      title: `${
        locale === "id"
          ? "Catatan Berhasil Ditambahkan!"
          : "Notes Added Successfully!"
      }`,
      background: "#18191c",
      showConfirmButton: false,
      timer: 1500,
    });
    this.props.addNotes(this.state);
  }

  render() {
    return (
      <LocaleConsumer>
        {({ locale }) => {
          return (
            <form onSubmit={(event) => this.onSubmitHandler(event, locale)}>
              <input
                type="text"
                className="title-input"
                placeholder={notesForm[locale].placeholderTitle}
                value={this.state.title}
                onChange={this.onTitleChangeHandler}
              />
              <div
                className="body-input"
                data-placeholder={notesForm[locale].placeholderBody}
                onInput={this.onBodyChangeHandler}
                contentEditable
              />
              <button className="action-btn submit" type="submit">
                <HiCheck size={24} />
              </button>
            </form>
          );
        }}
      </LocaleConsumer>
    );
  }
}

NotesInput.propTypes = {
  addNotes: PropTypes.func.isRequired,
};

export default NotesInputWrapper;
