import {FaPlus} from "react-icons/fa6";
import {FaSearch, FaTrash} from "react-icons/fa";
import React from "react";
import {useNavigate, useParams} from "react-router-dom";
import {useDispatch} from "react-redux";
import {addAssignment} from "./reducer";

export default function AssignmentControls() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { cid } = useParams(); // Get the course ID (cid) from the route parameters

    // Handle new assignment creation
    const handleAddAssignment = () => {
        // Generate a unique aid for the new assignment
        const newAid = Date.now().toString();

        // Dispatch addAssignment with the necessary fields, including the course ID (cid)
        dispatch(addAssignment({
            _id: newAid,
            title: "New Assignment",
            course: cid, // Pass the cid as the course property
            description: "New Assignment Description",
            points: 100,
            due_date: "",
            available_date: "",
            until_date: ""
        }));
        console.log("Navigating to AssignmentEditor"); // Debugging log
        // Navigate to the AssignmentEditor with the new aid
        navigate(`/Kanbas/Courses/${cid}/Assignments/${newAid}`);
    }
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
                />
            </div>
            <button id="wd-group-btn"
                    className="btn btn-lg btn-secondary me-1 float-end">
                <FaPlus className="me-2 fs-5"/>
                Group
            </button>
            <button id="wd-add-assignment-btn"
                    className="btn btn-lg btn-danger me-1 float-end"
                    onClick = {() => {
                        console.log("Assignment button clicked"); // Debugging log
                        handleAddAssignment();
                    }}>
                <FaPlus className="me-2 fs-5"/>
                Assignment
            </button>


        </div>
        </div>
    );
}