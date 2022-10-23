import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="bg-primary">
        <div className="container  mx-auto py-4">
          <div className="flex justify-between items-center">
            <ul className="flex justify-center items-center space-x-8">
              <li>
                <Link
                  className="font-semibold hover:text-white  ease-in-out duration-300"
                  to="/row-item"
                >
                  Row Items
                </Link>
              </li>
              <li>
                <Link
                  className="font-semibold hover:text-white  ease-in-out duration-300"
                  to="/buyer_list"
                >
                  Buyer List
                </Link>
              </li>
              <li>
                <Link
                  className="font-semibold hover:text-white  ease-in-out duration-300"
                  to="/employee-list"
                >
                  Employee List
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
                  className="font-semibold hover:text-white  ease-in-out duration-300"
                  to="/product"
                >
                  Product List
                </Link>
              </li>
            </ul>

            <input
              className=" py-2 px-4 min-w-[500px] rounded-lg"
              placeholder="Search Here"
              type="search"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
