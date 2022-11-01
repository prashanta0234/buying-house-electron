import React from "react";
import AddItem from "./component/AddItem/AddItem";
import Login from "./component/Login/Login";

import { Routes, Route } from "react-router-dom";
import BuyerList from "./component/BuyerList";
import AddProduct from "./component/AddProduct/AddProduct";
import RawItem from "./component/RawItem/RawItem";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/rawItems" element={<RawItem />} />
        <Route path="/AddOrder" element={<AddItem />} />
        <Route path="/buyerlist" element={<BuyerList />} />
        <Route path="/add-products" element={<AddProduct/>} />
      </Routes>
    </>
  );
};

export default App;
