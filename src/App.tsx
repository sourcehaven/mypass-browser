import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Box } from "@mui/material";
import { AnyAction } from "redux";
import { ThemeProvider, createTheme } from "@mui/material";

import Navbar from "components/Navbar";
import { About, Home, Login, Registration } from "pages";
import { RootState } from "state";
import { actions } from "state/auth";
import { useConstructor } from "utils";

const theme = createTheme({
  palette: {
    primary: { main: "#404040" },
    secondary: { main: "#7ecc9e" },
  },
});

const App = () => {
  const dispatch = useDispatch();

  useConstructor(() => dispatch(actions.getLogin() as unknown as AnyAction));

  const loggedIn = useSelector((state: RootState) => state.auth.loggedIn);

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        {loggedIn && <Navbar />}
        <Box component="main" className="container" sx={{ flexGrow: 1, p: 3 }}>
          <Routes>
            {loggedIn ? (
              <>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
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
