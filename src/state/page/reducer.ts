import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type Page = "passwords" | "folders" | "settings" | "about";
type State = {
  current: Page;
};

const initialState: State = {
  current: "passwords",
};

const slice = createSlice({
  name: "page",
  initialState: initialState,
  reducers: {
    switchToPage: (state, action: PayloadAction<Page>) => ({
      ...state,
      current: action.payload,
    }),
    switchToPasswords: (state) => ({
      ...state,
      current: "passwords",
    }),
    switchToFolders: (state) => ({
      ...state,
      current: "folders",
    }),
    switchToSettings: (state) => ({
      ...state,
      current: "settings",
    }),
    switchToAbout: (state) => ({
      ...state,
      current: "about",
    }),
  },
});

export const actions = { ...slice.actions };

export default slice.reducer;
