
import React from 'react';

const GroupList = ({ groups, onGroupSelect }) => {
  return (
    <div className="groups-list">
      <ul className='list'>
        {groups.map((group, index) => (
          <li className='list1' key={index} onClick={() => onGroupSelect(group)}>
            <span>{group.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GroupList;
