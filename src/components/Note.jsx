import React from "react";

function Note(props) {
  function handleDeleteClick() {
    props.onDelete(props.id);
  }

  function handleEditClick() {
    props.onEdit(props.id);
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleEditClick}>Edit</button>
      <button onClick={handleDeleteClick}>Delete</button>
    </div>
  );
}

export default Note;
