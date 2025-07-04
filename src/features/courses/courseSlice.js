import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = 'https://6857cee421f5d3463e5640fd.mockapi.io/courses';

export const fetchCourses = createAsyncThunk('courses', async ()=>{
    const response = await axios.get(API_URL);
    return response.data;
})

export const addCourse = createAsyncThunk('courses/add', async (course)=>{
    const response = await axios.post(API_URL, course);
    return response.data;
})

export const updateCourse = createAsyncThunk('courses/update', async (course)=>{
    const response = await axios.put(`${API_URL}/${course.id}`, course);
    return response.data;
})

export const deleteCourse = createAsyncThunk('course/delete', async (id)=>{
    await axios.get(`${API_URL}/${id}`);
    return id;
})

const courseSlice = createSlice({
    name: 'courses',
    initialState:{
        courses: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
  builder
    .addCase(fetchCourses.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(fetchCourses.fulfilled, (state, action) => {
      state.loading = false;
      state.courses = action.payload; // ✅ FIXED
      state.error = null;
    })
    .addCase(fetchCourses.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    })
    .addCase(addCourse.fulfilled, (state, action) => {
      state.courses.push(action.payload);
    })
    .addCase(updateCourse.fulfilled, (state, action) => {
      const index = state.courses.findIndex((course) => course.id === action.payload.id);
      if (index !== -1) {
        state.courses[index] = action.payload;
      }
    })
    .addCase(deleteCourse.fulfilled, (state, action) => {
      state.courses = state.courses.filter((course) => course.id !== action.payload);
    });
}

});

export default courseSlice.reducer; 


// extraReducers: (builder) =>{
//         builder
//         // fetch
//         .addCase(fetchCourses.pending, (state)=>{
//             state.loading = true;
//             state.error = null;
//         })
//         .addCase(fetchCourses.fulfilled, (state, action)=>{
//             state.loading = false;
//             state.error = action.payload;
//             state.error = null;
//         })
//         .addCase(fetchCourses.rejected, (state, action)=>{
//             state.loading = false;
//             state.error = action.error.message;
//         })
//         // Create
//         .addCase(addCourse.fulfilled, (state, action)=>{
//             state.courses.push(action.payload);
//         })
//         // Update
//         .addCase(updateCourse.fulfilled, (state, action)=>{
//             const index = state.courses.findIndex((course) => course.id === action.payload.id);
//             if(index !== -1){
//                 state.courses[index] = action.payload;
//             }
//         })
//         // Delete
//         .addCase(deleteCourse.fulfilled, (state, action)=>{
//             state.courses = state.courses.filter((course) => course.id !== action.payload);
//         })

//     }