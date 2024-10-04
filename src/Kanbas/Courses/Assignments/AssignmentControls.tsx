import {FaPlus} from "react-icons/fa6";
import {FaSearch} from "react-icons/fa";
import React from "react";

export default function AssignmentControls() {
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
                    className="btn btn-lg btn-danger me-1 float-end">
                <FaPlus className="me-2 fs-5"/>
                Assignment
            </button>
        </div>
        </div>
    );
}