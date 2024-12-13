import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { GetJsonData } from "../../API/auth/api";

const initialState = {
  loading: false,
  jsondata: {},
};

export const getjsonData = createAsyncThunk(
  "signin/getjsonData",
  async (data) => {
    try {
      const response = await GetJsonData(data);
      return response; // Successfully resolved data
    } catch (error) {
      return {
        status: false,
        message: error.response?.data?.message || "Something went wrong",
      };
    }
  }
);

export const authSlice = createSlice({
  name: "signin",
  initialState,
  reducers: {
    logoutUserAdmin(state, action) {
      localStorage.clear();
      sessionStorage.clear();
      return {
        ...state,
        loading: false,
        jsondata: {},
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getjsonData.pending, (state) => {
        state.loading = true;
      })
      .addCase(getjsonData.fulfilled, (state, action) => {
        state.loading = false;
        state.jsondata = action.payload;
        console.log(action, 47);

        if (action.payload.status == false) {
          //   toast.error(action.payload.message);
        } else {
          // localStorage.setItem("token", action.payload.data.token);
        }
      })
      .addCase(getjsonData.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const { logoutUserAdmin } = authSlice.actions;
export default authSlice.reducer;
