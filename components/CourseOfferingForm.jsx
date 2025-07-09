
import React, { useState } from 'react';

const CourseOfferingForm = ({ courses, courseTypes, onAdd }) => {
  const [selectedCourseId, setSelectedCourseId] = useState('');
  const [selectedTypeId, setSelectedTypeId] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!selectedCourseId || !selectedTypeId) {
      alert('Please select both Course and Course Type.');
      return;
    }

    onAdd(selectedCourseId, selectedTypeId);
    setSelectedCourseId('');
    setSelectedTypeId('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <select
        value={selectedTypeId}
        onChange={(e) => setSelectedTypeId(e.target.value)}
      >
        <option value="">Select Course Type</option>
        {courseTypes.map((type) => (
          <option key={type.id} value={type.id}>
            {type.name}
          </option>
        ))}
      </select>

      <select
        value={selectedCourseId}
        onChange={(e) => setSelectedCourseId(e.target.value)}
      >
        <option value="">Select Course</option>
        {courses.map((course) => (
          <option key={course.id} value={course.id}>
            {course.name}
          </option>
        ))}
      </select>

      <button type="submit">Add Offering</button>
    </form>
  );
};

export default CourseOfferingForm;

