
import React from 'react';

const CourseList = ({ courses, onUpdate, onDelete }) => {
  const handleEdit = (id, currentName) => {
    const newName = prompt('Update course name:', currentName);
    if (newName && newName.trim() !== '') {
      onUpdate(id, newName.trim());
    }
  };

  return (
    <ul>
      {courses.map((course) => (
        <li key={course.id}>
          {course.name}
          <button onClick={() => handleEdit(course.id, course.name)}>Update</button>
          <button onClick={() => onDelete(course.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default CourseList;
