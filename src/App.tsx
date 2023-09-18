import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Box, ThemeOptions } from "@mui/material";
import { AnyAction } from "redux";
import { ThemeProvider, createTheme } from "@mui/material";

import Navbar from "components/Navbar";
import { About, Home, Login, Registration } from "pages";
import { RootState } from "state";
import { actions } from "state/auth";
import { useConstructor } from "utils";

const baseTheme: ThemeOptions = {
  palette: {
    primary: {
      main: "#3f51b5",
    },
    secondary: {
      main: "#f50057",
    },
  },
};

const lightTheme: ThemeOptions = {
  ...baseTheme,
  palette: {
    mode: "light",
    ...baseTheme.palette,
  },
};
const darkTheme: ThemeOptions = {
  ...baseTheme,
  palette: {
    mode: "dark",
    ...baseTheme.palette,
  },
};

const themeSelector = (theme: "light" | "dark") => {
  switch (theme) {
    case "light":
      return createTheme(lightTheme);
    case "dark":
      return createTheme(darkTheme);
  }
};

const App = () => {
  const dispatch = useDispatch();

  useConstructor(() => dispatch(actions.getLogin() as unknown as AnyAction));

  const loggedIn = useSelector((state: RootState) => state.auth.loggedIn);
  const theme = useSelector((state: RootState) => state.theme.mode);

  return (
    <ThemeProvider theme={themeSelector(theme)}>
      <BrowserRouter>
        <Box component="main" className="container" sx={{ flexGrow: 1, p: 3 }}>
          <Routes>
            {loggedIn ? (
              <>
                <Route path="/" element={<Navbar mainComponent={Home}/>} />
                <Route path="/about" element={<Navbar mainComponent={About}/>} />
              </>
            ) : (
              <>
                <Route path="/" element={<Login />} />
                <Route path="/registration" element={<Registration />} />
              </>
            )}
          </Routes>
        </Box>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
