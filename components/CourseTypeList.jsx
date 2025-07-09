import React from 'react';

const CourseTypeList = ({ courseTypes, onUpdate, onDelete }) => {
  const handleEdit = (id) => {
    const newName = prompt('Enter new name:');
    if (newName) {
      onUpdate(id, newName);
    }
  };

  return (
    <ul>
      {courseTypes.map((type) => (
        <li key={type.id}>
          {type.name}
          <button onClick={() => handleEdit(type.id)}>Update</button>
          <button onClick={() => onDelete(type.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default CourseTypeList;
