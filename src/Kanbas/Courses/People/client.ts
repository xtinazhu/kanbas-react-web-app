import axios from "axios";

const API_BASE = process.env.REACT_APP_REMOTE_SERVER;

// Fetch enrollments for a specific course
export const findEnrollmentsForCourse = async (courseId: string) => {
    const response = await axios.get(`${API_BASE}/api/courses/${courseId}/enrollments`);
    return response.data;
};

// Fetch all users for a course (enrolled users)
export const findUsersForCourse = async (courseId: string) => {
    const response = await axios.get(`${API_BASE}/api/courses/${courseId}/users`);
    return response.data;
};

// Enroll a user in a course
export const enrollUserInCourse = async (userId: string, courseId: string) => {
    const response = await axios.post(`${API_BASE}/api/enrollments`, {
        userId,
        courseId,
    });
    return response.data;
};

// Unenroll a user from a course
export const unenrollUserFromCourse = async (enrollmentId: string) => {
    const response = await axios.delete(`${API_BASE}/api/enrollments/${enrollmentId}`);
    return response.data;
};