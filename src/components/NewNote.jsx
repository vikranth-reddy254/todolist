import React, { useState } from 'react';

const NewNote = ({ selectedGroup, setGroups, groups }) => {
  const [newNote, setNewNote] = useState('');

  const addNote = () => {
    if (!newNote) return; 

    const date = new Date();
    const formattedDate =
    `${date.getDate()} ${date.toLocaleString('en-GB', { month: 'short' })} ${date.getFullYear()}  ${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}`;

    const note = {
      text: newNote,
      dateCreated: formattedDate,
    
      
    };

    const updatedGroups = groups.map(group =>
      group.name === selectedGroup.name
        ? { ...group, notes: [...group.notes, note] }
        : group
    );

    setGroups(updatedGroups);
    localStorage.setItem('groups', JSON.stringify(updatedGroups));
    setNewNote('');
  };

  return (
    <div className="new-note-section">
      <div className="notediv">
        <textarea
        className="txtnote"
        value={newNote}
        onChange={(e) => setNewNote(e.target.value)}
        placeholder="Enter your Text here............."
      />
        <button className="notebtn"
          onClick={addNote}><img src="./images/3177384.png"
          alt='saveicon'
          style={{Height:'20px',width:'20px',marginRight:"10px"}}/></button>
      </div>
    </div>
  );
};

export default NewNote;
