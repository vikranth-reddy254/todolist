export const loadFromLocalStorage = () => {
    const groups = JSON.parse(localStorage.getItem('groups')) || [];
    const selectedGroup = JSON.parse(localStorage.getItem('selectedGroup')) || null;
    return { groups, selectedGroup };
  };
  
  export const saveToLocalStorage = (groups, selectedGroup) => {
    localStorage.setItem('groups', JSON.stringify(groups));
    localStorage.setItem('selectedGroup', JSON.stringify(selectedGroup));
  };
  