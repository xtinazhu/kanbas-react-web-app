import AssignmentControls from "./AssignmentControls";
import React from "react";
import {BsGripVertical} from "react-icons/bs";
import { IoMdArrowDropdown } from "react-icons/io";
import TitleControlButtons from "./TitleControlButtons";
import { MdOutlineAssignment } from "react-icons/md";
import GreenCheckmark from "../Modules/GreenCheckmark";
import { IoEllipsisVertical } from "react-icons/io5";
import {Link} from "react-router-dom";
export default function Assignments() {
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


                    <li className="wd-assignment-list-item list-group-item p-3 ps-1">
                        {/* Flexbox container for icons and text */}
                        <div className="d-flex align-items-center">
                            <div
                                className="d-flex align-items-center border-start ps-3 mb-4"
                                style={{borderWidth: "4px"}}>
                                {/* Left Icons */}
                                <div className="d-flex align-items-center me-3">
                                    <BsGripVertical className="me-2 fs-4"/>
                                    <MdOutlineAssignment
                                        className="fs-4 text-success"/>
                                </div>

                                {/* Main Content */}
                                <div className="flex-grow-1">
                                    {/* Assignment Title */}

                                    <a className="wd-assignment-link fs-5 mb-1"
                                       href="#/Kanbas/Courses/1234/Assignments/123">
                                        A1
                                    </a>

                                    {/* Assignment Details */}
                                    <div className="d-flex flex-wrap">
                                        <div
                                            className="text-danger me-2">Multiple
                                            Modules
                                        </div>
                                        <div className="text-muted me-2">|</div>
                                        <div
                                            className="fw-bold text-muted me-2">Not
                                            available until
                                        </div>
                                        <div className="text-muted me-2">May 6
                                            at
                                            12:00am
                                        </div>
                                        <div className="text-muted me-2">|</div>
                                        <div
                                            className="fw-bold text-muted me-2">Due
                                        </div>
                                        <div className="text-muted me-2">May 13
                                            at
                                            11:59pm
                                        </div>
                                        <div className="text-muted me-2">|</div>
                                        <div className="text-muted">100 pts
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="d-flex float-end">
                                <GreenCheckmark/>
                                    <IoEllipsisVertical
                                        className="fs-4 text-muted"/>
                                </div>
                            </div>
                        </div>
                    </li>


                    <li className="wd-assignment-list-item list-group-item p-3 ps-1">
                        {/* Flexbox container for icons and text */}
                        <div className="d-flex align-items-center">
                            <div
                                className="d-flex align-items-center border-start ps-3 mb-4"
                                style={{borderWidth: "4px"}}>
                                {/* Left Icons */}
                                <div className="d-flex align-items-center me-3">
                                    <BsGripVertical className="me-2 fs-4"/>
                                    <MdOutlineAssignment
                                        className="fs-4 text-success"/>
                                </div>

                                {/* Main Content */}
                                <div className="flex-grow-1">
                                    {/* Assignment Title */}
                                    <a className="wd-assignment-link fs-5 mb-1"
                                       href="#/Kanbas/Courses/1234/Assignments/123">
                                        A2
                                    </a>

                                    {/* Assignment Details */}
                                    <div className="d-flex flex-wrap">
                                        <div
                                            className="text-danger me-2">Multiple
                                            Modules
                                        </div>
                                        <div className="text-muted me-2">|</div>
                                        <div
                                            className="fw-bold text-muted me-2">Not
                                            available until
                                        </div>
                                        <div className="text-muted me-2">May 6
                                            at
                                            12:00am
                                        </div>
                                        <div className="text-muted me-2">|</div>
                                        <div
                                            className="fw-bold text-muted me-2">Due
                                        </div>
                                        <div className="text-muted me-2">May 13
                                            at
                                            11:59pm
                                        </div>
                                        <div className="text-muted me-2">|</div>
                                        <div className="text-muted">100 pts
                                        </div>
                                    </div>

                                </div>
                                <div
                                    className="d-flex float-end">
                                    <GreenCheckmark/>
                                    <IoEllipsisVertical
                                        className="fs-4 text-muted"/>
                                </div>
                            </div>
                        </div>
                    </li>


                    <li className="wd-assignment-list-item list-group-item p-3 ps-1">
                        {/* Flexbox container for icons and text */}
                        <div className="d-flex align-items-center">
                            <div
                                className="d-flex align-items-center border-start ps-3 mb-4"
                                style={{borderWidth: "4px"}}>
                                {/* Left Icons */}
                                <div className="d-flex align-items-center me-3">
                                    <BsGripVertical className="me-2 fs-4"/>
                                    <MdOutlineAssignment
                                        className="fs-4 text-success"/>
                                </div>

                                {/* Main Content */}
                                <div className="flex-grow-1">
                                    {/* Assignment Title */}
                                    <a className="wd-assignment-link fs-5 mb-1"
                                       href="#/Kanbas/Courses/1234/Assignments/123">
                                        A3
                                    </a>

                                    {/* Assignment Details */}
                                    <div className="d-flex flex-wrap">
                                        <div
                                            className="text-danger me-2">Multiple
                                            Modules
                                        </div>
                                        <div className="text-muted me-2">|</div>
                                        <div
                                            className="fw-bold text-muted me-2">Not
                                            available until
                                        </div>
                                        <div className="text-muted me-2">September 6
                                            at
                                            12:00am
                                        </div>
                                        <div className="text-muted me-2">|</div>
                                        <div
                                            className="fw-bold text-muted me-2">Due
                                        </div>
                                        <div className="text-muted me-2">September 13
                                            at
                                            11:59pm
                                        </div>
                                        <div className="text-muted me-2">|</div>
                                        <div className="text-muted">100 pts
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="d-flex float-end">
                                    <GreenCheckmark/>
                                    <IoEllipsisVertical
                                        className="fs-4 text-muted"/>
                                </div>
                            </div>
                        </div>
                    </li>



                </li>
            </ul>
        </div>


    );
}
