import React from "react";

const getInitials = (name) => {
  const words = name.split(" ");
  const initials = words.map((word) => word.charAt(0).toUpperCase()).join("");
  return initials;
};

const GroupIcon = ({ groups}) => {
  const initials = getInitials(groups);

  return (
    <div className="group-icon">
      <span>{initials}</span>
      {/* console.log({initials}) */}
    </div>
  );
};

export default GroupIcon;




