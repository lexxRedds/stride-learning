import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IAuthState } from '@components/interfaces/auth';

const initialState: IAuthState = {
  userId: null,
  email: null,
  firstName: null,
  lastName: null,
  picture: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<IAuthState>) => {
      return { ...action.payload };
    },
    logout: () => {
      return { ...initialState };
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;