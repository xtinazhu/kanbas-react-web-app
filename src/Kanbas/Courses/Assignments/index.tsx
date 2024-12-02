import AssignmentControls from "./AssignmentControls";
import {BsGripVertical} from "react-icons/bs";
import { IoMdArrowDropdown } from "react-icons/io";
import TitleControlButtons from "./TitleControlButtons";
import { MdOutlineAssignment } from "react-icons/md";
import GreenCheckmark from "../Modules/GreenCheckmark";
import { IoEllipsisVertical } from "react-icons/io5";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch} from "react-redux";
import{setAssignment, addAssignment,deleteAssignment, updateAssignment} from "./reducer";
import * as db from "../../Database";
import {FaTrash} from "react-icons/fa";
import React, { useEffect, useState } from "react";
import * as courseClient from "../client";
import * as assignmentsClient from "./client";


export default function Assignments() {
    const { cid } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const[assignmentName, setAssignmentName] = useState("");
    const {assignments} = useSelector((state: any) => state.assignmentReducer);
    const userRole = useSelector((state: any) => state.accountReducer.currentUser?.role);
    const isFaculty = userRole === "FACULTY"; // Check if user has FACULTY role



    const fetchAssignments = async () => {
        if (!cid) return;
        const data = await assignmentsClient.findAssignmentsForCourse(cid);
        dispatch(setAssignment(data));
    };

    const createAssignmentForCourse = async () => {
        if (!cid) return;
        const newAssignment = {
            title: assignmentName,
            course: cid,
            points: 100,
            due_date: new Date().toISOString(),
            available_date: new Date().toISOString(),
        };
        const assignment = await assignmentsClient.createAssignmentForCourse(cid, newAssignment);
        dispatch(addAssignment(assignment));
        setAssignmentName("");
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

    useEffect(() => {
        fetchAssignments();
    }, [cid]);



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
