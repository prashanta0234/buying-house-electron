import React from "react";

import Login from "./component/Login/Login";

import { Routes, Route } from "react-router-dom";
import BuyerList from "./component/BuyerList";
import AddProduct from "./component/AddProduct/AddProduct";
import RawItem from "./component/RawItem/RawItem";
import AddEmp from "./component/AddEmp/AddEmp";
import ProductList from "./component/AddProduct/ProductList";
import EmptList from "./component/AddEmp/Emplist";
import AddOrder from "./component/AddItem/AddOrder";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/rawItems" element={<RawItem />} />
        <Route path="/AddOrder" element={<AddOrder />} />
        <Route path="/buyerlist" element={<BuyerList />} />
        <Route path="/add-products" element={<AddProduct />} />
        <Route path="/productlist" element={<ProductList />} />
        <Route path="/addEMPLOYEE" element={<AddEmp />} />
        <Route path="/employee-list" element={<EmptList />} />
      </Routes>
    </>
  );
};

export default App;
