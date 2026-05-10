import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

type AuthUser = {
  id: string
  name: string
  role: 'viewer' | 'admin'
}

type AuthState = {
  isAuthenticated: boolean
  user: AuthUser | null
}

const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<AuthUser>) => {
      state.isAuthenticated = true
      state.user = action.payload
    },
    logout: (state) => {
      state.isAuthenticated = false
      state.user = null
    },
  },
})

export const { login, logout } = authSlice.actions
export default authSlice.reducer
