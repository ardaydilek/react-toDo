import React, { useState } from "react";

function CreateArea(props) {
  const [newNote, setNewNote] = useState({
    title: "",
    content: ""
  });
  function handle(event) {
    const { name, value } = event.target;

    setNewNote((prev) => {
      return {
        ...prev,
        [name]: value
      };
    });
  }

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          name="title"
          placeholder="Title"
          onChange={handle}
          value={newNote.title}
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          rows="3"
          onChange={handle}
          value={newNote.content}
        />
        <button
          onClick={() => {
            props.addNew(newNote);
            setNewNote({ title: "", content: "" });
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
