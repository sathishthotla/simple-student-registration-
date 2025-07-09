
import React, { useState } from 'react';

const StudentRegistrationForm = ({ courseTypes, courseOfferings, onRegister }) => {
  const [studentName, setStudentName] = useState('');
  const [selectedCourseTypeId, setSelectedCourseTypeId] = useState('');
  const [selectedOfferingId, setSelectedOfferingId] = useState('');

  const filteredOfferings = courseOfferings.filter(
    (off) => off.courseTypeId === selectedCourseTypeId
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!studentName.trim()) {
      alert('Please enter a valid student name.');
      return;
    }

    if (!selectedOfferingId) {
      alert('Please select a course offering.');
      return;
    }

    onRegister({ studentName, offeringId: selectedOfferingId });
    setStudentName('');
    setSelectedOfferingId('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Student Name"
        value={studentName}
        onChange={(e) => setStudentName(e.target.value)}
      />

      <select
        value={selectedCourseTypeId}
        onChange={(e) => setSelectedCourseTypeId(e.target.value)}
      >
        <option value="">Filter by Course Type</option>
        {courseTypes.map((type) => (
          <option key={type.id} value={type.name}>
            {/* {type.name} */}
          </option>
        ))}
      </select>

      <select
        value={selectedOfferingId}
        onChange={(e) => setSelectedOfferingId(e.target.value)}
      >
        <option value="">Select Course Offering</option>
        {filteredOfferings.map((off) => (
          <option key={off.id} value={off.id}>
            {off.courseTypeName} - {off.courseName}
          </option>
        ))}
      </select>

      <button type="submit">Register</button>
    </form>
  );
};

export default StudentRegistrationForm;

