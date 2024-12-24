import React from 'react';

const CreateGroupPopup = ({ showPopup, newGroupName, setNewGroupName, createGroup, handleOverlayClick}) => {
  
  return (
    showPopup && (
      <div id="group-popup" className="popup" onClick={handleOverlayClick}>
        <div className='modal'>
          <h3>Create new Group</h3>
          <label htmlFor="name-input">Group Name </label>
          <input
            type="text"
            value={newGroupName}
            onChange={(e) => setNewGroupName(e.target.value)}
            placeholder="Enter group name"
          />
          <br />
          <label htmlFor="name-input">Choose colour </label>
          <br />
          <button onClick={createGroup}> Create Group</button>
        </div>
      </div>
    )
  );
};

export default CreateGroupPopup;
