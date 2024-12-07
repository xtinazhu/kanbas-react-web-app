import {FaPlus} from "react-icons/fa6";
import {FaSearch} from "react-icons/fa";
import React, {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {useDispatch} from "react-redux";
import { createAssignmentForCourse, findAssignmentsForCourse } from "../client";
import {addAssignment} from "./reducer";
import * as assignmentClient from "./client"


export default function AssignmentControls() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { cid } = useParams<{ cid: string }>(); // Course ID from route parameters

    const [assignments, setAssignments] = useState<any[]>([]); // State to manage fetched assignments
    const [searchTerm, setSearchTerm] = useState<string>(""); // State for search functionality

    // Fetch assignments for the current course
    const fetchAssignments = async () => {
        try {
            if (!cid) {
                console.error("Course ID (cid) is undefined.");
                return;
            }
            const assignmentsData = await findAssignmentsForCourse(cid);
            setAssignments(assignmentsData);
        } catch (error) {
            console.error("Error fetching assignments:", error);
        }
    };

    useEffect(() => {
        fetchAssignments(); // Fetch assignments on component mount
    }, [cid]);

    // Handle new assignment creation
    const handleAddAssignment = async () => {
        try {
            if (!cid) {
                console.error("Course ID (cid) is undefined. Cannot create assignment.");
                return;
            }

            const newAid = Date.now().toString(); // Generate a unique ID for the assignment
            const newAssignment = {
                _id: newAid,
                title: "New Assignment",
                course: cid,
                description: "New Assignment Description",
                points: 100,
                due_date: "",
                available_date: "",
                until_date: "",
            };

            // Create the new assignment in the backend
            const createdAssignment = await createAssignmentForCourse(cid, newAssignment);

            // Update Redux store
            dispatch(addAssignment(createdAssignment));

            // Navigate to the new assignment editor
            navigate(`/Kanbas/Courses/${cid}/Assignments/${createdAssignment._id}`);
        } catch (error) {
            console.error("Error creating assignment:", error);
        }
    };
    return (
        <div id="wd-assignments" className="text-nowrap">
            <div className="d-flex justify-content-between align-items-center mb-3">
            <div className="input-group me-1 float-end">
                    <span className="input-group-text">
                        <FaSearch/>
                    </span>
                <input
                    id="wd-search-assignment"
                    type="text"
                    className="form-control"
                    placeholder="Search for Assignments"
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
            <button id="wd-group-btn"
                    className="btn btn-lg btn-secondary me-1 float-end">
                <FaPlus className="me-2 fs-5"/>
                Group
            </button>
            <button id="wd-add-assignment-btn"
                    className="btn btn-lg btn-danger me-1 float-end"
                    onClick={handleAddAssignment}>
                <FaPlus className="me-2 fs-5"/>
                Assignment
            </button>


        </div>
        </div>
    );
}