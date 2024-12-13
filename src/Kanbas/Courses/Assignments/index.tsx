import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import AssignmentControls from "./AssignmentControls";
import {BsGripVertical} from "react-icons/bs";
import { IoMdArrowDropdown } from "react-icons/io";
import TitleControlButtons from "./TitleControlButtons";
import { MdOutlineAssignment } from "react-icons/md";
import GreenCheckmark from "../Modules/GreenCheckmark";
import { IoEllipsisVertical } from "react-icons/io5";
import { useSelector, useDispatch} from "react-redux";
import{setAssignment, addAssignment,deleteAssignment, updateAssignment} from "./reducer";
import * as db from "../../Database";
import {FaTrash} from "react-icons/fa";

import * as assignmentsClient from "./client";

interface Assignment {
    _id: string;
    title: string;
    description?: string;
    points: number;
    dueDate: string;
    availableFromDate: string;
    availableUntilDate: string;
    course: string;
}
export default function Assignments() {
    const { cid } = useParams();
    const[assignmentName, setAssignmentName] = useState("");
    const {assignments} = useSelector((state: any) => state.assignmentReducer);
    const userRole = useSelector((state: any) => state.accountReducer.currentUser?.role);
    const isFaculty = userRole === "FACULTY"; // Check if user has FACULTY role
    const dispatch = useDispatch();



    const createAssignmentForCourse = async () => {
        if (!cid || !assignmentName.trim()) {
            alert("Assignment title is required");
            return;
        }
        try {
            const newAssignment = {
                title: assignmentName.trim(),
                course: cid,
                points: 100,
                due_date: new Date().toISOString(),
                available_date: new Date().toISOString(),
                description: ""
            };
            const assignment = await assignmentsClient.createAssignment(cid, newAssignment);
            dispatch(addAssignment(assignment));
            setAssignmentName("");
        } catch (error) {
            console.error("Failed to create assignment:", error);
            alert("Failed to create assignment. Please check all required fields.");
        }
    };

    const removeAssignment = async (assignmentId: string) => {
        if (window.confirm("Are you sure you want to delete this assignment?")) {
            await assignmentsClient.deleteAssignment(assignmentId);
            dispatch(deleteAssignment(assignmentId));
        }
    };
    const saveAssignment = async (assignment: any) => {
        await assignmentsClient.updateAssignment(assignment);
        dispatch(updateAssignment(assignment));
    };

    const fetchAssignments = async () => {
        try {
            if (!cid) return;
            const fetchedAssignments = await assignmentsClient.findAssignmentsForCourse(cid);
            dispatch(setAssignment(fetchedAssignments));
        } catch (error) {
            console.error("Failed to fetch assignments:", error);
        }
    };

    useEffect(() => {
        fetchAssignments();
    }, [cid]);

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString();
    };

    {/*const assignments = db.assignments.filter(assignment => assignment.course === cid);*/}

    return (
        <div>
            <AssignmentControls/><br/><br/>
            <ul id="wd-assignment-list" className="list-group rounded-0">
                <li className="wd-assignment-title list-group-item p-0 mb-5 fs-5 border-light">
                    <div className="wd-title p-3 ps-2 bg-light">
                        <BsGripVertical className="me-2 fs-3"/>

                        <IoMdArrowDropdown className="me-2 fs-3"/>
                        ASSIGNMENTS
                        <TitleControlButtons/>
                    </div>

                    {assignments.map((assignment:any) => (
                        <li id={assignment._id}
                            className="wd-assignment-list-item list-group-item p-3 ps-1">
                            <div className="d-flex align-items-center">
                                <div
                                    className="d-flex align-items-center border-start ps-3 mb-4"
                                    style={{borderWidth: "4px"}}>
                                    <div className="d-flex align-items-center me-3">
                                        <BsGripVertical className="me-2 fs-4" />
                                        <MdOutlineAssignment className="fs-4 text-success" />
                                    </div>

                                    {/* Main Content */}
                                    <div className="flex-grow-1">
                                        <Link className="wd-assignment-link fs-5 mb-1"
                                              to={`/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}>
                                            {assignment.title}
                                        </Link>
                                        <div className="d-flex flex-wrap">
                                            <div className="text-danger me-2">Multiple Modules</div>
                                            <div className="text-muted me-2">|</div>
                                            <div className="fw-bold text-muted me-2">Not available until</div>
                                            <div className="text-muted me-2">{assignment.available_date ? (
                                                `${new Date(assignment.available_date).toLocaleDateString('en-US', { month: 'long', day: 'numeric' })} at ${new Date(assignment.available_date).toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })}`
                                            ) : (
                                                "2024-05-13T23:59"
                                            )}</div>
                                            <div className="text-muted me-2">|</div>
                                            <div className="fw-bold text-muted me-2">Due</div>
                                            <div className="text-muted me-2">{assignment.due_date ? (
                                                `${new Date(assignment.due_date).toLocaleDateString('en-US', { month: 'long', day: 'numeric' })} at ${new Date(assignment.due_date).toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })}`
                                            ) : (
                                                "2024-05-18T23:59"
                                            )}</div>
                                            <div className="text-muted me-2">|</div>
                                            <div className="text-muted">{assignment.points} pts</div>
                                        </div>
                                    </div>

                                    <div className="d-flex float-end">
                                        <GreenCheckmark />
                                        <IoEllipsisVertical className="fs-4 text-muted" />
                                        {isFaculty && (
                                            <FaTrash
                                                className="text-danger me-2 mb-1"
                                                onClick={() => removeAssignment(assignment._id)}
                                            />
                                        )}
                                    </div>
                                </div>
                            </div>
                        </li>
                    ))}

                </li>
            </ul>
        </div>


    );
}
