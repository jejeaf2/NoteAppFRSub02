import React from "react";
import PropTypes from "prop-types";
import { BiTrash } from "react-icons/bi";

function DeleteButton({ id, onDelete }) {
  return (
    <button className="note-item__delete" onClick={() => onDelete(id)}>
      <BiTrash />
    </button>
  );
}

DeleteButton.propTypes = {
  id: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default DeleteButton;
