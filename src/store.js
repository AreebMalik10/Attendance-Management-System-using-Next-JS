import { configureStore } from "@reduxjs/toolkit";
import teacherReducer from "./app/teacher/teacherSlice";

const store = configureStore({
    reducer: {
        teacher: teacherReducer,
    },
});

export default store;