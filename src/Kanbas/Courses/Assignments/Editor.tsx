import {FaCalendarAlt} from "react-icons/fa";
import React from "react";
import {useParams, useNavigate} from "react-router-dom";
import * as db from "../../Database";

export default function AssignmentEditor() {
    const { cid, aid } = useParams();
    const navigate = useNavigate();
    const assignments = db.assignments.find((assignment)=> assignment._id === aid);
    // If the assignment is not found, return null to render nothing
    if (!assignments) {
        return null;
    }

    return (
        <div id="wd-assignments-editor" className="me-4">
            <form>
                <div className="form-group">
                    <label htmlFor="wd-name" className="mb-3">Assignment Name</label>
                    <input id="wd-name" type="text"
                           className="form-control mb-3"
                           defaultValue={assignments.title}/>
                    <div
                        id="wd-description"
                        className="form-control mb-3 styled-textarea"
                        contentEditable="true"
                    >

                        <p>The assignment is <span className="text-danger">available online</span>
                        </p>
                        <p style={{whiteSpace: 'pre-line'}}>
                            {assignments.description}
                        </p>
                        {/*
                        </p>
                        <p>Submit a link to the landing page of your Web
                            application running on.</p>
                        <p>The landing page should include the following:</p>
                        <ul>
                            <li>Your full name and section</li>
                            <li>Links to each of the lab assignments</li>
                            <li>Link to the application
                            </li>
                            <li>Links to all relevant source code repositories
                            </li>
                        </ul>
                        <p>The application should include a link to navigate
                            back to the landing page.
                        </p>
                        */}
                    </div>
                </div>

                <div className="form-group mb-3 ">
                    <div className="row align-items-end">
                        <div className="col-auto text-end">
                            <label htmlFor="points"
                                   className="form-label ms-5" style={{
                                textAlign: "right",
                                display: "block",
                                width: "100px"
                            }}>Points</label>
                        </div>
                        <div className="col justify-content-start">
                            <input
                                type="number"
                                className="form-control"
                                id="points"
                                defaultValue={assignments.points}
                            />
                        </div>
                    </div>
                </div>


                <div className="form-group mb-3 ">
                    <div className="row align-items-end">
                        <div className="col-auto text-end">
                            <label htmlFor="wd-assignment-group"
                                   className="form-label ms-3">Assignment
                                Group</label>
                        </div>
                        <div className="col justify-content-start">
                            <select className="form-select"
                                    aria-label="Default select example">
                                <option selected>ASSIGNMENTS</option>
                                <option value="1">A1</option>
                                <option value="2">A2</option>
                                <option value="3">A3</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className="form-group mb-3 ">
                    <div className="row align-items-end">
                        <div className="col-auto text-end">
                            <label htmlFor="wd-assignment-group"
                                   className="form-label ms-3">Display Grade
                                as</label>
                        </div>
                        <div className="col justify-content-start">
                            <select className="form-select"
                                    aria-label="Default select example">
                                <option selected>Percentage</option>
                                <option value="1">Decimal</option>
                                <option value="2">Fraction</option>
                            </select>
                        </div>
                    </div>
                </div>

                <fieldset className="row ms-5 mb-3">
                    <legend
                        className="col-form-label col-sm-2 pt-0 text-end"> Submission
                        Type
                    </legend>

                    <div className="col-sm-10 border border rounded p-3">
                        <div className="col justify-content-start mb-3">
                            <select className="form-select"
                                    aria-label="Default select example">
                                <option selected>Online</option>
                                <option value="1">In Person</option>
                            </select>

                        </div>
                        <label className="form-check-label fw-bold fs-6">
                            Online Entry Options
                        </label>
                        <div className="form-check">
                            <input className="form-check-input"
                                   type="checkbox"
                                   name="gridCheckbox2" id="gridCheckbox2"
                                   value="option2"/>
                            <label className="form-check-label"
                                   htmlFor="flexCheckDefault">
                                Text Entry
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input"
                                   type="checkbox"
                                   name="gridCheckbox1" id="gridCheckbox1"
                                   value="option1" checked/>
                            <label className="form-check-label"
                                   htmlFor="flexCheckChecked">
                                Website URL
                            </label>
                        </div>

                        <div className="form-check">
                            <input className="form-check-input"
                                   type="checkbox"
                                   name="gridCheckbox2" id="gridCheckbox2"
                                   value="option2"/>
                            <label className="form-check-label"
                                   htmlFor="flexCheckDefault">
                                Media Recordings
                            </label>
                        </div>

                        <div className="form-check">
                            <input className="form-check-input"
                                   type="checkbox"
                                   name="gridCheckbox2" id="gridCheckbox2"
                                   value="option2"/>
                            <label className="form-check-label"
                                   htmlFor="flexCheckDefault">
                                Student Annotation
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input"
                                   type="checkbox"
                                   name="gridCheckbox2" id="gridCheckbox2"
                                   value="option2"/>
                            <label className="form-check-label"
                                   htmlFor="flexCheckDefault">
                                File Uploads
                            </label>
                        </div>
                    </div>
                </fieldset>

                <fieldset className="row ms-5 mb-3">
                    <legend
                        className="col-form-label col-sm-2 pt-0 text-end"> Assign
                    </legend>

                    <div className="col-sm-10 border border rounded p-3">
                        <div className="col justify-content-start mb-3">
                            <label className="form-check-label fw-bold fs-6">
                                Assign to
                            </label>
                            <select className="form-select"
                                    aria-label="Default select example">
                                <option selected>Online</option>
                                <option value="1">In Person</option>
                            </select>

                        </div>

                        <div className="mb-3">
                            <label htmlFor="due-date"
                                   className="form-label fw-bold">Due</label>
                            <div className="input-group">
                                <input
                                    type="datetime-local"
                                    id="due-date"
                                    className="form-control"
                                    defaultValue={assignments.due_date}
                                />
                                <span className="input-group-text bg-light">
                                    <FaCalendarAlt/>
                                </span>
                            </div>
                        </div>


                            <div className="d-flex">
                                <div className="col">
                                    <label htmlFor="available-from"
                                           className="form-label fw-bold">Available
                                        from</label>

                                    <div className="input-group">

                                        <input
                                            type="datetime-local"
                                            id="available-from"
                                            className="form-control"
                                            defaultValue={assignments.available_date}
                                        />
                                        <span
                                            className="input-group-text bg-light">
                                <FaCalendarAlt className="text-muted"/>
                                    </span>
                                    </div>
                                </div>

                                <div className="col">
                                    <label htmlFor="until"
                                           className="form-label fw-bold">Until</label>
                                    <div className="input-group">
                                        <input
                                            type="datetime-local"
                                            id="until"
                                            className="form-control"
                                            defaultValue= {assignments.until_date}

                                        />
                                        <span
                                            className="input-group-text bg-light">
                                <FaCalendarAlt className="text-muted"/>
                                        </span>
                                    </div>
                                </div>
                            </div>
                    </div>
                </fieldset>
            </form>

            <hr/>

            <div className="d-flex justify-content-end mt-4">
                <button
                    id="wd-cancel-button"
                    className="btn btn-light me-2"
                    onClick={() => navigate(`/Kanbas/Courses/${cid}/Assignments`)}
                >
                    Cancel
                </button>
                <button
                    id="wd-save-button"
                    className="btn btn-danger"
                    onClick={() => navigate(`/Kanbas/Courses/${cid}/Assignments`)}
                >
                    Save
                </button>

            </div>

        </div>

    );
}
