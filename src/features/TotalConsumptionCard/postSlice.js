import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

export const getPosts = createAsyncThunk("posts/getPosts", async ()=>{
    return fetch ("https://jsonplaceholder.typicode.com/comments")
    .then((res)=>res.json());
});

const postSlice = createSlice(({
    name : "posts",
    initialState: {
        posts:[],
        loading: false,
        fulfilled:false
    },
    extraReducers:{
        [getPosts.pending]: (state,action)=>{
            state.loading = true;
        },
        [getPosts.fulfilled]: (state,action)=>{
            state.loading=false;
            state.fulfilled=true;
            state.posts = action.payload;
        },
        [getPosts.rejected]: (state,action)=>{
            state.loading = false;
        }
    },
}));

export default postSlice.reducer