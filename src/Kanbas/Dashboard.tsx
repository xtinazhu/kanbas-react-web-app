import React, {useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addEnrollment, removeEnrollment } from "./Database/enrollmentReducer"
import * as courseClient from "./Courses/client"

export default function Dashboard({ courses, course, setCourse, addNewCourse,
                                      deleteCourse, updateCourse }: {
    courses: any[]; course: any; setCourse: (course: any) => void;
    addNewCourse: () => void; deleteCourse: (course: any) => void;
    updateCourse: () => void; }) {


    const dispatch = useDispatch();
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const enrollments = useSelector((state: any) => state.enrollments || []);
    const [showAllCourses, setShowAllCourses] = useState(false);
    const [enrollmentToggle, setEnrollmentToggle] = useState(false);

    // Filter enrolled courses for the student
    const userEnrollments = enrollments.filter((enrollment: any) => enrollment.user === currentUser._id);


    // Toggle enrollment status
    const toggleEnrollment = (courseId: string, isEnrolled: boolean) => {
        if (isEnrolled) {
            dispatch(removeEnrollment({ userId: currentUser._id, courseId }));
        } else {
            dispatch(addEnrollment({ userId: currentUser._id, courseId }));
        }

    };

    // Filter courses based on enrollment status for students
    const filteredCourses = currentUser.role === "STUDENT"
        ? (showAllCourses ? courses : courses.filter((course) =>
            userEnrollments.some((enrollment: any) => enrollment.course === course._id)
        ))
        : courses;

    useEffect(() => {
        // Load enrollments from local storage on initial load
        dispatch({ type: "enrollments/loadEnrollmentsFromStorage" });
    }, [dispatch]);



    return (

        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1>
            <hr />

            {currentUser.role === "FACULTY" && (
                <div>
                    <h5>New Course
                        <button
                            className="btn btn-primary float-end"
                            id="wd-add-new-course-click"
                            onClick={addNewCourse}
                        >
                            Add
                        </button>
                        <button
                            className="btn btn-warning float-end me-2"
                            onClick={updateCourse}
                            id="wd-update-course-click"
                        >
                            Update
                        </button>
                    </h5>
                    <hr />
                    <input
                        value={course.name}
                        className="form-control mb-2"
                        onChange={(e) => setCourse({ ...course, name: e.target.value })}
                    />
                    <textarea
                        value={course.description}
                        className="form-control"
                        onChange={(e) => setCourse({ ...course, description: e.target.value })}
                    />
                </div>
            )}

            {currentUser.role === "STUDENT" && (
                <button
                    className="btn btn-primary float-end mb-3"
                    onClick={() => setShowAllCourses(!showAllCourses)}
                >
                    {showAllCourses ? "Show Enrolled Courses" : "Show All Courses"}
                </button>
            )}



            <h2 id="wd-dashboard-published">{showAllCourses ? "All Courses" : "Enrolled Courses"} ({filteredCourses.length})</h2>
            <div className="row row-cols-1 row-cols-md-5 g-4">

                {filteredCourses.map((course) => {
                    const isEnrolled = userEnrollments.some((enrollment: any) => enrollment.course === course._id);


                    return(

                    <div key={course._id} className="col" style={{ width: "300px" }}>
                        <div className="card rounded-3 overflow-hidden">
                            <Link
                                to={`/Kanbas/Courses/${course._id}/Home`}
                                className="wd-dashboard-course-link text-decoration-none text-dark"
                            >
                                <img src={course.image || "/images/reactjs.jpg"} width="100%" height={160} alt={course.name} />
                                <div className="card-body">
                                    <h5 className="wd-dashboard-course-title card-title">{course.name}</h5>
                                    <p className="wd-dashboard-course-title card-text overflow-y-hidden" style={{ maxHeight: 100 }}>
                                        {course.description}
                                    </p>
                                </div>
                            </Link>

                            <div className="d-flex justify-content-between p-2">
                                <Link to={`/Kanbas/Courses/${course._id}/Home`}>
                                    <button className="btn btn-primary float-start">Go</button>
                                </Link>
                                {currentUser.role === "STUDENT" && (
                                    <button
                                        className={`btn ${isEnrolled ? "btn-danger" : "btn-success"} float-end`}
                                        onClick={() => toggleEnrollment(course._id, isEnrolled)}
                                    >
                                        {isEnrolled ? "Unenroll" : "Enroll"}
                                    </button>
                                )}

                                {currentUser.role === "FACULTY" && (
                                    <>
                                        <button
                                            id="wd-edit-course-click"
                                            onClick={(event) => {
                                                event.preventDefault();
                                                setCourse(course);
                                            }}
                                            className="btn btn-warning me-2 float-end"
                                        >
                                            Edit
                                        </button>

                                        <button
                                            onClick={(event) => {
                                                event.preventDefault();
                                                deleteCourse(course._id);
                                            }}
                                            className="btn btn-danger float-end"
                                            id="wd-delete-course-click"
                                        >
                                            Delete
                                        </button>
                                    </>
                                )}

                            </div>


                        </div>
                    </div>
                    );
                })}
            </div>
        </div>
    );
}