import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Navbar } from "components/Navbar";
import { About, Home, Login, Registration } from "pages";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "state";

const App = () => {
  const dispatch = useDispatch();
  const loggedIn = useSelector((state: RootState) => state.auth.loggedIn);

  return (
    <BrowserRouter>
      {loggedIn && <Navbar />}
      <div className="container">
        <Routes>
          {loggedIn ?
            <>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
            </>
            :
            <>
              <Route path="/" element={<Login />} />
              <Route path="/registration" element={<Registration />} />
            </>
          }
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
