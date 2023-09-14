import PropTypes from 'prop-types';
import { useEffect } from "react";
import { useState } from "react";
import Course from "../Course/Course";


const Courses = ({cartHandler, creditTime, remainingTime, coursePrice}) => {
    const [courses, setCourses] = useState([]);

    useEffect(()=>{
        fetch('./courses.json')
        .then(res => res.json())
        .then(data => setCourses(data))
    },[])

    return (
        <div className="w-3/4 grid grid-cols-3 gap-6">
            {
                courses.map(course => <Course key={course.id} course={course} cartHandler={cartHandler} creditTime={creditTime} remainingTime={remainingTime} coursePrice={coursePrice}></Course>)
            }
        </div>
    );
};

Courses.propTypes = {
    cartHandler: PropTypes.func,
    creditTime: PropTypes.func,
    remainingTime: PropTypes.func,
    coursePrice: PropTypes.func,
}

export default Courses;