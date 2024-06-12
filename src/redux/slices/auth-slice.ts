import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { LoginFormData } from "../../common-types/form-data-type"
import { Loading } from "../../common-types/loading-type"
import { User } from "../../common-types/user-type"
import { axiosInstance } from "../../utils/axios-instance"
import { AxiosError } from "axios"
import { ApiError } from "../../common-types/api-error-type"

export const login = createAsyncThunk("auth/login", async (data: LoginFormData, thunkApi) => {
  try {
    const response = await axiosInstance.post("/auth/login", data)
    return response.data
  } catch (error) {
    const axiosError = error as AxiosError
    const response = axiosError.response?.data as ApiError
    return thunkApi.rejectWithValue(response.message)
  }
})

interface InitialState {
  loading: Loading.Idle | Loading.Pending | Loading.Fulfilled | Loading.Rejected
  error: string | null
  access_token: string | null
  user: User | null
}

const initialState: InitialState = {
  loading: Loading.Idle,
  error: null,
  access_token: null,
  user: null,
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAccessToken: (state, action) => {
      state.access_token = action.payload
    },
  },
  extraReducers(builder) {
    /**
     * Login
     */
    builder.addCase(login.pending, (state) => {
      state.loading = Loading.Pending
      state.error = null
    })
    builder.addCase(login.fulfilled, (state, action) => {
      state.loading = Loading.Fulfilled
      state.error = null
      state.access_token = action.payload.access_token
      state.user = action.payload.user
    })
    builder.addCase(login.rejected, (state, action) => {
      state.loading = Loading.Rejected
      state.error = action.payload as string
    })
  },
})
export const { setAccessToken } = authSlice.actions
export default authSlice.reducer
