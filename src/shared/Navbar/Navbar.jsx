import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="bg-primary">
        <div className="container  mx-auto py-4 flex items-center justify-center">
          <div className="flex justify-between items-center">
            <ul className="flex justify-center items-center space-x-8">
              <li>
                <Link
                  className="font-semibold hover:btn-secondary p-2 rounded ease-in-out duration-300"
                  to="/row-item"
                >
                  Row Items
                </Link>
              </li>

              <li>
                <Link
                  className="font-semibold hover:btn-secondary p-2 rounded ease-in-out duration-300"
                  to="/addItem"
                >
                  Add Buyer
                </Link>
              </li>
              <li>
                <Link
                  className="font-semibold hover:text-white  ease-in-out duration-300"
                  to="/addItem"
                >
                  Add Product
                </Link>
              </li>
              <li>
                <Link
                  className="font-semibold hover:btn-secondary p-2 rounded ease-in-out duration-300"
                  to="/addItem"
                >
                  Add Employee
                </Link>
              </li>
              <li>
                <Link
                  className="font-semibold hover:btn-secondary p-2 rounded ease-in-out duration-300"
                  to="/product"
                >
                  Product List
                </Link>
              </li>
              <li>
                <Link
                  className="font-semibold hover:btn-secondary p-2 rounded ease-in-out duration-300"
                  to="/buyerlist"
                >
                  Buyer List
                </Link>
              </li>
              <li>
                <Link
                  className="font-semibold hover:btn-secondary p-2 rounded ease-in-out duration-300"
                  to="/employee-list"
                >
                  Employee List
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
