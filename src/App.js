import React from "react";
import AddItem from "./component/AddItem/AddItem";
import Login from "./component/Login/Login";

import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/addItem" element={<AddItem />} />
      </Routes>
    </>
  );
};

export default App;
