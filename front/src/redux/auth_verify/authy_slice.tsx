import { createSlice } from '@reduxjs/toolkit'

export interface authentication {
    isAuthenticated: boolean
    user_name:string
}

const initialState: authentication = {
  isAuthenticated: false,
  user_name:'',
}

export const checkAuthentication = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action: { payload: string }) => {
      state.isAuthenticated = true,
      state.user_name = action.payload

    },
    logout: (state) => {
      state.isAuthenticated = false,
      state.user_name = ''
    }
  },
})

// Action creators are generated for each case reducer function
export const { login, logout } = checkAuthentication.actions
export default  checkAuthentication.reducer