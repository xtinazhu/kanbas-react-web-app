import { Link, useParams, useLocation } from "react-router-dom";
import * as db from "../Database"

export default function CoursesNavigation() {
    const links = ["Home", "Modules", "Piazza", "Zoom", "Assignments", "Quizzes", "Grades", "People"];
    const courses = db.courses;
    const { cid } = useParams();
    const location = useLocation();
    return (
        <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
            {links.map((link) => {
                // Construct URL for each link based on course ID
                const linkPath = `/Kanbas/Courses/${cid}/${link}`;

                // Determine if the link is active by checking if the current pathname matches the link's path
                const isActive = location.pathname === linkPath;

                return (
                    <Link
                        key={link}
                        to={linkPath}
                        className={`list-group-item border border-0 ${isActive ? "active" : "text-danger"}`}
                    >
                        {link}
                    </Link>
                );
            })}
            {/*
            <Link id="wd-course-home-link"    to="/Kanbas/Courses/1234/Home" className="list-group-item active border border-0">Home</Link>
            <Link id="wd-course-modules-link" to="/Kanbas/Courses/1234/Modules"  className="list-group-item text-danger border border-0">Modules</Link>
            <Link id="wd-course-piazza-link"  to="/Kanbas/Courses/1234/Piazza" className="list-group-item text-danger border border-0">Piazza</Link>
            <Link id="wd-course-zoom-link"    to="/Kanbas/Courses/1234/Zoom"  className="list-group-item text-danger border border-0">Zoom</Link>
            <Link id="wd-course-quizzes-link" to="/Kanbas/Courses/1234/Assignments" className="list-group-item text-danger border border-0">Assignments</Link>
            <Link id="wd-course-assignments-link" to="/Kanbas/Courses/1234/Quizzes" className="list-group-item text-danger border border-0">Quizzes</Link>
            <Link id="wd-course-grades-link"  to="/Kanbas/Courses/1234/Grades" className="list-group-item text-danger border border-0">Grades</Link>
            <Link id="wd-course-people-link"  to="/Kanbas/Courses/:cid/People"  className="list-group-item text-danger border border-0" >People</Link>
            */}
        </div>
    );}



