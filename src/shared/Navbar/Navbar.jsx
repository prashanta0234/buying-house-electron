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
                  className="font-semibold hover:bg-green-200/60 p-2 rounded ease-in-out duration-300"
                  to="/rawItems"
                >
                  Raw Items
                </Link>
              </li>

              <li>
                <Link
                  className="font-semibold hover:bg-green-200/60 p-2 rounded ease-in-out duration-300"
                  to="/AddOrder"
                >
                  Add Order
                </Link>
              </li>
              <li>
                <Link
                  className="font-semibold hover:bg-green-200/60 p-2 rounded ease-in-out duration-300"
                  to="/add-products"
                >
                  Add Product
                </Link>
              </li>
              <li>
                <Link
                  className="font-semibold hover:bg-green-200/60 p-2 rounded ease-in-out duration-300"
                  to="/addEMPLOYEE"
                >
                  Add Employee
                </Link>
              </li>
              <li>
                <Link
                  className="font-semibold hover:bg-green-200/60 p-2 rounded ease-in-out duration-300"
                  to="/productlist"
                >
                  Product List
                </Link>
              </li>
              <li>
                <Link
                  className="font-semibold hover:bg-green-200/60 p-2 rounded ease-in-out duration-300"
                  to="/buyerlist"
                >
                  Order list
                </Link>
              </li>
              <li>
                <Link
                  className="font-semibold hover:bg-green-200/60 p-2 rounded ease-in-out duration-300"
                  to="/employee-list"
                >
                  Employee List
                </Link>
              </li>
              <li>
                <Link
                  className="font-semibold hover:bg-green-200/60 p-2 rounded ease-in-out duration-300"
                  to="/rowitem-list"
                >
                  Available Materials
                </Link>
              </li>
              {/* <li>
                <Link
                  className="font-semibold hover:bg-green-200/60 p-2 rounded ease-in-out duration-300"
                  to="/graph"
                >
                  Graph
                </Link>
              </li> */}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
