import React from "react";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import GlobalStyles from "../assets/styles/style";
import Login from "../pages/login/Login";
import HomePanel from "../pages/panel/HomePanel";
import PrivateOutlet from "../utils/PrivateOutlet";

function App() {
  const [auth, setAuth] = useState(false);
  return (
    <div className="App">
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<PrivateOutlet auth={auth} />}>
          <Route path="home" element={<HomePanel />} />
        </Route>
        <Route path="login" element={<Login auth={auth} setAuth={setAuth} />} />
      </Routes>
    </div>
  );
}

export default App;
