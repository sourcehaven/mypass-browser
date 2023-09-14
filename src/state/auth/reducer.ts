import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "api";

type State = {
  loggedIn: boolean;
  loading: boolean;
  loginError: boolean;
  logoutError: boolean;
};

const initialState: State = {
  loggedIn: false,
  loading: false,
  loginError: false,
  logoutError: false,
};

export const getLogin = createAsyncThunk("auth/getLogin", api.getLogin);
export const login = createAsyncThunk("auth/login", api.login);
export const logout = createAsyncThunk("auth/logout", api.logout);

const slice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getLogin.pending, (state) => ({
      ...state,
      loading: true,
    }));
    builder.addCase(getLogin.fulfilled, (state) => ({
      ...state,
      loading: false,
      loggedIn: true,
    }));
    builder.addCase(getLogin.rejected, (state) => ({
      ...state,
      loading: false,
      loggedIn: false,
    }));
    builder.addCase(login.pending, (state) => ({
      ...state,
      loading: true,
      loginError: false,
    }));
    builder.addCase(login.fulfilled, (state) => ({
      ...state,
      loading: false,
      loginError: false,
      loggedIn: true,
    }));
    builder.addCase(login.rejected, (state) => ({
      ...state,
      loading: false,
      loginError: true,
    }));
    builder.addCase(logout.pending, (state) => ({
      ...state,
      loading: true,
      logoutError: false,
    }));
    builder.addCase(logout.fulfilled, (state) => ({
      ...state,
      loading: false,
      logoutError: false,
      loggedIn: false,
    }));
    builder.addCase(logout.rejected, (state) => ({
      ...state,
      loading: false,
      logoutError: true,
    }));
  },
});

export const actions = { ...slice.actions, getLogin, login, logout };

export default slice.reducer;
