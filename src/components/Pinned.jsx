import React from "react";

export default function Pinned(props) {
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
                style={{ backgroundColor: note.color }}
              >
                <h2>{note.title}</h2>
                <p>{note.text}</p>
                <div className="flex-row">
                  <button onClick={() => props.pin.cb2(note.id)}>
                    <span
                      style={{ fontSize: "1rem" }}
                      className="material-icons"
                    >
                      push_pin
                    </span>
                  </button>
                  <button>
                    <span
                      style={{ fontSize: "1rem" }}
                      className="material-icons"
                    >
                      edit
                    </span>
                  </button>
                  <button onClick={() => props.pin.cb1(note.id)}>
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
