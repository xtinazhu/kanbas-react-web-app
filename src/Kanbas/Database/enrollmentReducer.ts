import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the structure for enrollment
interface Enrollment {
    _id: string;
    user: string;
    course: string;
}

// Initialize enrollments from localStorage
const initialEnrollments: Enrollment[] = JSON.parse(localStorage.getItem("enrollments") || "[]");

const enrollmentsSlice = createSlice({
    name: "enrollments",
    initialState: initialEnrollments,
    reducers: {
        addEnrollment: (state, action: PayloadAction<{ userId: string; courseId: string }>) => {
            const newEnrollment: Enrollment = {
                _id: new Date().getTime().toString(),
                user: action.payload.userId,
                course: action.payload.courseId,
            };
            state.push(newEnrollment);
            localStorage.setItem("enrollments", JSON.stringify(state));
        },
        removeEnrollment: (state, action: PayloadAction<{ userId: string; courseId: string }>) => {
            const updatedState = state.filter(
                (enrollment) =>
                    !(enrollment.user === action.payload.userId && enrollment.course === action.payload.courseId)
            );
            localStorage.setItem("enrollments", JSON.stringify(updatedState));
            return updatedState;
        },
        loadEnrollmentsFromStorage: (state) => {
            const savedEnrollments = JSON.parse(localStorage.getItem("enrollments") || "[]");
            return savedEnrollments;
        },
    },
});

export const { addEnrollment, removeEnrollment, loadEnrollmentsFromStorage } = enrollmentsSlice.actions;
export default enrollmentsSlice.reducer;