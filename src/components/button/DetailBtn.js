import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { LocaleConsumer } from "../../context/LocaleContext";
import { sweetDeleteText } from "../../utils/content";
import { deleteNote, archiveNote, unarchiveNote } from "../../utils/api";
import Swal from "sweetalert2";
import ArchiveBtn from "./ArchiveBtn";
import DeleteBtn from "./DeleteBtn";

export default function DetailBtn({ notes }) {
  const navigate = useNavigate();

  async function archiveNotesHandler(id) {
    if (notes.archived === false) {
      await archiveNote(id);
    } else {
      await unarchiveNote(id);
    }
    navigate("/");
  }

  async function deleteNotesHandler(id, locale) {
    const result = await Swal.fire({
      title: `${sweetDeleteText[locale].title}`,
      text: `${sweetDeleteText[locale].text}`,
      icon: "warning",
      iconColor: "#FFFFFF",
      background: "#18191c",
      color: "#FFFFFF",
      showCancelButton: true,
      confirmButtonColor: "rgba(255, 255, 255, 0.1)",
      cancelButtonColor: "#808080",
      confirmButtonText: `${sweetDeleteText[locale].confirmButtonText}`,
      cancelButtonText: `${sweetDeleteText[locale].cancelButtonText}`,
    });

    if (result.isConfirmed) {
      await deleteNote(id);
      navigate("/");
      Swal.fire({
        title: `${sweetDeleteText[locale].titleConfirm}`,
        text: `${sweetDeleteText[locale].textConfirm}`,
        icon: "success",
        iconColor: "#FFFFFF",
        color: "#FFFFFF",
        confirmButtonColor: "rgba(255, 255, 255, 0.1)",
        background: "#18191c",
      });
    }
  }
  return (
    <LocaleConsumer>
      {({ locale }) => {
        return (
          <div className="action-container">
            <ArchiveBtn
              notes={notes.archived}
              archiveNotesHandler={() => {
                archiveNotesHandler(notes.id, notes.archived);
              }}
            />
            <DeleteBtn
              deleteNotesHandler={() => {
                deleteNotesHandler(notes.id, locale);
              }}
            />
          </div>
        );
      }}
    </LocaleConsumer>
  );
}

DetailBtn.propTypes = {
  notes: PropTypes.object.isRequired,
};
