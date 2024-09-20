import { Link } from "react-router-dom";
export default function Dashboard() {
    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
            <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />

            <div id="wd-dashboard-courses">
                <div className="wd-dashboard-course">
                    <img src="/images/reactjs.jpg" width={200}/>
                    <div>
                        <Link className="wd-dashboard-course-link"
                              to="/Kanbas/Courses/1234/Home">
                            CS5610 React JS
                        </Link>
                        <p className="wd-dashboard-course-title">
                            Full Stack software developer
                        </p>
                        <Link to="/Kanbas/Courses/1234/Home"> Go </Link>
                    </div>
                </div>

                <div className="wd-dashboard-course">
                    <img src="/images/reactjs.jpg" width={200}/>
                    <div>
                        <Link className="wd-dashboard-course-link"
                              to="/Kanbas/Courses/1234/Home">
                            CS5610 Web Development
                        </Link>
                        <p className="wd-dashboard-course-title">
                            Term: 202510_2 Fall 2024 Semester Full Term Grad
                        </p>
                        <Link to="/Kanbas/Courses/1234/Home"> Go </Link>
                    </div>
                </div>

                <div className="wd-dashboard-course">
                    <img src="/images/reactjs.jpg" width={200}/>
                    <div>
                        <Link className="wd-dashboard-course-link"
                              to="/Kanbas/Courses/1234/Home">
                            CS5800 Algorithm
                        </Link>
                        <p className="wd-dashboard-course-title">
                            Term: 202510_2 Fall 2024 Semester Full Term Grad
                        </p>
                        <Link to="/Kanbas/Courses/1234/Home"> Go </Link>
                    </div>
                </div>

                <div className="wd-dashboard-course">
                    <img src="/images/reactjs.jpg" width={200}/>
                    <div>
                        <Link className="wd-dashboard-course-link"
                              to="/Kanbas/Courses/1234/Home">
                            CS5002 Discrete Structures
                        </Link>
                        <p className="wd-dashboard-course-title">
                            Term: 202410_2 Fall 2023 Semester Full Term Grad
                        </p>
                        <Link to="/Kanbas/Courses/1234/Home"> Go </Link>
                    </div>
                </div>

                <div className="wd-dashboard-course">
                    <img src="/images/reactjs.jpg" width={200}/>
                    <div>
                        <Link className="wd-dashboard-course-link"
                              to="/Kanbas/Courses/1234/Home">
                            CS5008 Data Structures
                        </Link>
                        <p className="wd-dashboard-course-title">
                            Term: 202430_2 Spring 2024 Semester Full Term Grad
                        </p>
                        <Link to="/Kanbas/Courses/1234/Home"> Go </Link>
                    </div>
                </div>

                <div className="wd-dashboard-course">
                    <img src="/images/reactjs.jpg" width={200}/>
                    <div>
                        <Link className="wd-dashboard-course-link"
                              to="/Kanbas/Courses/1234/Home">
                            CS5004 Object-Oriented Design
                        </Link>
                        <p className="wd-dashboard-course-title">
                            Term: 202430_2 Spring 2024 Semester Full Term Grad
                        </p>
                        <Link to="/Kanbas/Courses/1234/Home"> Go </Link>
                    </div>
                </div>

                <div className="wd-dashboard-course">
                    <img src="/images/reactjs.jpg" width={200}/>
                    <div>
                        <Link className="wd-dashboard-course-link"
                              to="/Kanbas/Courses/1234/Home">
                            CS5005 Recitation for CS5004
                        </Link>
                        <p className="wd-dashboard-course-title">
                            Term: 202430_2 Spring 2024 Semester Full Term Grad
                        </p>
                        <Link to="/Kanbas/Courses/1234/Home"> Go </Link>
                    </div>
                </div>

                <div className="wd-dashboard-course">
                    <img src="/images/reactjs.jpg" width={200}/>
                    <div>
                        <Link className="wd-dashboard-course-link"
                              to="/Kanbas/Courses/1234/Home">
                            CS5009 Recitation for CS5008
                        </Link>
                        <p className="wd-dashboard-course-title">
                            Term: 202430_2 Spring 2024 Semester Full Term Grad
                        </p>
                        <Link to="/Kanbas/Courses/1234/Home"> Go </Link>
                    </div>
                </div>

                <div className="wd-dashboard-course">
                    <img src="/images/reactjs.jpg" width={200}/>
                    <div>
                        <Link className="wd-dashboard-course-link"
                              to="/Kanbas/Courses/1234/Home">
                            Khoury College's Master's Orientation
                        </Link>
                        <p className="wd-dashboard-course-title">
                            Fall 2023 Master's Orientation
                        </p>
                        <Link to="/Kanbas/Courses/1234/Home"> Go </Link>
                    </div>
                </div>

                <div className="wd-dashboard-course">
                    <img src="/images/reactjs.jpg" width={200}/>
                    <div>
                        <Link className="wd-dashboard-course-link"
                              to="/Kanbas/Courses/1234/Home">
                            Khoury Graduate - Career Prep & Co-op Processes
                        </Link>
                        <p className="wd-dashboard-course-title">
                            Career Prep Workshop
                        </p>
                        <Link to="/Kanbas/Courses/1234/Home"> Go </Link>
                    </div>
                </div>

            </div>
        </div>
    );
}