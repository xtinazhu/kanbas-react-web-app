export default function Assignments() {
    return (
        <div id="wd-assignments">
            <input id="wd-search-assignment"
                   placeholder="Search for Assignments" />
            <button id="wd-add-assignment-group">+ Group</button>
            <button id="wd-add-assignment">+ Assignment</button>
            <h3 id="wd-assignments-title">
                ASSIGNMENTS 40% of Total <button>+</button>
            </h3>

            <ul id="wd-assignment-list">
                <li className="wd-assignment-list-item">
                    <a className="wd-assignment-link"
                       href="#/Kanbas/Courses/1234/Assignments/123">
                        A1 - ENV + HTML
                    </a>
                    <table id="wd-assignment-table">
                        <tr>
                            <td id="wd-assigned-module">Multiple Modules |</td>
                            <td><h4>Not available until </h4></td>
                            <td id="wd-availble-time">May 6 at 12:00am |</td>
                            <td><h4>Due</h4></td>
                            <td id="wd-due-date">May 13 at 11:59pm |</td>
                            <td id="wd-points">100 pts</td>
                        </tr>
                    </table>
                </li>


                <li className="wd-assignment-list-item">
                    <a className="wd-assignment-link"
                       href="#/Kanbas/Courses/1234/Assignments/123">
                        A2 - CSS + BOOTSTRAP
                    </a>
                    <table id="wd-assignment-table">
                        <tr>
                            <td id="wd-assigned-module">Multiple Modules |
                            </td>
                            <td><h4>Not available until </h4></td>
                            <td id="wd-availble-time">May 13 at 12:00am |
                            </td>
                            <td><h4>Due</h4></td>
                            <td id="wd-due-date">May 29 at 11:59pm |</td>
                            <td id="wd-points">100 pts</td>
                        </tr>
                    </table>
                </li>

                <li className="wd-assignment-list-item">
                    <a className="wd-assignment-link"
                       href="#/Kanbas/Courses/1234/Assignments/123">
                        A3 - JAVASCRIPT + REACT
                    </a>
                    <table id="wd-assignment-table">
                        <tr>
                            <td id="wd-assigned-module">Multiple Modules |
                            </td>
                            <td><h4>Not available until </h4></td>
                            <td id="wd-availble-time">May 20 at 12:00am |
                            </td>
                            <td><h4>Due</h4></td>
                            <td id="wd-due-date">May 27 at 11:59pm |</td>
                            <td id="wd-points">100 pts</td>
                        </tr>
                    </table>
                </li>

            </ul>
        </div>
    );
}
