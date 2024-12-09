import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    quizzes: [],
};
const quizzesSlice = createSlice({
    name: "quizzes",
    initialState,
    reducers: {
        setQuizzes: (state, action) => {
            state.quizzes = action.payload;
        },
        addQuizzes: (state, { payload: quiz }) => {
            const newAssignment: any = {
                _id: new Date().getTime().toString(),
                title: quiz.title,
                course: quiz.course,
                assignment: quiz.assignment,
                availability: quiz.availability,
                description: quiz.description,
                points: quiz.points,
                due_date: quiz.due_date,
                number_of_questions: quiz.number_of_questions,
                score: quiz.score
            };
            state.quizzes = [...state.quizzes, newAssignment] as any;
        },
        deleteQuizzes: (state, { payload: quizzesId }) => {
            state.quizzes = state.quizzes.filter(
                (m: any) => m._id !== quizzesId);
        },
        updateQuizzes: (state, { payload:  updatedQuizzes }) => {
            state.quizzes = state.quizzes.map((assignment:any) =>
                assignment._id === updatedQuizzes._id ? updatedQuizzes : assignment
            ) as any;
        },
        editQuizzes: (state, { payload: quizzesId }) => {
            state.quizzes = state.quizzes.map((m: any) =>
                m._id === quizzesId ? { ...m, editing: true } : m
            ) as any;
        },
    },
});
export const { setQuizzes, addQuizzes, deleteQuizzes, updateQuizzes, editQuizzes } =
 quizzesSlice.actions;
export default quizzesSlice.reducer;