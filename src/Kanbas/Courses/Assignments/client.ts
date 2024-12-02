import axios from "axios";

const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER; // Base URL for the server
const ASSIGNMENTS_API = `${REMOTE_SERVER}/api/assignments`;

// Get all assignments
export const findAllAssignments = async () => {
    const response = await axios.get(`${ASSIGNMENTS_API}`);
    return response.data;
};

// Get assignments for a specific course
export const findAssignmentsForCourse = async (courseId: string) => {
    const response = await axios.get(`${REMOTE_SERVER}/api/courses/${courseId}/assignments`);
    return response.data;
};

// Get an assignment by ID
export const findAssignmentById = async (assignmentId: string) => {
    const response = await axios.get(`${ASSIGNMENTS_API}/${assignmentId}`);
    return response.data;
};

// Create a new assignment for a course
export const createAssignmentForCourse = async (courseId: string, assignment: any) => {
    const response = await axios.post(`${REMOTE_SERVER}/api/courses/${courseId}/assignments`, assignment);
    return response.data;
};

// Update an existing assignment
export const updateAssignment = async (assignment: any) => {
    const response = await axios.put(`${ASSIGNMENTS_API}/${assignment._id}`, assignment);
    return response.data;
};

// Delete an assignment
export const deleteAssignment = async (assignmentId: string) => {
    const response = await axios.delete(`${ASSIGNMENTS_API}/${assignmentId}`);
    return response.data;
};
