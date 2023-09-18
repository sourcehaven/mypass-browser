import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { VaultEntry } from "@types";
import api from "api";

type State = {
  selection: VaultEntry[];
  loading: boolean;
  error: boolean;
  selectionNum: number;
  message?: string;
};

const initialState: State = {
  selection: [],
  loading: false,
  error: false,
  selectionNum: 0,
};

export const selectVaultEntries = createAsyncThunk("vault/selectVaultEntries", api.selectVaultEntries);

const slice = createSlice({
  name: "vault",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(selectVaultEntries.pending, (state) => ({
      ...state,
      loading: true,
      error: false,
      message: undefined,
    }));
    builder.addCase(selectVaultEntries.fulfilled, (state, action) => ({
      ...state,
      loading: false,
      error: false,
      message: undefined,
      selection: action.payload,
      selectionNum: action.payload.length,
    }));
    builder.addCase(selectVaultEntries.rejected, (state, action) => ({
      ...state,
      loading: false,
      error: true,
      message: action.error.message,
    }));
  },
});

export const actions = { ...slice.actions, selectVaultEntries };

export default slice.reducer;
