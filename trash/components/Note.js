import React, { useState } from "react";
import Pinned from "./Pinned";

export default function Note() {
  const [noteArr, updateNoteArr] = useState([]);
  const [pinArr, updatePinnArr] = useState([]);
  const [title, updateTitle] = useState("");
  const [noteText, updateNoteText] = useState("");

  const MakeNote = () => {
    const newNote = {
      id: Math.random(),
      title: title,
      text: noteText,
      isPinned: false,
    };
    updateNoteArr([...noteArr, newNote]);
    updateTitle("");
    updateNoteText("");
  };

  const PinnedNote = (id) => {
    console.log(noteArr)
    console.log(pinArr)
  // const  PinnedItem = noteArr.filter(item => item.id === id)
  //MApping -> filtering out the changes in main arr without mutation "BRAVOOOOOOOOOO"
  const PinnedItem = noteArr.map((item) =>
    item.id === id ? { ...item, isPinned: true } : item
  );
  const pinnedArr = PinnedItem.filter((item) => item.isPinned);
  updatePinnArr(pinnedArr);
  updateNoteArr(PinnedItem);
  // updatePinnArr(PinnedItem)
  // console.log(PinnedItem)
  // deleteNote(id);
};


  const Unpinn = (id) => {
    const unPinnedItem = pinArr.map((item) =>
      item.id === id ? { ...item, isPinned: false } : item
    );
    const unpinnedArr = unPinnedItem.filter((item) => item.isPinned);
    const unpinnedArr2 = unPinnedItem.filter((item) => !item.isPinned);
    // updateNoteArr([...noteArr, unpinnedArr]);
    updatePinnArr(unpinnedArr)
    updateNoteArr([...noteArr,...unpinnedArr2])
    // updatePinnArr()
    // deleteNoteinPin(id);
  };
 
  const deleteNote = (id) => {
    // WRONG APPROACH USING MAP instead of FILTER when we want filtered array & not manipulation by pure functions
    //AS the output comes to be true false & map ->mapped that value to that array index filter -> filtered array for us
    const deletedItem = noteArr.filter((item) => item.id !== id);
    // console.log(deletedItem)
    updateNoteArr(deletedItem);
  };
 
  const deleteNoteinPin = (id) => {
    // WRONG APPROACH USING MAP instead of FILTER when we want filtered array & not manipulation by pure functions
    //AS the output comes to be true false & map ->mapped that value to that array index filter -> filtered array for us
    const deletedItem1 = pinArr.filter((item) => item.id !== id);
    // console.log(deletedItem)
    updatePinnArr(deletedItem1);
  };

  return (
    <div>
      <div className="flex-col">
        Note
        <input
          type="text"
          value={title}
          onChange={(e) => updateTitle(e.target.value)}
        />
        <input
          type="text"
          value={noteText}
          onChange={(e) => updateNoteText(e.target.value)}
        />
        <button onClick={MakeNote}>Create</button>
      </div>
      <br />
      {/*  */}

      <Pinned pin={{ pinArr: pinArr, cb1: deleteNoteinPin,cb2:Unpinn }} />

      {/*  */}
      <h1>MY NOTES</h1>
      <div className="flex-row note-container">
        {noteArr.map((note) => {
          return (
            !note.isPinned && (
              <div key={note.id} className="flex-col note">
                <h2>{note.title}</h2>
                <p>{note.text}</p>
                <div className="flex-row">
                  <button onClick={() => PinnedNote(note.id)}>Pin</button>
                  <button>Edit</button>
                  <button onClick={() => deleteNote(note.id)}>Delete</button>
                </div>
              </div>
            )
          );
        })}
      </div>
    </div>
  );
}
