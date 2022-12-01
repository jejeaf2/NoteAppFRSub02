import React from "react";
import PropTypes from "prop-types";
import { showFormattedDate } from "../utils/data";
import { Link } from "react-router-dom";

function NoteItemBody({ id, title, body, createdAt }) {
  return (
    <div className="note-item__body">
      <Link to={`/notes/${id}`}>{title}</Link>
      <p className="note-item__username">{body}</p>
      <p className="notes-item__date">{showFormattedDate(createdAt)}</p>
    </div>
  );
}

NoteItemBody.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
};

export default NoteItemBody;
