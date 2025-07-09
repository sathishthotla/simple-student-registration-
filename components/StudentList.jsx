import React from 'react';

const StudentList = ({ registrations, offerings, courses, courseTypes }) => {
  const getOfferingLabel = (offId) => {
    const offering = offerings.find((o) => o.id === offId);
    const course = courses.find((c) => c.id === offering?.courseId);
    const type = courseTypes.find((t) => t.id === offering?.courseTypeId);
    return `${type?.name || 'Unknown'} - ${course?.name || 'Unknown'}`;
  };

  return (
    <div>
      <h3>Registered Students</h3>
      <ul>
        {registrations.map((reg, index) => (
          <li key={index}>
            {reg.studentName} - {getOfferingLabel(reg.offeringId)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentList;
