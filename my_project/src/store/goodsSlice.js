import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';


export const fetchData = createAsyncThunk("getData", async ()=>{
           const result = await axios(
                 'http://localhost:3001/catalog',
            );
            const goodsArr = result.data;
            return goodsArr;
         
})

const initialState = {
    data: [],
    status:"loading"
}

export const goodsSlice = createSlice({
    name : "goodsArr",
    initialState ,
    reducers : {

    },
    extraReducers:{
        [fetchData.pending]:(state,action) =>{
            state.data = [];
            state.status = "loading"
        },
        [fetchData.fulfilled]:(state,action) =>{
            state.data = action.payload;
            state.status = "loaded"
        }
    }
});

export const {} = goodsSlice.actions;
export const selectGoods = state => state.goods;
export default goodsSlice.reducer;