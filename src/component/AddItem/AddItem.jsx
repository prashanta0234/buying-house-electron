import React from "react";
import Navbar from "../../shared/Navbar/Navbar";
import logo from "../../images/logo/logo.svg";

const AddItem = () => {
  return (
    <>
      <Navbar />

      <div className="px-12 md:px-28 py-12 bg-main container mx-auto mt-12 w-full rounded-sm">
        <div className="flex justify-center">
          <p>Logo Here</p>
        </div>
        <div className="bg-neutral bg-opacity-30 text-center my-6 py-4 rounded-sm">
          <p className="font-bold text-2xl text-white ">ADD NEW ORDER</p>
        </div>

        {/* input area */}
        <form>
          <div className="lg:px-28">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
              <input
                className="py-4 rounded-md px-4 placeholder:text-md focus:text-md outline-none"
                type="text"
                name="name"
                placeholder="Buyer Name"
              />
              <input
                className="py-4 rounded-md px-4 placeholder:text-md focus:text-md outline-none"
                type="text"
                name="phone"
                placeholder="Buyer Phone"
              />
              <input
                className="py-4 rounded-md px-4 placeholder:text-md focus:text-md outline-none"
                type="text"
                name="product_name"
                placeholder="Product Name"
              />
              <input
                className="py-4 rounded-md px-4 placeholder:text-md focus:text-md outline-none"
                type="text"
                name="email"
                placeholder="Email Address"
              />
            </div>

            <input
              className="py-4 w-full my-6 rounded-md px-4 placeholder:text-md focus:text-md outline-none"
              type="text"
              name="quantity"
              placeholder="Product Quantity"
            />
            <textarea
              className="py-4 w-full rounded-md px-4 placeholder:text-md focus:text-md outline-none"
              name="address"
              cols="10"
              rows="5"
              placeholder="Your Address Here"
            ></textarea>
            <button className="btn btn-active btn-secondary font-bold text-2xl capitalize  w-full mt-8">
              Product Add
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddItem;
