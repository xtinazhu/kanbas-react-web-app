import React, {useState, useEffect, ChangeEvent} from "react";
import {useParams, useNavigate} from "react-router-dom";
import * as db from "../../Database";
import { useDispatch, useSelector } from "react-redux";
import { updateAssignment, editAssignment, addAssignment } from "./reducer";
import axios from "axios";


export default function AssignmentEditor() {
    const { cid, aid } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    // Load assignment from Redux if `aid` is provided
    const existingAssignment = useSelector((state: any) =>
        state.assignmentReducer.assignments.find((assignment: any) => assignment._id === aid)
    );

    // Initialize form state with existing assignment data or default values
    const [formData, setFormData] = useState({
        id: existingAssignment?.id || new Date().getTime().toString(),
        title: existingAssignment?.title || "New Assignment",
        course: cid,
        description: existingAssignment?.description || "New Assignment Description",
        points: existingAssignment?.points ||100,
        due_date: existingAssignment?.due_date||"",
        available_date: existingAssignment?.available_date ||"",
        until_date: existingAssignment?.until_date ||"",
    });

    useEffect(() => {
        if (existingAssignment) {
            setFormData(existingAssignment); // Load data if editing
        }
    }, [existingAssignment]);

    // Update formData as inputs change
    const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement| HTMLSelectElement> ) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: name === 'points' ? Number(value) : value });
    };

    // Save assignment data to Redux
    const handleSave = async () => {
        let savedAssignment;
        if (aid) {
            savedAssignment = await axios.put(`/api/assignments/${aid}`, formData);
            dispatch(updateAssignment(savedAssignment.data)); // Update existing assignment
        } else {
            savedAssignment = await axios.post(`/api/assignments`, formData);
            dispatch(addAssignment(savedAssignment.data)); // Add new assignment if `aid` is not defined
        }
        navigate(`/Kanbas/Courses/${cid}/Assignments`);
    };

    // Cancel and navigate back without saving
    const handleCancel = () => {
        navigate(`/Kanbas/Courses/${cid}/Assignments`);
    };


    // Convert Date to HTML Date format
    const formatDateForInput = (date: string | Date) => {
        if (!date) return "";
        const d = new Date(date);
        return d.toISOString().split("T")[0];
    };

    return (
        <div id="wd-assignments-editor" className="me-4">

                <div className="form-group">
                    <label htmlFor="wd-title" className="mb-3">Assignment Name </label>
                    <input
                           id="wd-title"
                           type = "text"
                           className="form-control  mb-3"
                           defaultValue = {formData.title}
                           onChange={(e) => handleInputChange(e)}
                    />

                    <div className="form-group">
                        <label htmlFor="wd-description" className="mb-3">Description</label>
                        <textarea
                            id="wd-description"
                            name="description"
                            className="form-control mb-3"
                            value= {formData.description}
                            onChange={handleInputChange}
                            rows={10}
                        />
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
                                    defaultValue={formData.points}
                                    onChange={handleInputChange}
                                    min="0"
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

                    <div className="row ms-5 mb-3">
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
                                       value="option1" defaultChecked={true}/>
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
                    </div>

                    <div className="row ms-5 mb-3">
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
                                        type="date"
                                        id="due-date"
                                        className="form-control"
                                        defaultValue={formatDateForInput(formData.due_date)}
                                        onChange={handleInputChange}

                                    />
                                    {/*}= <span className="input-group-text bg-light">
                                    <FaCalendarAlt/>
                                </span> */}
                                </div>
                            </div>


                            <div className="d-flex">
                                <div className="col">
                                    <label htmlFor="available-from"
                                           className="form-label fw-bold">Available
                                        from</label>

                                    <div className="input-group">

                                        <input
                                            type="date"
                                            id="available-from"
                                            className="form-control"
                                            defaultValue={formatDateForInput(formData.available_date)}
                                            onChange={handleInputChange}
                                        />

                                    </div>
                                </div>

                                <div className="col">
                                    <label htmlFor="until"
                                           className="form-label fw-bold">Until</label>
                                    <div className="input-group">
                                        <input
                                            type="date"
                                            id="until"
                                            className="form-control"
                                            defaultValue={formatDateForInput(formData.until_date)}
                                            onChange={handleInputChange}

                                        />

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            <hr/>

            <div className="d-flex justify-content-end mt-4">
                <button
                    id="wd-cancel-button"
                    className="btn btn-light me-2"
                    onClick={handleCancel}
                >
                    Cancel
                </button>
                <button
                    id="wd-save-button"
                    className="btn btn-danger"
                    onClick={handleSave}
                >
                    Save
                </button>

            </div>

        </div>

    );
}