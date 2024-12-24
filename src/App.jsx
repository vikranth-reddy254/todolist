import React, { useState, useEffect } from 'react';
import CreateGroupPopup from './components/CreateGroupPopup';
import GroupList from './components/GroupList';
import NotesList from './components/NoteList';
import NewNote from './components/NewNote';
import GroupIcon from './components/GroupIcons';
import './App.css';

const loadFromLocalStorage = () => {
  const groups = JSON.parse(localStorage.getItem('groups')) || [];
  return groups;
};

const saveToLocalStorage = (groups) => {
  localStorage.setItem('groups', JSON.stringify(groups));
};

const App = () => {
  const [groups, setGroups] = useState(loadFromLocalStorage());
  const [selectedGroup, setSelectedGroup] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [newGroupName, setNewGroupName] = useState('');

  const createGroup = () => {
    if (!newGroupName) return;
    const newGroup = { name: newGroupName, notes: [] };
    const updatedGroups = [...groups, newGroup];
    setGroups(updatedGroups);
    saveToLocalStorage(updatedGroups);
    setNewGroupName('');
    setShowPopup(false);
  };
  const handleGroupSelection = (group) => {
    setSelectedGroup(group);

  };
  const handleOverlayClick = (e) => {
    if (e.target.classList.contains("popup")) {
      setShowPopup(false);
    }
  }

  return (
    <div className="home">
      <div className='sidebar'>
        <h1 className='pocketnotes'>Pocket Notes</h1>
        {/* <GroupIcon groupName={groups.name} />     */}
        <div className='glist'><GroupList groups={groups} onGroupSelect={handleGroupSelection} />
        </div>
        <button className='btn' onClick={() => { setShowPopup(!showPopup) }}>submit</button>
      </div>
      {showPopup && <CreateGroupPopup
        showPopup={showPopup}
        newGroupName={newGroupName}
        setNewGroupName={setNewGroupName}
        createGroup={createGroup}
        handleOverlayClick={handleOverlayClick}
      />}
  
      

      <div className='chat'>
        {selectedGroup && (
          <>
            <NotesList notes={selectedGroup.notes} />
            <NewNote selectedGroup={selectedGroup} setGroups={setGroups} groups={groups} />
          </>
        )}</div>
    </div>
  );
};

export default App;
