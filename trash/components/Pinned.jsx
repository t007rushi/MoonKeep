import React from "react";

export default function Pinned(props) {
  // const {pinArr,upcb,dcb} = props.pin
//   console.log(props.pin);
  return (
    <div>
      <h1>Pinned Notes</h1>
      <div className="flex-row">
        {props.pin.pinArr.map((note) => {
          return (
            note.isPinned && (
            <div
              key={note.id}
              className="flex-col note"
              style={{ border: "1px solid white" }}
            >
              <h2>{note.title}</h2>
              <p>{note.text}</p>
              <div className="flex-row">
                <button onClick={() => props.pin.cb2(note.id)}>UNPin</button>
                <button>Edit</button>
                <button onClick={() => props.pin.cb1(note.id)}>Delete</button>
              </div>
            </div>)
          );
        })}
      </div>
    </div>
  );
}
