import React, { useState } from "react";
import Pinned from "./Pinned";

export default function Note() {
  const [noteArr, updateNoteArr] = useState([]);
  const [title, updateTitle] = useState("");
  const [noteText, updateNoteText] = useState("");
  const [toggle, setToggle] = useState(false);
  const [editer, setEditer] = useState("");
  const [closeEdit,setCloseEdit] = useState(false);
  const [bgColor,setBgColor] = useState("darkslategrey")

  const MakeNote = () => {
    for (let i = 0; i < noteArr.length; i++) {
      if (noteArr[i].title === title) {
        alert("title already exist");
        return;
      }
    }

    if (!title || !noteText) {
      alert("title or note is EMPTY!!!!");
    } else if (title && toggle) {
      let colorfornote = bgColor
      const editedItemArr = noteArr.map((item) =>
        item.id === editer ? { ...item, title: title, text: noteText,color :colorfornote} : item
      );
      updateNoteArr(editedItemArr);
      setToggle(false);
      setEditer("");
      updateTitle("");
      updateNoteText("");
      setCloseEdit(false)
    } else {
      let colorfornote = bgColor
      const newNote = {
        id: Math.random(),
        title: title,
        text: noteText,
        isPinned: false,
        color:colorfornote,
      };
      updateNoteArr([...noteArr, newNote]);
      updateTitle("");
      updateNoteText("");
    }
  };

  const PinnedNote = (id) => {
    const PinnedItem = noteArr.map((item) =>
      item.id === id ? { ...item, isPinned: !item.isPinned } : item
    );
    updateNoteArr(PinnedItem);
  };

  const deleteNote = (id) => {
    const deletedItem = noteArr.filter((item) => item.id !== id);
    updateNoteArr(deletedItem);
  };

  //EDIT
  const editNote = (item) => {
    setCloseEdit(true)
    const editItem = noteArr.find((ele) => ele.id === item.id);
    setToggle(true);
    updateTitle(editItem.title);
    updateNoteText(editItem.text);
    setEditer(editItem.id);
    
  };

  const closeEditor = () =>{
    setCloseEdit(false)
    updateTitle("")
    updateNoteText("")
    setToggle(false);
  }
  //COLORS

  //LABELS

  //search 
  const searchHandler = (e) => {

  }

  return (
    <div>
      <div className="flex-col">
        Note
        <input
          type="text"
          value={title}
          placeholder="Enter the title"
          onChange={(e) => updateTitle(e.target.value)}
        />
        <textarea
          name="description"
          id=""
          cols="30"
          rows="5"
          value={noteText}
          placeholder="Take a note"
          onChange={(e) => updateNoteText(e.target.value)}
        ></textarea>
        <select name="colors" id="" onChange={(e) => setBgColor(e.target.value)}>
        <option value="darkslategrey">default</option>
          <option value="red">red</option>
          <option value="blue">blue</option>
          <option value="green">green</option>
        </select>
        <button onClick={MakeNote}>
          {!toggle ? (
            <span className="material-icons">add_box</span>
          ) : (
            <span style={{ fontSize: "1rem" }} className="material-icons">
              edit
            </span>
          )}
        </button>
        {closeEdit && <button onClick={closeEditor}><span className="material-icons">close</span> </button>}

      </div>
      <br />
      <label htmlFor="search" className="flex-row search" >
      <span className="material-icons" style={{ fontSize: "1.5rem" }}>search</span> 
      <input type="text" name="search" onChange={searchHandler}/></label>
      {/*  */}

      <Pinned pin={{ pinArr: noteArr, cb1: deleteNote, cb2: PinnedNote }} />

      {/*  */}
      
      <h1>MY NOTES</h1>
      <div className="flex-row note-container">
        {noteArr.map((note) => {
          return (
            !note.isPinned && (
              <div key={note.id} className="flex-col note" style={{backgroundColor:note.color}}>
                <h2>{note.title}</h2>
                <p>{note.text}</p>
                <div className="flex-row">
                  <button onClick={() => PinnedNote(note.id)}>
                    <span
                      style={{ fontSize: "1rem" }}
                      className="material-icons"
                    >
                      push_pin
                    </span>
                  </button>
                  <button onClick={() => editNote(note)}>
                    <span
                      style={{ fontSize: "1rem" }}
                      className="material-icons"
                    >
                      edit
                    </span>
                  </button>
                  <button onClick={() => deleteNote(note.id)}>
                    <span
                      style={{ fontSize: "1rem" }}
                      className="material-icons"
                    >
                      delete
                    </span>
                  </button>
                </div>
              </div>
            )
          );
        })}
      </div>
    </div>
  );
}
//at time create -> //category,pins,edit,colors
/*
EDIT on note  => edit title & body

*/
