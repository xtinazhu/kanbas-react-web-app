export default function AssignmentEditor() {
    return (
        <div id="wd-assignments-editor">
            <label htmlFor="wd-name">Assignment Name</label>
            <input id="wd-name" value="A1 - ENV + HTML"/><br/><br/>
            <textarea id="wd-description"> The assignment is available online Submit a link to the landing page of your Web application running on Netlify. The landing page should include the following: Your full Page and section Links to each of the lab assignmentsLink to the Kanbas application. Links to all relevant source code repositories. The Kanbas application should include a link to navigate back to the landing page.</textarea>
            <br/>

            <table>
                <tbody>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-points">Points</label>
                    </td>
                    <td>
                        <input id="wd-points" value={100}/>
                    </td>
                </tr>
                {/* Complete on your own */}
                <br/>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-assignment-group"> Assignment
                            Group </label><br/>
                    </td>
                    <td>
                        <select id="wd-select-one-assignment">
                            <option value="ASSIGNMENTS">ASSIGNMENTS</option>
                            <option value="A1">A1</option>
                            <option value="A2">A2</option>
                        </select>
                    </td>
                </tr>

                <br/>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-grade-measurement"> Display Grade
                            as </label><br/>
                    </td>
                    <td>
                        <select id="wd-select-grade-measurement">
                            <option value="PERCENTAGE">Percentage</option>
                            <option value="NUMBER">Number</option>
                        </select>
                    </td>
                </tr>

                <br/>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-submission-type"> Submission
                            Type </label><br/>
                    </td>
                    <td>
                        <select id="wd-select-submission-type">
                            <option value="ONLINE">Online</option>
                            <option value="INPERSON">In Person</option>
                        </select>
                    </td>
                </tr>

                <br/>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-submission-type"> Online Entry
                            Options </label>
                    </td>
                </tr>
                <tr>
                    <input type="checkbox" name="check-entry-options"
                           id="wd-chkbox-text-entry"/>

                    <label htmlFor="wd-chkbox-text-etnry">Text
                        Entry</label><br/>

                    <input type="checkbox" name="check-entry-options"
                           id="wd-chkbox-url"/>
                    <label htmlFor="wd-chkbox-url">Website URL</label><br/>

                    <input type="checkbox" name="check-entry-options"
                           id="wd-chkbox-media-recordings"/>
                    <label htmlFor="wd-chkbox-media-recordings">Media
                        Recordings</label><br/>

                    <input type="checkbox" name="check-entry-options"
                           id="wd-chkbox-student-annotation"/>
                    <label htmlFor="wd-chkbox-student-annotation">Student
                        Annotation</label><br/>

                    <input type="checkbox" name="check-entry-options"
                           id="wd-chkbox-file-uploads"/>
                    <label htmlFor="wd-chkbox-file-uploads">File
                        Uploads</label><br/>
                </tr>

                <br/>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-assign-to"> Assign to </label><br/>
                    </td>
                    <td>
                        <input type="text" id="wd-assign-to" value="Everyone"/>
                    </td>
                </tr>

                <br/>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-due-date"> Due </label><br/>
                    </td>
                    <td>
                        <input type="date" id="wd-due-date" value="2024-05-13"/>
                    </td>
                </tr>


                <br/>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-available-from"> Available
                            from </label><br/>
                        <input type="date" id="wd-available-from"
                               value="2024-05-06"/>
                    </td>
                    <td align="right" valign="top">
                        <label htmlFor="wd-until"> Until </label><br/>
                        <input type="date" id="wd-until"
                               value="2004-05-20"/>
                    </td>

                </tr>
                </tbody>
                <hr />
                <tfoot>
                    <td align="right" valign="top">
                        <button id="wd-cancel-button">Cancel</button>
                        <button id="wd-save-button">Save</button>
                    </td>
                </tfoot>

            </table>
        </div>
    );
}
