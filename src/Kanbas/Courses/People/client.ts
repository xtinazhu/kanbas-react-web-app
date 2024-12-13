import axios from "axios";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const axiosWithCredentials = axios.create({ withCredentials: true });


// Fetch enrollments for a specific course
export const findEnrollmentsForCourse = async (courseId: string) => {
    const response = await axiosWithCredentials.get(`${REMOTE_SERVER}/api/enrollments`);
    return response.data;
};

// Fetch all users for a course (enrolled users)
export const findUsersForCourse = async (courseId: string) => {
    const response = await axiosWithCredentials.get(`${REMOTE_SERVER}/api/courses/${courseId}/users`);
    return response.data;
};

// Enroll a user in a course
export const enrollUserInCourse = async (userId: string, courseId: string) => {
    const response = await axiosWithCredentials.post(`${REMOTE_SERVER}/api/enrollments`, {
        userId,
        courseId,
    });
    return response.data;
};

// Unenroll a user from a course
export const unenrollUserFromCourse = async (enrollmentId: string) => {
    const response = await axiosWithCredentials.delete(`${REMOTE_SERVER}/api/enrollments/${enrollmentId}`);
    return response.data;
};