import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getTeachersApi } from "../axios";

export const fetchTeacher = createAsyncThunk(
    "teacher/fetchTeachers",
    async(_, { rejectWithValue }) => {
        try{
            const response = await getTeachersApi();
            return response;
        } catch(err) {
            return rejectWithValue(err?.response?.data);
        }
    }
);

const teacherSlice = createSlice({
    name: "teacher",
    initialState: {
        teachers: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchTeacher.pending, (state) => {
                state.loading = true;
                state.error = false;
            })
            .addCase(fetchTeacher.fulfilled, (state, action) => {
                state.loading = false;
                state.teachers = action.payload;
            })
            .addCase(fetchTeacher.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    }
});

export const selectTeachers = (state) => state.teacher.teachers;

export default teacherSlice.reducer;
