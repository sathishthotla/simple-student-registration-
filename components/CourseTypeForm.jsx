
import React, { useState } from 'react';

const CourseTypeForm = ({ onAdd }) => {
  const [typeName, setTypeName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!typeName.trim()) {
      alert('Please enter a valid course type name.');
      return;
    }

    onAdd(typeName.trim());
    setTypeName('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter Course Type "
        value={typeName}
        onChange={(e) => setTypeName(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default CourseTypeForm;

