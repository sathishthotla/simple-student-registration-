

import React, { useState, useEffect } from 'react';
import CourseForm from './components/CourseForm';
import CourseList from './components/CourseList';
import CourseTypeForm from './components/CourseTypeForm';
import CourseTypeList from './components/CourseTypeList';
import CourseOfferingForm from './components/CourseOfferingForm';
import CourseOfferingList from './components/CourseOfferingList';
import StudentRegistrationForm from './components/StudentRegistrationForm';
import StudentList from './components/StudentList';
import './App.css'



function App() {
  const [courses, setCourses] = useState([]);
  const [courseTypes, setCourseTypes] = useState([]);
  const [offerings, setOfferings] = useState([]);
  const [registrations, setRegistrations] = useState([]);

  useEffect(() => {
  const savedCourses = JSON.parse(localStorage.getItem('courses')) || [];
  const savedCourseTypes = JSON.parse(localStorage.getItem('courseTypes')) || [];
  const savedOfferings = JSON.parse(localStorage.getItem('courseOfferings')) || [];
  const saved = JSON.parse(localStorage.getItem('registrations')) || [];
    setCourses(savedCourses);
    setCourseTypes(savedCourseTypes);
     setOfferings(savedOfferings);
     setRegistrations(saved);

  }, []);

  useEffect(() => {
    localStorage.setItem('courses', JSON.stringify(courses));
  }, [courses]);

  useEffect(() => {
    localStorage.setItem('courseTypes', JSON.stringify(courseTypes));
  }, [courseTypes]);

  useEffect(() => {
  localStorage.setItem('courseOfferings', JSON.stringify(offerings));
}, [offerings]);


  const addCourse = (name) => {
    const newCourse = { id: Date.now(), name };
    setCourses([...courses, newCourse]);
  };

  const updateCourse = (id, newName) => {
    const updated = courses.map((course) =>
      course.id === id ? { ...course, name: newName } : course
    );
    setCourses(updated);
  };

  const deleteCourse = (id) => {
    const filtered = courses.filter((course) => course.id !== id);
    setCourses(filtered);
  };

  const addCourseType = (name) => {
    const newType = { id: Date.now(), name };
    setCourseTypes([...courseTypes, newType]);
  };

  const updateCourseType = (id, newName) => {
    const updated = courseTypes.map((type) =>
      type.id === id ? { ...type, name: newName } : type
    );
    setCourseTypes(updated);
  };

  const deleteCourseType = (id) => {
    const filtered = courseTypes.filter((type) => type.id !== id);
    setCourseTypes(filtered);
  };
  const registerStudent = ({ studentName, offeringId }) => {
  setRegistrations([...registrations, { studentName, offeringId }]);
};
  
const addOffering = (courseId, courseTypeId) => {
  const newOffering = {
    id: Date.now(),
    courseId,
    courseTypeId,
  };
  setOfferings([...offerings, newOffering]);
};

const updateOffering = (id, newCourseId, newTypeId) => {
  const updated = offerings.map((offering) =>
    offering.id === id
      ? { ...offering, courseId: newCourseId, courseTypeId: newTypeId }
      : offering
  );
  setOfferings(updated);
};

const deleteOffering = (id) => {
  const filtered = offerings.filter((o) => o.id !== id);
  setOfferings(filtered);
};

useEffect(() => {
  localStorage.setItem('registrations', JSON.stringify(registrations));
}, [registrations]);


const enrichedOfferings = offerings.map((offering) => {
  const course = courses.find((c) => c.id === offering.courseId);
  const type = courseTypes.find((t) => t.id === offering.courseTypeId);
  return {
    ...offering,
    courseName: course?.name || '',
    courseTypeName: type?.name || '', 
  };
});

  return (
    <div className="container">
      <h1>Student Registration System</h1>

      <h2>Course Types</h2>
      <CourseTypeForm onAdd={addCourseType} />
      <CourseTypeList
        courseTypes={courseTypes}
        onUpdate={updateCourseType}
        onDelete={deleteCourseType}
      />

      <hr />

      <h2>Courses</h2>
      <CourseForm onAdd={addCourse} />
      <CourseList
        courses={courses}
        onUpdate={updateCourse}
        onDelete={deleteCourse}
      />

       <hr />
<h2>Course Offerings</h2>
<CourseOfferingForm
  courses={courses}
  courseTypes={courseTypes}
  onAdd={addOffering}
/>
<CourseOfferingList
  offerings={offerings}
  courses={courses}
  courseTypes={courseTypes}
  onUpdate={updateOffering}
  onDelete={deleteOffering}
/>

<hr />
<h2>Student Registrations</h2>

<StudentRegistrationForm
  courseTypes={courseTypes}
  courseOfferings={enrichedOfferings} 
  onRegister={registerStudent}
/>

<StudentList
  registrations={registrations}
  offerings={offerings}
  courses={courses}
  courseTypes={courseTypes}
/>




    </div>
  );
}

export default App;





