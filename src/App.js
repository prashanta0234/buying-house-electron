import React from "react";
import AddItem from "./component/AddItem/AddItem";
import Login from "./component/Login/Login";

import { Routes, Route } from "react-router-dom";
import BuyerList from "./component/BuyerList";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/addItem" element={<AddItem />} />
        <Route path="/buyerlist" element={<BuyerList />} />
      </Routes>
    </>
  );
};

export default App;
