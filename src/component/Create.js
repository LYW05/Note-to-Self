import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd } from "@fortawesome/free-solid-svg-icons";

function Create(props) {

    const [note, setNote] = useState({
        title: "",
        content: ""
    });

function handleChange(e) {
  const {name, value} = e.target;
  setNote(prevNote => {
      return {
          ...prevNote,
          [name] : value
      };
  });
}

function submitNote(e) {
    props.onAdd(note);
    setNote({
        title: "",
        content: ""
    })
    e.preventDefault();
}

    return (
        <div>
            <form className="create-note">
                <input name="title"
                    onChange={handleChange}
                    value={note.title}
                    placeholder="Title" 
                />
                <textarea name="content" 
                    onChange={handleChange}
                    value={note.content}
                    placeholder="Take a note..." 
                    rows="3"
                />
                <button onClick={submitNote}><FontAwesomeIcon icon={faAdd} /></button>
            </form>
        </div>
    );
}

export default Create;