import { createSlice } from '@reduxjs/toolkit';
import { AuthorizationStatus, SlicesName } from '../../const';
import { AuthorizationUserProcess } from '../../types/state';
import { checkAuthAction, loginAction, logoutAction } from '../api-actions';

const initialState: AuthorizationUserProcess = {
  authorizationStatus: AuthorizationStatus.Unknown,
  userData: null,
};

export const authorizationUserProcess = createSlice({
  name: SlicesName.User,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(checkAuthAction.fulfilled, (state, action) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
        state.userData = action.payload;
      })
      .addCase(checkAuthAction.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
        state.userData = null;
      })
      .addCase(loginAction.fulfilled, (state, action) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
        state.userData = action.payload;
      })
      .addCase(loginAction.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
        state.userData = null;
      })
      .addCase(logoutAction.fulfilled, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
        state.userData = null;
      });
  }
});
