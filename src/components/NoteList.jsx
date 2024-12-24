import React from 'react';

const NotesList = ({ notes }) => {
  return (
    <div className="chat-section">
      <h1>MY Notes</h1>
      <div className='messages' 
      >
        <ul className='list'>
          {notes.map((note, index) => (
            <li key={index} className='mlist'
              >
              <h6><small>{note.dateCreated}</small></h6>
              <p>{note.text}</p>
             
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NotesList;
