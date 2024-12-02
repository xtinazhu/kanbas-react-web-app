import { createSlice } from "@reduxjs/toolkit";
import { assignments } from "../../Database";


const initialState = {
    assignments: [],
};
const assignmentSlice = createSlice({
    name: "assignments",
    initialState,
    reducers: {
        setAssignment: (state, action) => {
            state.assignments = action.payload;
        },
        addAssignment: (state, { payload: assignment }) => {
            const newAssignment: any = {
                _id: new Date().getTime().toString(),
                title: assignment.title,
                course: assignment.course,
                description: assignment.description,
                points: assignment.points,
                due_date: assignment.due_date,
                available_date: assignment.available_date,
                until_date: assignment.until_date,
            };
            state.assignments = [...state.assignments, newAssignment] as any;
        },
        deleteAssignment: (state, { payload: assignmentId }) => {
            state.assignments = state.assignments.filter(
                (m: any) => m._id !== assignmentId);
        },
        updateAssignment: (state, { payload:  updatedAssignment }) => {
            state.assignments = state.assignments.map((assignment:any) =>
                assignment._id === updatedAssignment._id ? updatedAssignment : assignment
            ) as any;
        },
        editAssignment: (state, { payload: assignmentId }) => {
            state.assignments = state.assignments.map((m: any) =>
                m._id === assignmentId ? { ...m, editing: true } : m
            ) as any;
        },
    },
});
export const { setAssignment, addAssignment, deleteAssignment, updateAssignment, editAssignment } =
    assignmentSlice.actions;
export default assignmentSlice.reducer;