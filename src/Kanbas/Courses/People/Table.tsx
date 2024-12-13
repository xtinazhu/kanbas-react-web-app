import React, {useEffect, useState} from "react";
import { FaUserCircle } from "react-icons/fa";
import PeopleDetails from "./Details";
//import { useParams } from "react-router-dom";
// import * as db from "../../Database";
import users from "../../Database/users.json"
//import enrollments from "../../Database/enrollments.json"
import * as enrollmentsClient from "./client";
import {Link} from "react-router-dom";


export default function PeopleTable({ users = [] }: { users?: any[] }) {
   // const { cid } = useParams();
    //const [users, setUsers] = useState([]);
   // const [loading, setLoading] = useState(true);
    // Fetch users for the course
    {/*
    const fetchUsersForCourse = async () => {

        if (!cid) return;

        try {
            const data = await enrollmentsClient.findUsersForCourse(cid);
            setUsers(data);
        } catch (error) {
            console.error("Error fetching users for course:", error);
        } finally {
            setLoading(false);
        }
    };
    useEffect(() => {
        fetchUsersForCourse();
    }, [cid]);
    if (loading) {
        return <div>Loading...</div>;
    }
*/}

   // const { users, enrollments } = db;
    return (
        <div id="wd-people-table" >
            <PeopleDetails />
            <table className="table table-striped">
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Login ID</th>
                    <th>Section</th>
                    <th>Role</th>
                    <th>Last Activity</th>
                    <th>Total Activity</th>
                </tr>
                </thead>
                <tbody>
                {users.map((user: any) => (
                        <tr key={user._id}>
                    <td className="wd-full-name text-nowrap">
                        <Link to={`/Kanbas/Account/Users/${user._id}`} className="text-decoration-none">
                        <FaUserCircle className="me-2 fs-1 text-secondary"/>
                        <span className="wd-first-name me-1">{user.firstName}</span>
                        <span className="wd-last-name">{user.lastName}</span>
                        </Link>
                    </td>
                    <td className="wd-login-id">{user.loginId}</td>
                    <td className="wd-section">{user.section}</td>
                    <td className="wd-role">{user.role}</td>
                    <td className="wd-last-activity">{user.lastActivity}</td>
                    <td className="wd-total-activity">{user.totalActivity}</td>
                </tr> ))}
                {/* Add at least 3 more users such as Bruce Wayne, Steve Rogers, and Natasha Romanoff
                <tr>
                    <td className="wd-full-name text-nowrap">
                        <FaUserCircle className="me-2 fs-1 text-secondary"/>
                        <span className="wd-first-name">Bruce</span>{" "}
                        <span className="wd-last-name">Wayne</span>
                    </td>
                    <td className="wd-login-id">001234561S</td>
                    <td className="wd-section">S101</td>
                    <td className="wd-role">STUDENT</td>
                    <td className="wd-last-activity">2020-10-01</td>
                    <td className="wd-total-activity">10:21:32</td>
                </tr>

                <tr>
                    <td className="wd-full-name text-nowrap">
                        <FaUserCircle className="me-2 fs-1 text-secondary"/>
                        <span className="wd-first-name">Steve</span>{" "}
                        <span className="wd-last-name">Rogers</span>
                    </td>
                    <td className="wd-login-id">001234561S</td>
                    <td className="wd-section">S101</td>
                    <td className="wd-role">STUDENT</td>
                    <td className="wd-last-activity">2020-10-01</td>
                    <td className="wd-total-activity">10:21:32</td>
                </tr>

                <tr>
                    <td className="wd-full-name text-nowrap">
                        <FaUserCircle className="me-2 fs-1 text-secondary"/>
                        <span className="wd-first-name">Natasha</span>{" "}
                        <span className="wd-last-name">Romanoff</span>
                    </td>
                    <td className="wd-login-id">001234561S</td>
                    <td className="wd-section">S101</td>
                    <td className="wd-role">STUDENT</td>
                    <td className="wd-last-activity">2020-10-01</td>
                    <td className="wd-total-activity">10:21:32</td>
                </tr>
                */}
                </tbody>
            </table>
        </div>
    );
}
