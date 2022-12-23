import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

export const getMeteos = createAsyncThunk("meteos/getMeteos", async ()=>{
    return fetch ("https://api.openweathermap.org/data/2.5/weather?lat=50.5333300&lon=2.6333300&appid=6bcc7289b70a82602436e1d5a4a53abb")
    .then((res)=>res.json());
});

const meteoSlice = createSlice(({
    name : "meteos",
    initialState: {
        meteos:[],
        loading: false
    },
    extraReducers:{
        [getMeteos.pending]: (state,action)=>{
            state.loading = true;
        },
        [getMeteos.fulfilled]: (state,action)=>{
            state.loading=false;
            state.meteos = action.payload;
        },
        [getMeteos.rejected]: (state,action)=>{
            state.loading = false;
        }
    },
}));

export default meteoSlice.reducer