import { Link } from "react-router-dom";
export default function Dashboard() {
    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
            <h2 id="wd-dashboard-published">Published Courses (10)</h2> <hr />

            <div id="wd-dashboard-courses" className = "row">
                <div className="row row-cols-1 row-cols-md-5 g-4">
                    <div className="wd-dashboard-course col"
                         style={{width: "270px"}}>
                        <div className="card rounded-3 overflow-hidden">
                            <Link
                                className="wd-dashboard-course-link text-decration-none text-dark"
                                to="/Kanbas/Courses/1234/Home">
                                <img src="/images/course1.jpg" width="100%"
                                     height={160}/>
                                <div className="card-body">
                                    <h5 className="wd-dashboard-course-title card-title">
                                        CS5610 React JS
                                    </h5>
                                    <p className="wd-dashboard-course-title card-text">
                                        Full Stack software developer
                                    </p>
                                    <button className="btn btn-primary"> Go
                                    </button>
                                </div>
                            </Link>
                        </div>
                    </div>

                    <div className="wd-dashboard-course col"
                         style={{width: "270px"}}>
                        <div className="card rounded-3 overflow-hidden">
                            <Link
                                className="wd-dashboard-course-link text-decration-none text-dark"
                                to="/Kanbas/Courses/1234/Home">
                                <img src="/images/course2.jpg"
                                     width="100%"
                                     height={160}/>
                                <div className="card-body">
                                    <h5 className="wd-dashboard-course-title card-title">
                                        CS5800 Algorithm
                                    </h5>
                                    <p className="wd-dashboard-course-title card-text">
                                        Term: 202510_2 Fall 2024 Semester Full
                                        Term Grad
                                    </p>
                                    <button className="btn btn-primary"> Go
                                    </button>
                                </div>
                            </Link>
                        </div>
                    </div>

                    <div className="wd-dashboard-course col"
                         style={{width: "270px"}}>
                        <div className="card rounded-3 overflow-hidden">
                            <Link
                                className="wd-dashboard-course-link text-decration-none text-dark"
                                to="/Kanbas/Courses/1234/Home">
                                <img src="/images/course3.jpg"
                                     width="100%"
                                     height={160}/>
                                <div className="card-body">
                                    <h5 className="wd-dashboard-course-title card-title">
                                        CS5610 Web Development
                                    </h5>
                                    <p className="wd-dashboard-course-title card-text">
                                        Term: 202510_2 Fall 2024
                                        Semester Full Term Grad
                                    </p>
                                    <button
                                        className="btn btn-primary"> Go
                                    </button>
                                </div>
                            </Link>
                        </div>
                    </div>


                    <div className="wd-dashboard-course col"
                         style={{width: "270px"}}>
                        <div className="card rounded-3 overflow-hidden">
                            <Link
                                className="wd-dashboard-course-link text-decration-none text-dark"
                                to="/Kanbas/Courses/1234/Home">
                                <img src="/images/course4.jpg"
                                     width="100%"
                                     height={160}/>
                                <div className="card-body">
                                    <h5 className="wd-dashboard-course-title card-title">
                                        CS5002 Discrete Structures
                                    </h5>
                                    <p className="wd-dashboard-course-title card-text">
                                        Term: 202410_2 Fall 2023
                                        Semester Full
                                        Term Grad
                                    </p>
                                    <button
                                        className="btn btn-primary"> Go
                                    </button>
                                </div>
                            </Link>
                        </div>
                    </div>

                    <div className="wd-dashboard-course col"
                         style={{width: "270px"}}>
                        <div className="card rounded-3 overflow-hidden">
                            <Link
                                className="wd-dashboard-course-link text-decration-none text-dark"
                                to="/Kanbas/Courses/1234/Home">
                                <img src="/images/course5.jpg"
                                     width="100%"
                                     height={160}/>
                                <div className="card-body">
                                    <h5 className="wd-dashboard-course-title card-title">
                                        CS5008 Data Structures
                                    </h5>
                                    <p className="wd-dashboard-course-title card-text">
                                        Term: 202430_2 Spring 2024 Semester Full
                                        Term Grad
                                    </p>
                                    <button
                                        className="btn btn-primary"> Go
                                    </button>
                                </div>
                            </Link>
                        </div>
                    </div>

                    <div className="wd-dashboard-course col"
                         style={{width: "270px"}}>
                        <div className="card rounded-3 overflow-hidden">
                            <Link
                                className="wd-dashboard-course-link text-decration-none text-dark"
                                to="/Kanbas/Courses/1234/Home">
                                <img src="/images/course6.jpg"
                                     width="100%"
                                     height={160}/>
                                <div className="card-body">
                                    <h5 className="wd-dashboard-course-title card-title">
                                        CS5004 Object-Oriented Design
                                    </h5>
                                    <p className="wd-dashboard-course-title card-text">
                                        Term: 202430_2 Spring 2024
                                        Semester Full Term Grad
                                    </p>
                                    <button className="btn btn-primary"> Go
                                    </button>
                                </div>
                            </Link>
                        </div>
                    </div>

                    <div className="wd-dashboard-course col"
                         style={{width: "270px"}}>
                        <div className="card rounded-3 overflow-hidden">
                            <Link
                                className="wd-dashboard-course-link text-decration-none text-dark"
                                to="/Kanbas/Courses/1234/Home">
                                <img src="/images/course7.jpg"
                                     width="100%"
                                     height={160}/>
                                <div className="card-body">
                                    <h5 className="wd-dashboard-course-title card-title">
                                        CS5005 Recitation for CS5004
                                    </h5>
                                    <p className="wd-dashboard-course-title card-text">
                                        Term: 202430_2 Spring 2024 Semester Full
                                        Term Grad
                                    </p>
                                    <button className="btn btn-primary"> Go
                                    </button>
                                </div>
                            </Link>
                        </div>
                    </div>

                    <div className="wd-dashboard-course col"
                         style={{width: "270px"}}>
                        <div className="card rounded-3 overflow-hidden">
                            <Link
                                className="wd-dashboard-course-link text-decration-none text-dark"
                                to="/Kanbas/Courses/1234/Home">
                                <img src="/images/course8.jpg"
                                     width="100%"
                                     height={160}/>
                                <div className="card-body">
                                    <h5 className="wd-dashboard-course-title card-title">
                                        CS5009 Recitation for CS5008
                                    </h5>
                                    <p className="wd-dashboard-course-title card-text">
                                        Term: 202430_2 Spring 2024 Semester Full
                                        Term Grad
                                    </p>
                                    <button className="btn btn-primary"> Go
                                    </button>
                                </div>
                            </Link>
                        </div>
                    </div>

                    <div className="wd-dashboard-course col"
                         style={{width: "270px"}}>
                        <div className="card rounded-3 overflow-hidden">
                            <Link
                                className="wd-dashboard-course-link text-decration-none text-dark"
                                to="/Kanbas/Courses/1234/Home">
                                <img src="/images/course9.jpg"
                                     width="100%"
                                     height={160}/>
                                <div className="card-body">
                                    <h5 className="wd-dashboard-course-title card-title">
                                        Khoury College's Master's Orientation
                                    </h5>
                                    <p className="wd-dashboard-course-title card-text">
                                        Fall 2023 Master's Orientation
                                    </p>
                                    <button className="btn btn-primary"> Go
                                    </button>
                                </div>
                            </Link>
                        </div>
                    </div>

                    <div className="wd-dashboard-course col"
                         style={{width: "270px"}}>
                        <div className="card rounded-3 overflow-hidden">
                            <Link
                                className="wd-dashboard-course-link text-decration-none text-dark"
                                to="/Kanbas/Courses/1234/Home">
                                <img src="/images/course10.jpg"
                                     width="100%"
                                     height={160}/>
                                <div className="card-body">
                                    <h5 className="wd-dashboard-course-title card-title">
                                        Khoury Graduate - Career Prep & Co-op Processes
                                    </h5>
                                    <p className="wd-dashboard-course-title card-text">
                                        Career Prep Workshop
                                    </p>
                                    <button className="btn btn-primary"> Go
                                    </button>
                                </div>
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    );
}