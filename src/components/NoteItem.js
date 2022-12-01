import React from "react";
import PropTypes from "prop-types";
import NoteItemBody from "./NoteItemBody";
import DeleteButton from "./DeleteButton";

function NoteItem({ title, createdAt, body, id, onDelete }) {
  return (
    <div classtitle="note-item">
      <NoteItemBody id={id} title={title} body={body} createdAt={createdAt} />
      <DeleteButton id={id} onDelete={onDelete} />
    </div>
  );
}

NoteItem.propTypes = {
  title: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default NoteItem;
