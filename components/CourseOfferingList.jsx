import React from 'react';

const CourseOfferingList = ({ offerings, courses, courseTypes, onUpdate, onDelete }) => {
  const getCourseName = (id) => {
    const course = courses.find((c) => c.id === id);
    return course ? course.name : '';
  };

  const getCourseTypeName = (id) => {
    const type = courseTypes.find((t) => t.id === id);
    return type ? type.name : '';
  };

  const handleEdit = (id) => {
    const newTypeId = prompt('Enter new Course Type ID:');
    const newCourseId = prompt('Enter new Course ID:');

    if (newTypeId && newCourseId) {
      onUpdate(id, newCourseId, newTypeId);
    }
  };

  return (
    <ul>
      {offerings.map((offering) => (
        <li key={offering.id}>
          {getCourseTypeName(offering.courseTypeId)} - {getCourseName(offering.courseId)}
          <button onClick={() => handleEdit(offering.id)}>Update</button>
          <button onClick={() => onDelete(offering.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default CourseOfferingList;
